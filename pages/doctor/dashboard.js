import { doc, getDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import AuthButton from "../../components/AuthenticationButtons/AuthButton";
export default function Dashboard() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [dataState, setDataState] = useState(null);
  useEffect(() => {
    if (status === "authenticated") {
      async function fetchPatientsDetails() {
        const docRef = doc(db, "doctors", session.user.email);
        const docSnap = await getDoc(docRef);
        const dbdata = docSnap.data();
        if (docSnap.exists()) {
          setDataState(dbdata);
        } else {
          // when no data of user set this state 0 so that we can check
          setDataState(0);
        }
      }

      fetchPatientsDetails();
    }
  }, [status]);

  console.log(dataState);
  if (status === "loading") {
    return "Loading or not authenticated...";
  } else {
    return (
      <>
        {dataState == null && (
          <>
            <div className="max-w-[90%] sm:w-72 md:w-96 mx-auto text-center flex flex-col justify-center items-center gap-4 my-6">
              {" "}
              You are not logged in <AuthButton />
              <p>
                New to Platform?{" "}
                <Link href="/register" className="text-sky-600">
                  Register here
                </Link>
              </p>
            </div>
          </>
        )}
        {dataState == 0 && (
          <>
            Sorry Your account is not registered as a doctor{" "}
            <Link href="/register" className="text-sky-600">
              register it here
            </Link>
          </>
        )}
        {dataState != 0 && dataState != null && (
          <>
            {JSON.stringify(dataState)} <AuthButton />
          </>
        )}
      </>
    );
  }
}

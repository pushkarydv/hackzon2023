import { doc, getDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AuthButton from "../../components/AuthenticationButtons/AuthButton";
import { db } from "../../config/firebase";

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
  return (
    <div>
      dashboard <br /> <br /> <AuthButton />
    </div>
  );
}

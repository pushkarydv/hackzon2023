import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import AuthButton from "../../components/AuthenticationButtons/AuthButton";

export default function Dashboard() {
  const router = useRouter();
  const { data, status } = useSession();
  const [loggedIn, setLoggedIn] = useState(false);

  if (status === "loading") {
    return "Loading or not authenticated...";
  }
  if (status === "authenticated") {
    return (
      <div>
        dashboard <br /> {JSON.stringify(data)} <br /> <AuthButton />
      </div>
    );
  } else {
    return (
      <>
        <AuthButton />
      </>
    );
  }
}

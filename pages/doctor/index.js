import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import AuthButton from "../../components/AuthenticationButtons/AuthButton";

export default function Dashboard() {
  const router = useRouter();
  const { data } = useSession();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/register");
    },
  });
  if (status === "loading") {
    return "Loading or not authenticated...";
  }
  return (
    <div>
      dashboard {JSON.stringify(data)} <AuthButton />
    </div>
  );
}

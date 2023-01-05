import { useSession, signIn, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function AuthButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button
          className="btn btn-outline btn-neutral "
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </>
    );
  }
  return (
    <>
      <button
        className="btn btn-outline btn-info gap-4"
        onClick={() => signIn("google")}
      >
        <FcGoogle size={32} />
        Continue with google
      </button>
    </>
  );
}

import { useSession, signIn, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function AuthButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {" "}
        you are already logged in <br />
        <button
          className="p-2 rounded-md bg-black text-white text-center w-full "
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
        className="btn btn-outline btn-info gap-4 m-auto w-max"
        onClick={() => signIn("google")}
      >
        <FcGoogle size={32} />
        Continue with google
      </button>
    </>
  );
}

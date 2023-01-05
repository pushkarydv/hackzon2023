import { useSession, signIn, signOut } from "next-auth/react";

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
        className="p-2 rounded-md bg-rose-500 text-white text-center w-full "
        onClick={() => signIn("google")}
      >
        Continue with google
      </button>
    </>
  );
}

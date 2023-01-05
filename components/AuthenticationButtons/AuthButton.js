import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button
          className="p-2 bg-black text-white rounded-md"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        className="p-2 bg-black text-white rounded-md"
        onClick={() => signIn("google")}
      >
        Sign in
      </button>
    </>
  );
}

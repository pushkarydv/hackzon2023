import Head from "next/head";
import React from "react";

export default function doctor() {
  return (
    <>
      <Head>
        <title>Schedular</title>
        <meta name="description" content="Schedular Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-12">
        <div className="w-[90%] sm:w-80 md:w-96 rounded-xl ring-2 mx-auto ring-slate-200 p-2">
          <div className="text-xl font-semibold text-center mt-4">
            Heyy doctor
          </div>

          <button
            className="p-2 rounded-md bg-rose-500 text-white my-4 text-center w-full "
            onClick={() => signIn("google")}
          >
            Continue with google
          </button>
        </div>
      </div>
    </>
  );
}

import { signIn } from "next-auth/react";
import Head from "next/head";
import React from "react";
import AuthButton from "../../components/AuthenticationButtons/AuthButton";

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
          <div className="text-xl font-semibold text-center my-4">
            Heyy doctor
          </div>
          <AuthButton />
        </div>
      </div>
    </>
  );
}

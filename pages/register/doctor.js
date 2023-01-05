import { useSession } from "next-auth/react";
import Head from "next/head";
import React from "react";
import AuthButton from "../../components/AuthenticationButtons/AuthButton";
import DoctorForm from "../../components/Register/DoctorForm";

export default function Doctor() {
  const { data: session, status } = useSession();

  return (
    <>
      <Head>
        <title>Schedular</title>
        <meta name="description" content="Schedular Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-full md:w-10/12 m-auto flex flex-col md:flex-row  items-center justify-between min-h-screen">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          {status === "loading" || status === "unauthenticated" ? (
            <AuthButton />
          ) : (
            <DoctorForm />
          )}
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/images/doctor1.png"
            alt=""
            srcSet=""
            className="w-full m-auto"
          />
        </div>
      </section>
    </>
  );
}

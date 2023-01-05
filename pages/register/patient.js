import Head from "next/head";
import React from "react";

export default function patient() {
  return (
    <>
      <Head>
        <title>Schedular</title>
        <meta name="description" content="Schedular Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-full md:w-10/12 m-auto flex flex-col md:flex-row  items-center justify-between">
        <div className="w-full md:w-1/2">
          <form action="">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-10/12"
            />
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/images/patient.png"
            alt=""
            srcset=""
            className="w-full m-auto"
          />
        </div>
      </section>
    </>
  );
}

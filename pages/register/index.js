import Head from "next/head";
import React from "react";
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";
import Choose from "../../components/Register/Choose";

export default function index() {
  return (
    <>
      <Head>
        <title>Schedular</title>
        <meta name="description" content="Schedular Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Choose />
      <Footer />
    </>
  );
}

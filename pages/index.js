import Head from "next/head";
import About from "../components/Home/About";
import Hero from "../components/Home/Hero";
import WhyUs from "../components/Home/Whyus";

export default function Home() {
  return (
    <>
      <Head>
        <title>Schedular</title>
        <meta name="description" content="Schedular Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <About />
      <WhyUs />
    </>
  );
}

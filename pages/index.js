import Head from "next/head";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Trusted from "@/components/Trusted";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quran Academy</title>
      </Head>
      <main>      
        <Hero />
        <Courses/>
        <Trusted/>
        <AboutUs/>
       
      </main>
    </>
  );
}

import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Courses from "@/components/Courses";
import Trusted from "@/components/Trusted";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Quran Academy</title>
      </Head>
      <main>
        {/* <Navbar /> */}
        <Hero />
        <Categories/>
        <Courses/>
        <Trusted/>
        <AboutUs/>
        {/* <Footer/> */}
      </main>
    </>
  );
}

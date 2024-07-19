import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { UserProvider } from "@/context/UserContext";
import "@/styles/globals.scss";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <Navbar />
        <div className=" fixed bottom-6 right-10 ">
          <Link href="https://wa.me/+923179674898">
            <img
              className="w-[70px] rounded-[26px]"
              src="./assets/whatsappLogo.avif"
              alt="whatsappLogo"
            />
          </Link>
        </div>
        <Component {...pageProps} />
        <Footer />
      </UserProvider>
    </>
  );
}

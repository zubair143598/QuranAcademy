import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { UserProvider } from "@/context/UserContext";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
  <>
  <UserProvider>

  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </UserProvider>
  </>

)
}

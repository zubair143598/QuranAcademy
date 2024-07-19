// /components/Navbar.js
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <nav
      className={`lg:fixed z-50 top-0 left-0 lg:mt-0 -mt-1 w-full lg:p-4 transition-all duration-300 ${
        isScrolled
          ? "  lg:bg-white  "
          : "bg-gradient-to-r from-orange-400 to-pink-500"
      }`}
    >
      <div
        className={` ${
          isScrolled ? " justify-evenly " : "justify-between"
        }  container  p-4 lg:p-0 flex  items-center`}
      >
        <Link href="/" className=" font-bold">
        <img
                className="w-[70px] hover:scale-125 transition-transform transform rounded-xl"
                src="./assets/1.PNG"
                alt=""
              />
        </Link>
        <div className=" hidden md:flex space-x-6">
          <Link href="/" className="text-[20px] duration-300 hover:scale-125 transition-transform transform font-bold">
            Home
          </Link>
          
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link href="#courses" className="text-[20px] font-bold duration-300 hover:scale-125 transition-transform transform">Courses</Link>
            {isDropdownOpen && (
              <div className="absolute  top-full left-0 w-48 bg-white shadow-lg rounded-md z-10">
                <Link href="/MasnoonPrayer" className=" hover:bg-black hover:text-white text-[20px] font-bold px-4 py-2 ">
                  MasnoonPrayer
                </Link>
                <Link href="/Nooraniqaida" className="block hover:bg-black hover:text-white px-4 text-[20px] font-bold py-2 ">
                  Nooraniqaida
                </Link>
                <Link href="/Qaida" className="block px-4 hover:bg-black hover:text-white text-[20px] font-bold py-2 ">
                  Qaida
                </Link>
                <Link href="/QRWT" className="block px-4 hover:bg-black hover:text-white text-[20px] font-bold py-2 ">
                  QRWT
                </Link>
                <Link href="/SixKalimas" className="block hover:bg-black hover:text-white text-[20px] font-bold px-4 py-2 ">
                  SixKalimas
                </Link>
              </div>
            )}
          </div>
          <Link href="#AboutUs" className="text-[20px] duration-300 hover:scale-125 transition-transform transform font-bold">
            About Us
          </Link>
          <Link href="#footer" className="text-[20px] duration-300  scroll-smooth hover:scale-125 transition-transform transform font-bold">
            Contact Us
          </Link>
        </div>
        <div className="flex gap-x-4">
        <Link href="/Meeting" className="text-[20px] duration-300 hover:scale-125 transition-transform transform font-bold">
            Meeting
          </Link>
          {user ? (
            <>
              <FaUser className=" mt-1" />
              <span className="text-[20px] font-bold">{user.username}</span>
              <button onClick={handleLogout} className="ml-2 text-[20px] duration-300 hover:scale-125 transition-transform transform font-bold">
                Logout
              </button>
            </>
          ) : (
            <Link className="text-[20px] duration-300 hover:scale-125 transition-transform transform font-bold" href="/LoginForm">Login</Link>
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r flex flex-col items-end from-orange-400 to-pink-500">
          <div>

          <Link href="/" className="block px-4 py-2 text-[20px] font-bold">
            Home
          </Link>
          
          <Link href="#Courses" className="block px-4 py-2 text-[20px] font-bold ">
            Courses
          </Link>
          <Link href="#AboutUs  " className="block px-4 py-2 text-[20px] font-bold">
            About Us
          </Link>
          <Link href="#footer" className="block px-4 py-2 text-[20px] font-bold ">
            Contact Us
          </Link>
      </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

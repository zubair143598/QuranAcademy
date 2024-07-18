import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div className=" bg-black py-16 text-white">
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-[80%] mx-auto">
        <div>
          <ul className=" space-y-5">
            <li>
              <img
                className="w-[88px] rounded-xl"
                src="./assets/1.PNG"
                alt=""
              />
            </li>
            <li>
              <Link className="flex gap-x-2" href="#">
                <FaFacebook className=" mt-1" />
                Facebook
              </Link>
            </li>
            <li>
              <Link className="flex gap-x-2" href="#">
                <FaInstagram className=" mt-1" />
                Instagram
              </Link>
            </li>
            <li>
              <Link className="flex gap-x-2" href="#">
                <FaTwitter className=" mt-1" /> Twitter
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className=" space-y-4">
            <li>
              {" "}
              <Link href="#">Home</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="#">Categories</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="#">Courses</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="#">About Us</Link>{" "}
            </li>
            <li>
              {" "}
              <Link href="#">Contact Us</Link>{" "}
            </li>
          </ul>
        </div>
        <div>
          <ul className=" space-y-4">
            <li>
              <Link href="#">Profile</Link>
            </li>
            <li>
              <Link href="/LoginForm">Login</Link>
            </li>
            <li>
              <Link href="LoginForm">Register</Link>
            </li>
            <li>
              <Link href="#">instructors</Link>
            </li>
            <li>
              <Link href="#">Dashboard</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className=" space-y-4">
            <li className="flex gap-x-2">
              <FaLocationDot className="mt-1" />
              San Francisco, California, CA 94119
            </li>
            <li className="flex gap-x-2">
              <MdAttachEmail className="mt-1" /> muhammad18349@gmail.com
            </li>
            <li className="flex gap-x-2">
              <FaPhone className="mt-1" />
              O3179674898
            </li>
          </ul>
        </div>
      </div>
      <p className=" h-[1px] w-[80%] mx-auto mt-8 bg-white" ></p>
      <div>
        <h6 className=" tracking-[2px] mx-2 text-[20] text-center font-semibold mt-6">@Copywrite by Huzaifa Ali. All rights reserved.</h6>
      </div>
    </div>
  );
};

export default Footer;

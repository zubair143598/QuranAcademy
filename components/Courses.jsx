import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Courses = () => {
  const CoursesDetails = [
    {
      image: "./assets/14.PNG",
      price: "$20.00/month",
      title: "Learn Noorani Qaida",
      recommended: "{For Beginners}",
      classDuration: "Class Duration: 30 minutes",
      periodDuration: "8 classes/month",
      details: "",
    },
    {
      image: "./assets/8.PNG",
      price: "$20.00/month",
      title: "Learn Quran Recitation with Tajweed",

      classDuration: "Class Duration: 30 minutes",
      periodDuration: "8 classes/month",
      details: "",
    },
    {
      image: "./assets/15.jpg",
      price: "$20.00/month",
      title: "Learn Quran Memorization with tajweed",

      classDuration: " Class Duration: 30 minutes",
      periodDuration: "8 classes/month",
      details: "",
    },
    {
      image: "./assets/16.jpg",
      price: "$20.00/month",
      title: "Short Surah Memorization",

      classDuration: "Class Duration: 30 minutes",
      periodDuration: "8 classes/month",
      details: "",
    },
    {
      image: "./assets/21.jpeg",
      price: "$20.00/month",
      title: "40 Masnoon Prayers",

      classDuration: "Class Duration: 30 minutes",
      periodDuration: "8 classes/month",
      details: "",
    },
    {
      image: "./assets/22.jpg",
      price: "$20.00/month",
      title: "Basic Islamic Knowledge",

      classDuration: "Class Duration: 30 minutes",
      periodDuration: "8 classes/month",
      details: "",
    },
  ];

  return (
    <div id="courses" className=" bg-gradient-to-r from-orange-400 to-pink-500 ">
      <div className=" text-center pt-10">
        <h6 className=" text-[24px] font-bold">Courses</h6>
        <h3 className=" text-[40px] font-bold">Courses We Offer</h3>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center  py-16 gap-y-10 ">
        {CoursesDetails.map((val, index) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
              
              className=" w-[70%] bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="w-full h-[10rem] overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center"
                  src={val.image}
                  alt="Noorani"
                />
              </div>
              <div>
                <h5 className="text-[18px] font-bold text-[#dab5b3] ml-5">
                  {val.price}
                </h5>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-[24px]">{val.title}</div>
                <div className="font-bold text-[24px] mb-2">
                  {val.recommended}
                </div>

                <p className="text-gray-700 text-[1.2rem]">
                  {val.classDuration}
                </p>
                <p className="text-gray-700 text-[1.2rem]">
                  [{val.periodDuration}]
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 text-end">
                <Link href="/Qaida">
                  <button className=" fond-bold text-[18px] px-10 py-3 hover:bg-red-500 transition-all duration-500 hover:text-white bg-[#7ae11e] rounded-[51%]">
                    View Details
                  </button>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;

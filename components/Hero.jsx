/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const online = ["Online", "Quran", "Academy"];
  const baseDuration = 0.5;

  return (
    <div className="bg-gradient-to-r from-orange-400 to-pink-500 mt-[-1px] lg:mt-0  pt-[3rem]">
      <div className="flex justify-center space-x-5 ">
        {online.map((val, index) => {
          const currentDuration = baseDuration + index * 0.2;
          const currentDelay = index * 0.3;
          return (
            <motion.h1
              ref={ref}
              initial={{
                y: 50,
                opacity: 0,
              }}
              animate={
                isInView ? { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 } : {}
              }
              transition={{
                duration: currentDuration,
                delay: currentDelay,
              }}
              key={index}

              className="space-x-5 md:text-[3.8rem] text-[2rem]  font-bold text-center "
            >
              {val}
            </motion.h1>
          );
        })}
      </div>
      <div className=" grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 space-y-6 ">
        <div className="flex justify-center items-center ">
          <Link href="/Nooraniqaida">
            <img
              className="w-[250px] hover:scale-125 transition-transform transform h-[350px]"
              src="./assets/Noorani Qaida.png"
              alt="NC"
            />
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <Link href="/QRWT">
            <img
              className="w-[250px] h-[350px] hover:scale-125 transition-transform transform"
              src="./assets/Tajweed.PNG"
              alt="Tajweed"
            />
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <Link href="/MasnoonPrayer">
            <img
              className="w-[250px] h-[350px] hover:scale-125 transition-transform transform"
              src="./assets/MP.PNG"
              alt="MP"
            />
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <Link href="/TenSurah">
            <img
              className="w-[250px] h-[350px] hover:scale-125 transition-transform transform"
              src="./assets/SSM.PNG"
              alt="SSM"
            />
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <Link href="/SixKalimas">
            <img
              className="w-[250px] h-[350px] hover:scale-125 transition-transform transform"
              src="./assets/SKA.PNG"
              alt="SKA"
            />
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <Link href="/SixKalimas">
            <img
              className="w-[250px] h-[350px] hover:scale-125 transition-transform transform"
              src="./assets/SKA.PNG"
              alt="SKA"
            />
          </Link>
        </div>
      </div>

      <p className="w-[90%] bg-black h-[2px]  mx-auto mt-10" />
    </div>
  );
};

export default Hero;

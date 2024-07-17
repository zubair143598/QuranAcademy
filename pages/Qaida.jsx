import Hero from "@/components/quaida/Hero";
import QuranRecitation from "@/components/quaida/QuranRecitation";
import React from "react";

const Qaida = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #ff7eb9, #ff65a3, #7afcff, #feff9c, #fff740)",
      }}
      className=" pt-6 lg:pt-20 pb-10"
    >
      <Hero/>
     <p className="bg-gradient-to-r from-orange-400 to-pink-500 py-[3px] w-[90%] mx-auto my-6"></p>
      <QuranRecitation/>
    </div>
  );
};

export default Qaida;

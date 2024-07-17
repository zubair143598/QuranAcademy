import React from "react";

const AboutUs = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #ff7eb9, #ff65a3, #7afcff, #feff9c, #fff740)",
      }}
    >
      <div className=" w-[80%] mx-auto py-20 grid grid-cols-1 lg:grid-cols-2 justify-items-center">
        <div className="  ">
          <img className="w-[30rem]" src="./assets/8.png" alt="" />
        </div>
        <div>
          <div>
            <h2 className=" text-[40px] font-bold">
              Want to learn about islam? join us today.
            </h2>
            <p className=" text-[1.2rem]">
              Here you will learn knowledge about islam and islamic history.
            </p>
            <h4 className=" text-[30px] font-bold">Best Courses</h4>
            <p className=" text-[1.2rem] font-bold">Top rated instructors</p>
          </div>
          <div className=" mt-3">
            <button className=" py-3 px-10 rounded-3xl hover:bg-red-500 hover:text-white text-[20px] font-bold bg-[#DAB5B3] ">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

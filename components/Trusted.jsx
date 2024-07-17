import React from "react";

const Trusted = () => {
  const countriesFlags = [
    {
      image: "./assets/f5.jpg",
      alt: "Australia",
    },
    {
      image: "./assets/f4.jpg",
      alt: "India",
    },
    {
      image: "./assets/f3.jpg",
      alt: "USA",
    },
    {
      image: "./assets/f2.jpeg",
      alt: "Canada",
    },
    {
      image: "./assets/f1.jpg",
      alt: "Brazil",
    },
    {
      image: "./assets/f6.webp",
      alt: "Italy",
    },
    {
        image: "./assets/f7.jpeg",
        alt: "Germany",
      },
      {
        image: "./assets/f8.jpg",
        alt: "France",
      },
  ];

  return (
    <div
      className="py-16 bg-[#D592C5]"
      
    >
      <div className=" text-center">
        <h6 className=" text-[16px] lg:text-[20px] font-bold">Trusted By</h6>
        <h3 className=" text-[22px] lg:text-[35px] font-bold">
          We have students from all over the world
        </h3>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-[90%] xl:w-[75%] mx-auto my-10  gap-y-10 justify-items-center">
        {countriesFlags.map((flag, index) => {
          return (
            <div className="relative group" key={index}>
              <img
                className="md:w-[200px] h-[150px] group-hover:opacity-40 w-[150px] rounded-xl"
                src={flag.image}
                alt={flag.alt}
              />
              <p className=" absolute  font-bold group-hover:block hidden  top-16 left-16 z-20">{flag.alt}</p>
            </div>
          );
        })}
        
      </div>
      <div className=" text-center mt-16">
        <button className=" py-3 px-10 rounded-3xl hover:bg-red-500 hover:text-white text-[20px] font-bold bg-[#DAB5B3] ">Start Now</button>
      </div>
    </div>
  );
};

export default Trusted;

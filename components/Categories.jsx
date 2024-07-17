import React from "react";

const Categories = () => {
  const Categories = [
    {
      image: "./assets/1.PNG",
      title: "Angular Development",
      courses: "5 courses",
    },
    {
      image: "./assets/1.PNG",
      title: "Angular Development",
      courses: "5 courses",
    },
    {
      image: "./assets/1.PNG",
      title: "Angular Development",
      courses: "5 courses",
    },
    {
      image: "./assets/1.PNG",
      title: "Angular Development",
      courses: "5 courses",
    },
    {
      image: "./assets/1.PNG",
      title: "Angular Development",
      courses: "5 courses",
    },
    {
      image: "./assets/1.PNG",
      title: "Angular Development",
      courses: "5 courses",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-orange-400 to-pink-500 p-16">
      <div className=" text-center">
        <h6 className=" text-[18px] lg:text-[24px] font-bold">CATEGORIES</h6>
        <h3 className=" text-[26px] lg:text-[40px] font-bold">Popular Categories</h3>
      </div>
      <div className=' mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
          {
            Categories.map((val,index)=>{
              return(
                <div className=' p-10 flex flex-col items-center gap-y-5 rounded-3xl border border-orange-400' key={index}>
                  <img className='w-[90px] rounded-lg' src={val.image} alt="" />
                  <h5 className=" text-[16px] lg:text-[22px] font-bold">{val.title}</h5>
                  <p className=" text-[16px] lg:text-[18px] font-medium text-[#685f78]">{val.courses}</p>
                </div>
              )
            })
          }
        </div>
        <div className=" text-center my-16">
          <button className="  bg-[#DAB5B3] py-3 px-6 rounded-full font-bold text-bold">All Categories</button>
        </div>
     
    </div>
  );
};

export default Categories;

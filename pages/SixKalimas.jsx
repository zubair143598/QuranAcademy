import React from 'react'

const SixKalimas = () => {
    const Prayers = [
        {
          image: "./assets/FK1.PNG",
          alt: "FK1",
          voice: "voice/FK1.mpeg",
          notSupport:" Your browser does not support the audio element."
        },
        {
            image: "./assets/SK2.PNG",
            alt: "SK2",
            voice: "voice/SK2.mpeg",
            notSupport:" Your browser does not support the audio element."
          },
          {
            image: "./assets/TK3.PNG",
            alt: "TK3",
            voice: "voice/TK3.mpeg",
            notSupport:" Your browser does not support the audio element."
          },
          {
            image: "./assets/FK4.PNG",
            alt: "FK4",
            voice: "voice/FK4.mpeg",
            notSupport:" Your browser does not support the audio element."
          },
          {
            image: "./assets/FK5.PNG",
            alt: "FK5",
            voice: "voice/FK5.mpeg",
            notSupport:" Your browser does not support the audio element."
          },
          {
            image: "./assets/SK6.PNG",
            alt: "SK6",
            voice: "voice/SK6.mpeg",
            notSupport:" Your browser does not support the audio element."
          },
          
    
      ];
      return (
        <div className="bg-[#F05A83] pt-16">
          <div className=" grid 3xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {Prayers.map((prayer, index) => {
              return (
                <div key={index} className="  py-16 pt-10 flex flex-col items-center gap-y-5">
                  <img
                    className=" w-[80%] lg:w-[70%] rounded-3xl"
                    src={prayer.image}
                    alt={prayer.alt}
                  />
                  <audio className="w-[80%] lg:w-[70%]" controls>
                    <source src={prayer.voice} type="audio/mpeg" />
                    <p>{prayer.notSupport}</p>
                  </audio>
                </div>
              );
            })}
          </div>
          
        </div>
      );
    };

export default SixKalimas
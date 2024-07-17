import React from 'react'

const TenSurah = () => {
    const Prayers = [
        {
          image: "./assets/Snas.PNG",
          alt: "mp1",
          voice: "voice/Snas.mp3",
          notSupport:" Your browser does not support the audio element."
        },
        {
            image: "./assets/Sfalaq.PNG",
            alt: "Sfalaq",
            voice: "voice/Sfalaq.mp3",
            notSupport:" Your browser does not support the audio element."
          },
          {
            image: "./assets/Sakhlas.PNG",
            alt: "Sakhlas",
            voice: "voice/Sakhlas.mp3",
            notSupport:" Your browser does not support the audio element."
          },
          {
            image: "./assets/Slahab.PNG",
            alt: "Slahab",
            voice: "voice/Slahab.mp3",
            notSupport:" Your browser does not support the audio element."
          },
          {
            image: "./assets/Snasr.PNG",
            alt: "Snasr",
            voice: "voice/Snasr.mp3",
            notSupport:" Your browser does not support the audio element."
          },
          {
            image: "./assets/Skafiron.PNG",
            alt: "Skafiron",
            voice: "voice/Skafiron.mp3",
            notSupport:" Your browser does not support the audio element."
          },
          {
            image: "./assets/Skausar.PNG",
            alt: "Skausar",
            voice: "voice/Skausar.mp3",
            notSupport:" Your browser does not support the audio element."
          },
          {
            image: "./assets/Smaun.PNG",
            alt: "Smaun",
            voice: "voice/Smaun.mp3",
            notSupport:" Your browser does not support the audio element."
          },
          {
            image: "./assets/Squreish.PNG",
            alt: "Squreish",
            voice: "voice/Squreish.mp3",
            notSupport:" Your browser does not support the audio element."
          },
          {
            image: "./assets/Sfil.PNG",
            alt: "Sfil",
            voice: "voice/Sfil.mp3",
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

export default TenSurah
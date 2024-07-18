import React from "react";

const MasnoonPrayer = () => {
  const Prayers = [
    {
      image: "./assets/MP1.jpeg",
      alt: "mp1",
      voice: "voice/MP1.mpeg",
      notSupport:" Your browser does not support the audio element."
    },
    {
        image: "./assets/MP2.jpeg",
        alt: "mp2",
        voice: "voice/MP2.mpeg",
        notSupport:" Your browser does not support the audio element."
      },
      {
        image: "./assets/MP3.jpeg",
        alt: "mp3",
        voice: "voice/MP3.mpeg",
        notSupport:" Your browser does not support the audio element."
      },
      {
        image: "./assets/MP4.jpeg",
        alt: "mp4",
        voice: "voice/MP4.mpeg",
        notSupport:" Your browser does not support the audio element."
      },
      {
        image: "./assets/MP5.jpeg",
        alt: "mp5",
        voice: "voice/MP5.mpeg",
        notSupport:" Your browser does not support the audio element."
      },
      {
        image: "./assets/MP6.jpeg",
        alt: "mp6",
        voice: "voice/MP6.mpeg",
        notSupport:" Your browser does not support the audio element."
      },
      {
        image: "./assets/MP7.jpeg",
        alt: "mp7",
        voice: "voice/MP7.mpeg",
        notSupport:" Your browser does not support the audio element."
      },

  ];
  return (
    <div className="bg-[#F05A83] pt-16">
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {Prayers.map((prayer, index) => {
          return (
            <div key={index} className="py-16 pt-10 flex flex-col items-center gap-y-5">
              <img
                className=" w-[250px] md:w-[350px] lg:w-[60%] rounded-3xl"
                src={prayer.image}
                alt={prayer.alt}
              />
              <audio className="w-[250px] md:w-[350px] lg:w-[60%]" controls>
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

export default MasnoonPrayer;

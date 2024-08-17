import { useRef } from 'react';

const Nooraniqaida = () => {
  const audioRef = useRef(null);

  const handleImageClick = (audioSrc) => {
    if (audioRef.current) {
      if (audioRef.current.src !== audioSrc) {
        audioRef.current.src = audioSrc;
      }
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  };

  const images = [
    { src: "noorani/6.PNG", audio: "voice/6.mpeg" },
    { src: "noorani/5.PNG", audio: "voice/5.mpeg" },
    { src: "noorani/4.PNG", audio: "voice/4.mpeg" },
    { src: "noorani/3.PNG", audio: "voice/3.mpeg" },
    { src: "noorani/2.PNG", audio: "voice/2.mpeg" },
    { src: "noorani/1.PNG", audio: "voice/1.mpeg" },
    { src: "noorani/12.PNG", audio: "voice/12.mpeg" },
    { src: "noorani/11.PNG", audio: "voice/11.mpeg" },
    { src: "noorani/10.PNG", audio: "voice/10.mpeg" },
    { src: "noorani/9.PNG", audio: "voice/9.mpeg" },
    { src: "noorani/8.PNG", audio: "voice/8.mpeg" },
    { src: "noorani/7.PNG", audio: "voice/7.mpeg" },
    { src: "noorani/18.PNG", audio: "voice/18.mpeg" },
    { src: "noorani/17.PNG", audio: "voice/17.mpeg" },
    { src: "noorani/16.PNG", audio: "voice/16.mpeg" },
    { src: "noorani/15.PNG", audio: "voice/15.mpeg" },
    { src: "noorani/14.PNG", audio: "voice/14.mpeg" },
    { src: "noorani/13.PNG", audio: "voice/13.mpeg" },
    { src: "noorani/24.PNG", audio: "voice/24.mpeg" },
    { src: "noorani/23.PNG", audio: "voice/23.mpeg" },
    { src: "noorani/22.PNG", audio: "voice/22.mpeg" },
    { src: "noorani/21.PNG", audio: "voice/21.mpeg" },
    { src: "noorani/20.PNG", audio: "voice/20.mpeg" },
    { src: "noorani/19.PNG", audio: "voice/19.mpeg" },
    { src: "noorani/30.PNG", audio: "voice/30.mpeg" },
    { src: "noorani/29.PNG", audio: "voice/29.mpeg" },
    { src: "noorani/28.PNG", audio: "voice/28.mpeg" },
    { src: "noorani/27.PNG", audio: "voice/27.mpeg" },
    { src: "noorani/26.PNG", audio: "voice/26.mpeg" },
    { src: "noorani/25.PNG", audio: "voice/25.mpeg" },
  ];

  const imagesForSmall = [
    { src: "noorani/3.PNG", audio: "voice/3.mpeg" },
    { src: "noorani/2.PNG", audio: "voice/2.mpeg" },
    { src: "noorani/1.PNG", audio: "voice/1.mpeg" },
    { src: "noorani/6.PNG", audio: "voice/6.mpeg" },
    { src: "noorani/5.PNG", audio: "voice/5.mpeg" },
    { src: "noorani/4.PNG", audio: "voice/4.mpeg" },
    { src: "noorani/9.PNG", audio: "voice/9.mpeg" },
    { src: "noorani/8.PNG", audio: "voice/8.mpeg" },
    { src: "noorani/7.PNG", audio: "voice/7.mpeg" },
    { src: "noorani/12.PNG", audio: "voice/12.mpeg" },
    { src: "noorani/11.PNG", audio: "voice/11.mpeg" },
    { src: "noorani/10.PNG", audio: "voice/10.mpeg" },
    { src: "noorani/15.PNG", audio: "voice/15.mpeg" },
    { src: "noorani/14.PNG", audio: "voice/14.mpeg" },
    { src: "noorani/13.PNG", audio: "voice/13.mpeg" },
    { src: "noorani/18.PNG", audio: "voice/18.mpeg" },
    { src: "noorani/17.PNG", audio: "voice/17.mpeg" },
    { src: "noorani/16.PNG", audio: "voice/16.mpeg" },
    { src: "noorani/21.PNG", audio: "voice/21.mpeg" },
    { src: "noorani/20.PNG", audio: "voice/20.mpeg" },
    { src: "noorani/19.PNG", audio: "voice/19.mpeg" },
    { src: "noorani/24.PNG", audio: "voice/24.mpeg" },
    { src: "noorani/23.PNG", audio: "voice/23.mpeg" },
    { src: "noorani/22.PNG", audio: "voice/22.mpeg" },
    { src: "noorani/27.PNG", audio: "voice/27.mpeg" },
    { src: "noorani/26.PNG", audio: "voice/26.mpeg" },
    { src: "noorani/25.PNG", audio: "voice/25.mpeg" },
    { src: "noorani/30.PNG", audio: "voice/30.mpeg" },
    { src: "noorani/29.PNG", audio: "voice/29.mpeg" },
    { src: "noorani/28.PNG", audio: "voice/28.mpeg" },
   
  ];

  return (
    <div className="p-4 bg-[#E07878] min-h-screen flex flex-col lg:pt-20 items-center">
      <div className="lg:grid  hidden lg:grid-cols-6 ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt="Click me"
            className={`m-1 w-[90px] rounded-lg transition-transform transform hover:scale-125 border-2 hover:border-indigo-600 ${index % 2 === 0 ? '' : 'filter grayscale hover:filter-none'}`}
            onClick={() => handleImageClick(image.audio)}
          />
        ))}
      </div>
      <div className='grid  lg:hidden grid-cols-3 gap-1'>
      {imagesForSmall.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt="Click me"
            className={`m-1  rounded-lg transition-transform transform hover:scale-125 border-2 hover:border-indigo-600 ${index % 2 === 0 ? '' : 'filter grayscale hover:filter-none'}`}
            onClick={() => handleImageClick(image.audio)}
          />
        ))}
      </div>
      <audio ref={audioRef} id="audio"></audio>
    </div>
  );
};

export default Nooraniqaida;

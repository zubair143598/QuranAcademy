import React from 'react'

const QRWT = () => {
  return (
    <div className='bg-[#F05A83] pt-16'>
        <div className=' py-16 pt-10 flex flex-col items-center gap-y-5'>
            <img className=' w-[250px] md:w-[350px] lg:w-[25%] rounded-3xl' src="./assets/QRWT.jpeg" alt="QRWT" />
            <audio className='w-[250px] md:w-[350px] lg:w-[25%]' controls>
            <source  src="voice/fatiha.mp3" type="audio/mpeg" />

        </audio>
        </div>
    </div>
  )
}

export default QRWT
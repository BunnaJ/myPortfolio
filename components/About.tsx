import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div className='md:mt-28 mt-6 p-5 border-glow  rounded-2xl bg-white md:text-[20px] text-[var(--darkgray)] mb-10'>
    <h1 className='font-bold md:text-4xl text-xl  text-black pb-4'>About</h1>
    <div className=''>
      I’m eager to learn, self-motivated, reliable, responsible, and hardworking. As a mature team player, I adapt easily to challenging situations and thrive in both collaborative environments and when working independently. I take pride in keeping my work well-organized and purposeful. I enjoy creating, solving problems, and bringing ideas to life through thoughtful design and development.
    </div>
    <div className="flex justify-center  md:pt-10">
      <div className="w-60 h-60 border-[12px] mt-6 md:mt-0 border-[#5a5a5a] rounded-xl shadow-xl bg-white relative animate-[gentle-tilt_6s_ease-in-out_infinite]">
        {/* Simulated hanging string */}
        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-1 h-8 bg-[#5a5a5a] rounded-full z-0" />
        <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-[2px] h-[40px] bg-[#ccc]" />

        {/* Photo */}
        <Image
          src="/IMG_4887 2.jpg"
          alt="Hanging photo"
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="w-60 h-60 mt-6 md:mt-0 border-[12px] border-[#5a5a5a] rounded-xl shadow-xl bg-white relative animate-[gentle-tilt_6s_ease-in-out_infinite]">
        {/* Simulated hanging string */}
        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-1 h-8 bg-[#5a5a5a] rounded-full z-0" />
        <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-[2px] h-[40px] bg-[#ccc]" />

        {/* Photo */}
        <Image
          src="/IMG_1549 2.jpg"
          alt="Hanging photo"
          fill
          className="rounded-md object-cover"
        />
      </div>
      
    </div>

  </div>
  

  )
}

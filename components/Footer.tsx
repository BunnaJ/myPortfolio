import React from 'react'
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (

    <div className=' pt-20 p-10 md:text-xl text-[var(--darkgray)] w-full'>
     
     <div className="flex items-center justify-center">
     <h1 className="mb-3">Copyright © 2025 Ezebili Chibunna</h1>
     </div>
      
      <div className="flex items-center justify-center gap-5 text-2xl">
        <a href="https://x.com/@Heedful__" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="hover:text-black transition-all cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/ezebili-chibunna-a5b188254/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="hover:text-black transition-all cursor-pointer" />
        </a>
        <a href="mailto:chibunnakelvin23@email.com">
          <HiOutlineMail className="hover:text-black transition-all cursor-pointer" />
        </a>
      </div>
    </div>
  )
}

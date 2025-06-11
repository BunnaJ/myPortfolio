'use client'

import React from "react";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

export default function FirstSection() {
  return (
    <div className={`md:pt-60 pt-28 px-4 md:px-0 ${outfit.className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Profile Image */}
        <motion.div
          className="w-40 h-40 relative"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/potfo.jpg"
            alt="photo"
            fill
            className="rounded-full object-cover border-4 p-3 border-b-[var(--softgreen)]"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="md:space-y-8 space-y-3"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* Title */}
         {/* Title */}
<motion.div
  className="font-bold text-2xl md:text-5xl pt-8 leading-tight"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  {"Hey, I'm "}
  <span>Ezebili Chibunna</span>
  .
  <br />
  Software Engineer
</motion.div>

          {/* Subtitle */}
          <motion.div
            className="md:text-xl text-[var(--darkgray)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Building innovative solutions and designing compelling user
            experiences that inspire action. I combine creativity with
            technology to bring bold ideas to life.
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hire Me Button */}
            <div className="bg-black md:w-[100px] mt-3 md:mt-0 w-full cursor-pointer hover:bg-gray-800 transition text-white text-center md:text-xl p-3 rounded-xl">

            <Link href={"https://wa.me/2349168832915?text=Hello%2C%20I'm%20interested%20in%20working%20with%20you."}>              
           
            Hire Me!
            </Link>
            </div>

            {/* Availability - Desktop */}
            <div className="w-full md:w-[400px] bg-[var(--softgreen)] hidden md:flex text-center p-3 text-[var(--deepgreen)] rounded-2xl items-center justify-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Available for new project
            </div>

            {/* Availability - Mobile */}
            <div className="w-full md:w-[400px] bg-[var(--softgreen)] flex md:hidden text-center p-3 text-[var(--deepgreen)] rounded-2xl items-center justify-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Available
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

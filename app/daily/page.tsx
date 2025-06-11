import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function page() {
  return (
    <div className="container mx-auto w-full max-w-[60rem] px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-6 md:py-12 border-2 border-[var(--light-gray)]">
      <div className="pt-52">
        <h1 className="font-bold text-xl md:text-3xl">DailyTask</h1>
        <p className="md:text-xl text-[var(--darkgray)] pt-5">
          The goal of daily task web application is to help users manage and
          prioritize their daily tasks ...
        </p>
      </div>
      <div className="border rounded-2xl p-8 border-[var(--deepgreen)] mt-10 space-y-5 bg-[var(--light-gray)]">
        <h1 className="md:text-xl font-bold">Description</h1>
        <p className="md:text-xl text-[var(--darkgray)] border-b pb-5">
          {" "}
          The goal of daily task web application is to help users manage and
          prioritize their daily tasks efficiently, providing features such as
          task lists, reminders, deadlines, and progress tracking to enhance
          productivity and organization in their daily lives.
        </p>
        <h1 className="md:text-xl font-bold">Technologies</h1>
        <div className="flex  items-center gap-5 border-b pb-5">
          <div className="bg-[var(--softgreen)] text-[var(--deepgreen)] w-[150px] text-center border rounded-2xl p-1  ">
            vuejs
          </div>
          <div className="bg-[var(--softgreen)]  text-[var(--deepgreen)] w-[150px] text-center border rounded-2xl p-1  ">
            Tailwind
          </div>
        </div>

        <div className="pt-3 md:flex items-center gap-20 space-y-4 md:space-y-0">
          <div className="space-y-2">
            <h1 className="font-bold md:text-xl">Date</h1>
            <p className="md:text-xl text-[var(--darkgray)]">2024</p>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold md:text-xl">Type</h1>
            <p className="md:text-xl text-[var(--darkgray)]">ToDo</p>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold md:text-xl">Client</h1>
            <p className="md:text-xl text-[var(--darkgray)]">DailyTask</p>
          </div>
        </div>
      </div>

      <div className="pt-10 cursor-pointer ">
        <Link href={"  https://daily-task-phi.vercel.app/"}>
          <div className=" flex  items-center justify-center bg-black  hover:bg-gray-800 transition text-white w-[200px] rounded-xl">
            <div className=" text-center p-3 ">View Project</div>
            <ExternalLink />
          </div>
        </Link>
      </div>

      <div className="flex flex-col items-center gap-4 pt-20">
        {/* First big image */}
        <Image
          src="/daily1.png"
          width={500}
          height={250}
          alt="photo"
          priority
          className="rounded-xl"
        />

        {/* Bottom two side-by-side images */}
        
      </div>
    </div>
  );
}

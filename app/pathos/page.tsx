import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function page() {
  return (
    <div className="container mx-auto w-full max-w-[60rem] px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-6 md:py-12 border-2 border-[var(--light-gray)]">
      <div className="pt-52">
        <h1 className="font-bold  text-xl md:text-3xl">PathosEmbassy</h1>
        <p className="md:text-xl text-[var(--darkgray)] pt-5">
          Simplifying visa processes and fostering a community-driven platform
          for sharing experiences...
        </p>
      </div>
      <div className="border rounded-2xl p-8 border-[var(--deepgreen)] mt-10 space-y-5 bg-[var(--light-gray)]">
        <h1 className="md:text-xl font-bold">Description</h1>
        <p className="md:text-xl text-[var(--darkgray)] border-b pb-5">
          {" "}
          a web application aimed at simplifying visa processes and fostering a
          community-driven platform for sharing embassy experiences.
          Collaborated on features enabling user-generated content, comments,
          and resource verification to combat fraud and enhance transparency.
        </p>
        <h1 className="md:text-xl font-bold">Technologies</h1>
        <div className="flex  items-center gap-5 border-b pb-5">
          <div className="bg-[var(--softgreen)] text-[var(--deepgreen)] w-[150px] text-center border rounded-2xl p-1  ">
            Nextjs
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
            <p className="md:text-xl text-[var(--darkgray)]">Social</p>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold md:text-xl">Client</h1>
            <p className="md:text-xl text-[var(--darkgray)]">PathosEmbassy</p>
          </div>
        </div>
      </div>

      <div className="pt-10 cursor-pointer ">
        <Link href={" https://pathos-three.vercel.app/"}>
          <div className=" flex  items-center justify-center bg-black  hover:bg-gray-800 transition text-white w-[200px] rounded-xl">
            <div className=" text-center p-3 ">View Project</div>
            <ExternalLink />
          </div>
        </Link>
      </div>

      <div className="flex flex-col items-center gap-4 pt-20">
        {/* First big image */}
        <Image
          src="/pathos1.png"
          width={500}
          height={250}
          alt="photo"
          priority
          className="rounded-xl"
        />

        {/* Bottom two side-by-side images */}
        <div className="md:flex gap-4">
          <Image
            src="/pathos2.png"
            width={400}
            height={120}
            alt="photo"
            priority
            className="rounded-xl"
          />
          <Image
            src="/pathos3.png"
            width={400}
            height={120}
            alt="photo"
            priority
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

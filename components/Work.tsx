"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const projectCards = [
  {
    link: "/shortlet",
    image: "/shortlet.png",
    title: "ShortletAfrica",
    text: "ShortletAfrica is a property rental platform that connects travelers, business professionals...",
  },
  {
    link: "/pathos",
    image: "/pathos.png",
    title: "Pathos Embassy",
    text: "Simplifying visa processes and fostering a community-driven platform for sharing experiences... ",
  },
  {
    link: "/Ai",
    image: "/docu.png",
    title: "AI Resume Scanner",
    text: "The goal of an AI-Powered Resume Scanner for job recruiters is to expedite and optimize ...",
  },
  {
    link: "/daily",
    image: "/daily.png",
    title: "DailyTask",
    text: "The goal of daily task web application is to help users manage and prioritize their daily tasks ...",
  },
  {
    link: "/",
    image: "/new.jpeg",
    title: "loading...",
    text: "still in progress...",
  },
];

export default function ProjectSection() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projectCards : projectCards.slice(0, 4);

  return (
    <div className="pt-16">
      {/* Section Title */}
      <div className="flex items-center justify-center">
        <h1 className="md:text-4xl text-xl font-bold pb-5 border-b-2 border-b-[var(--softgreen)] mb-5">
          {"Here's What I've Been Up To."}
        </h1>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-6">
        {displayedProjects.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Link href={card.link}>
              <div className="border-8 border-[#5a5a5a] rounded-xl overflow-hidden hover:shadow-xl transition hover:scale-[1.02]">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="md:text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.text}</p>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-[var(--light-gray)] flex items-center justify-center gap-2 md:mx-3 mx-7 my-3 p-3  rounded-2xl border border-[var(--deepgreen)] md:w-[150px] "
                >
                  {/* Your content inside the div here */}
                  <p>View Project</p>
                  <ChevronRight />
                </motion.div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Toggle Button */}
      <motion.div
        className="flex items-center justify-center pt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
      >
        <div
          onClick={() => setShowAll(!showAll)}
          className="flex bg-black w-[300px] p-3 text-white rounded-2xl cursor-pointer hover:bg-gray-800 items-center justify-center"
        >
          <p>{showAll ? "Show Less" : "View All"}</p>
          <ChevronRight />
        </div>
      </motion.div>

      {/* Divider */}
      <div className="border mt-20 border-b-emerald-300"></div>

      {/* Work Experience Section */}
      <div className="md:pt-40 pt-10 md:text-3xl  text-xl font-semibold">
        Work Experience
      </div>

      <div className="space-y-9">
        <div className="md:flex items-center justify-between pt-16">
          <div className="md:font-bold md:text-xl text-[#929292]">
            2025- present
          </div>
          <div className="flex items-center gap-5">
            <div className="font-bold md:text-xl text-[var(--darkgray)]">
              Frontend Developer at
            </div>
            <div className="bg-[var(--softgreen)] p-3 rounded-2xl text-[var(--deepgreen)]">
              ShortletAfrica
            </div>
          </div>
        </div>

        <div className="md:flex items-center justify-between">
          <div className="md:font-bold md:text-xl text-[#929292]">
            2024 - present
          </div>
          <div className="flex items-center gap-5">
            <div className="font-bold md:text-xl text-[var(--darkgray)] ">
              Frontend Developer at
            </div>
            <div className="bg-[var(--softgreen)] p-3 rounded-2xl text-[var(--deepgreen)]">
              PathosEmbassy
            </div>
          </div>
        </div>

        <div className="md:flex items-center justify-between">
          <div className="md:font-bold md:text-xl text-[#929292]">
            2023- present
          </div>
          <div className="flex items-center gap-5">
            <div className="font-bold md:text-xl text-[var(--darkgray)]">
              Frontend Developer at
            </div>
            <div className="bg-[var(--softgreen)] p-3 rounded-2xl text-[var(--deepgreen)]">
              DocuMint.ai
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
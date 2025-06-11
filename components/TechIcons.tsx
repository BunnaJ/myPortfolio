'use client';

import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiNestjs } from 'react-icons/si';
import { RiNextjsFill } from "react-icons/ri";
import { motion } from 'framer-motion';

const techIcons = [
  { icon: <FaHtml5 size={40} className="text-[#e34c26]" />, name: 'HTML' },
  { icon: <FaCss3Alt size={40} className="text-[#264de4]" />, name: 'CSS' },
  { icon: <SiTailwindcss size={40} className="text-[#38bdf8]" />, name: 'Tailwind' },
  { icon: <SiJavascript size={40} className="text-[#f0db4f]" />, name: 'JavaScript' },
  { icon: <FaReact size={40} className="text-[#61dbfb]" />, name: 'React' },
  { icon: <RiNextjsFill size={40} className="text-black dark:text-black" />, name: 'Next.js' },
  { icon: <SiNestjs size={40} className="text-[#e0234e]" />, name: 'NestJS' },
];

export default function TechStackMarquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap md:py-16  border-gray-200">
        <div className="flex items-center justify-center pb-9 font-bold ">
            <p className='text-[#5a5a5a]'>Tech Stack</p>
        </div>
      <motion.div
        className="flex "
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {[...techIcons, ...techIcons].map((item, i) => (
          <div key={i} className="flex flex-col items-center min-w-[100px]">
            {item.icon}
            <span className="text-sm text-gray-600 mt-1">{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

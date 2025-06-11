import React from "react";
import { House } from "lucide-react";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { TiDocumentText } from "react-icons/ti";
import Link from "next/link";

const navItems = [
  {
    icon: (
      <span className="block md:hidden">
        <House size={20} />
      </span>
    ),
    label: "Home",
    link: "/",
  },
  {
    icon: (
      <span className="block md:hidden">
        <FaXTwitter size={20} />
      </span>
    ),
    label: "Twitter",
    link: "https://x.com/@Heedful__",
  },
  {
    icon: (
      <span className="block md:hidden">
        <FiGithub size={20} />
      </span>
    ),
    label: "GitHub",
    link: "https://github.com/BunnaJ",
  },
  {
    icon: (
      <span className="block md:hidden">
        <FaLinkedinIn size={20} />
      </span>
    ),
    label: "LinkIn",
    link: "https://www.linkedin.com/in/ezebili-chibunna-a5b188254/",
  },
  {
    icon: (
      <span className="block md:hidden">
        <TiDocumentText size={24} />
      </span>
    ),
    label: "Resume",
    link: "/resume.pdf",
  },
];

const navItemsMd = [
  {
    icon: <House size={25} />,
    label: "Home",
    link: "/",
  },
  {
    icon: <FaXTwitter size={25} />,
    label: "Twitter",
    link: "https://x.com/@Heedful__",
  },
  {
    icon: <FiGithub size={25} />,
    label: "GitHub",
    link: "https://github.com/BunnaJ",
  },
  {
    icon: <FaLinkedinIn size={25} />,
    label: "LinkIn",
    link: "https://www.linkedin.com/in/ezebili-chibunna-a5b188254/",
  },
  {
    icon: <TiDocumentText size={30} />,
    label: "Resume",
    link: "/resume.pdf",
  },
];

export default function Nav() {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 z-50 px-2 md:px-4">
      <div className="md:px-5 px-2 py-2 flex items-center gap-4 md:gap-9 md:justify-between rounded-2xl border-b border-[var(--deepgreen)] bg-transparent shadow-md backdrop-blur-sm mt-5 md:mt-10">
        <div className="flex gap-3 md:gap-7 items-center">
          {/* Mobile Icons */}
          <div className="flex md:hidden gap-3 items-center">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col items-center cursor-pointer pt-4"
              >
                <Link href={item.link}>
                  <div className="text-gray-400 group-hover:text-black transition">
                    {item.icon}
                  </div>
                </Link>
                <span className="text-[10px] text-[var(--deepgreen)] mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex gap-7 items-center">
            {navItemsMd.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col items-center cursor-pointer pt-4"
              >
                <Link href={item.link}>
                  <div className="text-gray-400 group-hover:text-black transition">
                    {item.icon}
                  </div>
                </Link>
                <span className="text-[12px] text-[var(--deepgreen)] mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Link href={"/blog"}>
          <div className="bg-black text-white px-3 md:px-5 py-2 rounded-2xl cursor-pointer text-sm md:text-base md:w-[130px] text-center hover:bg-gray-800 transition border-2 border-[var(--softgreen)]">
            MyBlog
          </div>
        </Link>
      </div>
    </div>
  );
}

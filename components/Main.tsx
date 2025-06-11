import React from 'react'
import FirstSection from './FirstSection'
import About from './About'
import TechIcon from "./TechIcons"
import Work from './Work'
import Intouch from "./Intouch"

export default function Main() {
  return (
    <div className="container mx-auto w-full max-w-[60rem] px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-6 md:py-12 border-2 border-[var(--light-gray)]">
      <FirstSection />
      <About />
      <TechIcon />
      <Work />
      <Intouch />
    </div>
  )
}

"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/profile_small.png"
            alt=""
            width={300}
            height={400}
            className=""
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-6xl font-bold font-serif mt-6 md:mt-0">Hey, Jobet here!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            <span className="font-semibold text-blue-600">
              Software and Full Stack Web Developer{' '}
            </span>
            at your service.
          </p>
        </div>
      </div>
      
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <div className="animate-bounce flex flex-col items-center text-center justify-center ">
          Scroll down to see my skills and works!
          <HiArrowDown size={35}/>
          </div>
        </Link>
    </section>
  )
}

export default HeroSection

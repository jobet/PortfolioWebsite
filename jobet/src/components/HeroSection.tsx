"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-2 lg:my-10 py-20 md:py-12 lg:py-24 xl:py-36 2xl:py-48 md:flex-row md:space-x-2 md:text-left">
        <div className="md:mt-2 md:w-2/5">
          <Image
            src="/profile_small.png"
            alt=""
            width={1000}
            height={1000}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-6xl font-bold font-serif mt-6 md:mt-0">Hey, Jobet here!</h1>
          <p className="text-lg mt-4 mb-4 md:text-2xl">I&apos;m a
            <span className="font-semibold text-blue-600">
              {' '}Software and Full Stack Web Developer,{' '}
            </span>
            creating innovative apps with clean & user-friendly experiences.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

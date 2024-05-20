import React from "react"
import Image from "next/image"
import Link from "next/link"
import { MdOutlineFileDownload } from "react-icons/md";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-2 lg:my-10 py-20 md:py-12 lg:py-24 xl:py-36 2xl:py-48 md:flex-row md:space-x-2 md:text-left">
        <div className="md:pt-8 md:w-2/5 sm:w-3/5">
          <Image
            src="/profile_small.png"
            alt=""
            width={1000}
            height={1000}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mt-6 md:mt-0">Hey, Jobet here!</h1>
          <p className="text-lg  lg:text-2xl mt-4 mb-4">I&apos;m a
            <span className="font-semibold text-formColor">
              {' '}Software and Full Stack Web Developer,{' '}
            </span>
            creating innovative apps with clean & user-friendly experiences.
          </p>
          <div className="flex flex-row space-x-2 mb-1 justify-center md:justify-start">
          <Link href="/Aguirre_Resume.pdf" target="_blank" className="flex items-center text-base md:text-xl bg-formColor hover:bg-formColorLighter transition-all text-white px-8 py-2 rounded-full font-semibold">
                <MdOutlineFileDownload className="mr-2"/> Download Resume
          </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

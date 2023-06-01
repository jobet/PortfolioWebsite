import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"

const Synthesis = () => {
  return (
    <section id="synthesis" className="py-12">
      <div className="pb-12 md:pt-16">
        <h1 className="my-5 text-left font-bold font-serif text-4xl">
          What I Learned
        </h1>
        <div className="flex flex-col space-y-28">
        <SlideUp>
        <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
        <div className=" md:w-1/4">
        <Image
              src="/whatilearned.svg"
              alt=""
              width={325}
              height={325}
            />
        </div>
        <div className="md:w-3/4 md:text-left text-xl">
            <p>
              Hello and welcome to my portfolio! My name is Jose Albero Aguirre, but you can call me Jobet. I am a Software and Full Stack Developer.
            </p><br/>  
            <p>
              I recently graduated with a Bachelor&apos;s Degree in Computer Science from Mapúa Malayan Colleges in Laguna, Philippines. 
              With over 4 years of experience in developing software and specifically web applications, I have a passion for building innovative solutions
              and products that provide value to users. 
            </p><br/>
            <p>
              I am adept in various programming languages like Python, C#, C++, HTML, CSS, JavaScript, as well as modern web frameworks like React and Next. 
              Outside of web development, I enjoy playing video games, reading manga, watching videos and learning new things. 
              It&apos;s a pleasure to connect - check out some of my projects I worked on during my time at college!
            </p>
            </div>
          </div>
          </SlideUp>
        </div>
      </div>
    </section>
  )
}

export default Synthesis
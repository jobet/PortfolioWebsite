import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"
import Link from "next/link"
import { SiNextdotjs, SiCsharp, SiHtml5, SiCss3
 , SiJavascript, SiPython, SiDotnet, SiReact, SiNodedotjs
, SiGithub, SiJupyter, SiSupabase, SiMysql, SiMicrosoftsqlserver } from 'react-icons/si'
import { FaFacebook, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa"
import { PiPhoneFill } from "react-icons/pi"
const skills = [
  { icon: <SiReact  className="inline"/>, skill: "React" },
  { icon: <SiNextdotjs className="inline"/>, skill: "Next.js" },
  { icon: <SiNodedotjs  className="inline"/>, skill: "Node.js" },
  { icon: <SiHtml5  className="inline"/>, skill: "HTML" },
  { icon: <SiCss3  className="inline"/>, skill: "CSS" },
  { icon: <SiJavascript  className="inline"/>, skill: "JavaScript" },
  { icon: <SiSupabase  className="inline"/>, skill: "Supabase" },
  { icon: <SiMysql  className="inline"/>, skill: "MySQL" },
  { icon: <SiMicrosoftsqlserver  className="inline"/>, skill: "Microsoft SQL" },
  { icon: <SiCsharp  className="inline"/>, skill: "C#" },
  { icon: <SiPython  className="inline"/>, skill: "Python" },
  { icon: <SiJupyter  className="inline"/>, skill: "Jupyter" },
  { icon: <SiDotnet  className="inline"/>, skill: "ASP.NET" },
  { icon: <SiGithub  className="inline"/>, skill: "GitHub" },
]

const AboutSection = () => {
  return (
    <section id="about" className="py-12">
      <div className="pb-12 md:pt-16">
      
        <h1 className="mb-2 text-left font-bold font-serif text-4xl">
          About
        </h1>
        <div className="flex flex-wrap flex-row items-center space-x-2 mb-1 text-black">
          <a 
            href="https://github.com/jobet/" 
            rel="noreferrer"
            target="_blank"
            className="hover:-translate-y-1 transition-transform cursor-pointer flex flex-row items-center space-x-2 mb-1 text-black text-l mr-2"
          >
            <FaGithub
              className="text-formColor mr-2"
              size={25}
            />
            jobet
          </a>
          <a
            href="https://www.linkedin.com/in/jose-alberto-aguirre"
            rel="noreferrer"
            target="_blank"
            className="hover:-translate-y-1 transition-transform cursor-pointer flex flex-row items-center space-x-2 mb-1 text-black text-l mr-2"
          >
            <FaLinkedin
              className="text-formColor mr-2"
              size={25}
            />
            jose-alberto-aguirre
          </a>
          <p className="flex flex-row items-center space-x-2 mb-1 text-black text-l">
            <FaGlobe
              className="text-formColor mr-2"
              size={25}
            />
            josealbertomaguirre@gmail.com
          </p>
          <p className="flex flex-row items-center space-x-2 mb-1 text-black text-l">
            <PiPhoneFill size={25} className="text-formColor"/>
            +63 916 325 3149
          </p>
        </div>
        <div className="flex flex-col space-y-28">
        <div className="flex flex-col justify-center items-center md:flex-row md:space-x-12">
          <div className="indent-6 text-lg text-justify">
              <p>
                Welcome to my portfolio! My name is Jose Albero Aguirre, but you can call me Jobet. I am a Software and Full Stack Developer. 
                Graduated with a Bachelor&apos;s Degree in Computer Science from Mapúa Malayan Colleges in Laguna and experience in developing various websites, 
                I have a passion for building well-designed websites with great user experience. 
              </p>
              <br/>
              <p>
                I am adept in various programming languages like Python, C#, C++, HTML, CSS, JavaScript, as well as modern web frameworks like React and Next. 
                Outside of web development, I enjoy playing video games, reading manga, watching videos and learning new things. 
                It&apos;s a pleasure to connect - check out some of my projects I worked on!
              </p>
            
            </div>
          </div>
        </div>
          <h1 className="mt-5 mb-2 text-left font-bold font-serif text-4xl">
            Skills
          </h1>
        
          
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <span key={idx} className="bg-formColor text-white px-5 py-3 mr-2 mb-2 rounded-full font-semibold">
                    {item.icon} {item.skill}
                  </span>
                )
              })}
            </div>
            
      </div>
    </section>
  )
}

export default AboutSection

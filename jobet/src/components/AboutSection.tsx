import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"
import { SiNextdotjs, SiCsharp, SiHtml5, SiCss3
 , SiJavascript, SiPython, SiDotnet, SiReact, SiNodedotjs
, SiGithub, SiJupyter, SiSupabase, SiMysql, SiMicrosoftsqlserver } from 'react-icons/si'
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
        <h1 className="my-5 text-left font-bold font-serif text-4xl">
          About
        </h1>
        <div className="flex flex-col space-y-28">
        <SlideUp>
        <div className="flex flex-col justify-center items-center animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
        <div className="md:w-2/5 px-12 md:px-0">
        <Image
              src="/programming.svg"
              alt=""
              width={600}
              height={600}
            />
        </div>
        <div className="md:w-3/5 md:text-left text-xl">
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
        <h1 className="my-5 text-left font-bold font-serif text-4xl">
          Skill-Stack
          </h1>
          <SlideUp>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <span key={idx} className="bg-blue-600 text-white px-4 py-2 mr-2 mt-2 rounded-full font-semibold">
                    {item.icon} {item.skill}
                  </span>
                )
              })}
            </div>
            </SlideUp>
      </div>
    </section>
  )
}

export default AboutSection

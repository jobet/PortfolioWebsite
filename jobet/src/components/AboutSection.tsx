import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"
import { SiNextdotjs, SiCsharp, SiHtml5, SiCss3
 , SiJavascript, SiPython, SiDotnet, SiReact, SiNodedotjs
, SiGithub, SiJupyter } from 'react-icons/si'
const skills = [
  { icon: <SiCsharp  className="inline"/>, skill: "C#" },
  { icon: <SiHtml5  className="inline"/>, skill: "HTML" },
  { icon: <SiCss3  className="inline"/>, skill: "CSS" },
  { icon: <SiJavascript  className="inline"/>, skill: "JavaScript" },
  { icon: <SiPython  className="inline"/>, skill: "Python" },
  { icon: <SiDotnet  className="inline"/>, skill: "ASP.NET" },
  { icon: <SiReact  className="inline"/>, skill: "React" },
  { icon: <SiNextdotjs className="inline"/>, skill: "Next.js" },
  { icon: <SiNodedotjs  className="inline"/>, skill: "Node.js" },
  { icon: <SiGithub  className="inline"/>, skill: "GitHub" },
  { icon: <SiJupyter  className="inline"/>, skill: "Jupyter" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="pb-12 md:pt-16">
        <h1 className="my-5 text-left font-bold font-serif text-4xl">
          Let Me Tell You About Myself
        </h1>
        <div className="flex flex-col space-y-28">
        <SlideUp offset="-300px 0px -300px 0px">
        <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
        <div className=" md:w-1/4">
        <Image
              src="/hero-image.png"
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
              It&apos;s a pleasure to connect - check out some of my work and projects!
            </p>
            </div>
          </div>
          </SlideUp>
        </div>
        <h1 className="my-5 text-left font-bold font-serif text-4xl">
          My Skills
          </h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <span key={idx} className="bg-blue-600 text-white px-4 py-2 mr-2 mt-2 rounded-full font-semibold">
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

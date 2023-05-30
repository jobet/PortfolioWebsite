import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-left font-bold font-serif text-4xl">
          Let Me Tell You About Myself
        </h1>
        <div className="md:w-1/2 ">
        <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
            />
          </div>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-right md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          
          <div className="text-center md:w-1/2 md:text-left">
          <div className="md:w-1/2 ">
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
          <h1 className="text-left font-bold font-serif text-4xl">
          My Skills
          </h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

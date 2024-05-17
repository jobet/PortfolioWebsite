import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsGlobe } from "react-icons/bs"

const projects = [
  {
    name: "FoxTales Bookstore",
    description:
      "A web application that has a book selling system, user functionalities, and back-end for webmasters.",
    image: "/foxtales.png",
    github: "https://github.com/Staniell/Online-Book-Library-POS-System",
    website: "/",
  },
  {
    name: "DSA Visualizer",
    description: "A web application that offers visualizers for Data Structures and Algorithms, featuring a user system, a quiz feature, and a back-end webpage for webmasters to manage analytics, comments, and users.",
    image: "/dsavisualizer.png",
    github: "https://github.com/Staniell/Data-Structures-Visualizer-React",
    website: "/",
  },
  {
    name: "MeDetect",
    description:
      "A web application that allows users to detect medicine authenticity through object detection.",
    image: "/medetect.png",
    github: "https://github.com/Jordiak/CSThesis",
    website: "/",
  },
  {
    name: "TaskList",
    description:
      "A web application that allows users to create an account and organize their tasks (add, edit, reorder, delete, and check tasks as completed).",
    image: "/tasklist.png",
    github: "https://github.com/jobet/tasklist",
    website: "https://tasklist-jobet.vercel.app/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="my-12">
      
        <h1 className="my-5 text-left font-bold font-serif text-4xl">
          Projects
        </h1>
      
      <div className="flex flex-col justify-center z-10 md:flex-row flex-wrap justify-start text-justify">
        {projects.map((project, idx) => {
          return (
            <div key={idx} className="md:px-8 md:w-1/2 md:px-1 pb-3 pb-10">
              
                      <Image
                        src={project.image}
                        alt=""
                        width={800}
                        height={800}
                        className="rounded-xl outline outline-formColor outline-8 outline-offset-[-4px]"
                      />
                      <h1 className="text-3xl font-bold pt-4">{project.name}</h1>
                    <p className="text-lg leading-7 mb-2 indent-6">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4 pb-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.website} target="_blank">
                        <BsGlobe
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
              
              </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection

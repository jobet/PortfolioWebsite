import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "FoxTales Bookstore",
    description:
      "A web application that has a book selling system, user functionalities, and back-end for webmasters.",
    image: "/foxtales.png",
    github: "https://github.com/Staniell/Online-Book-Library-POS-System",
    link: "",
  },
  {
    name: "DSA Visualizer",
    description: "A web application that offers visualizers for Data Structures and Algorithms, featuring a user system, a quiz feature, and a back-end webpage for webmasters to see analytics, comments, and users.",
    image: "/dsavisualizer.png",
    github: "https://github.com/Staniell/Data-Structures-Visualizer-React",
    link: "",
  },
  {
    name: "MeDetect",
    description:
      "A web application that allows users to detect medicine authenticity through object detection.",
    image: "/familyphotos.png",
    github: "",
    link: "",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-5 text-left font-bold font-serif text-4xl">
        Projects I Worked On
      </h1>
      <div className="flex flex-col justify-center z-10 md:flex-row">
        {projects.map((project, idx) => {
          return (
            <div key={idx} className="md:w-1/3 md:px-1 pb-3">
              <SlideUp offset="-300px 0px -300px 0px">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={800}
                        height={400}
                        className="rounded-xl hover:opacity-70"
                      />
                      </Link>
                      <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
                    <p className="text-xl leading-7 mb-2 ">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
              </SlideUp>
              </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection

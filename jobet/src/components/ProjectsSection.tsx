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
    description: "A web application that offers visualizers for Data Structures and Algorithms, featuring a user system, a quiz feature, and a bacl-end webpage for webmasters to see analytics, comments, and users.",
    image: "/dsavisualizer.png",
    github: "https://github.com/Staniell/Data-Structures-Visualizer-React",
    link: "",
  },
  {
    name: "Counterfeit Over-The-Counter Medicine Detector",
    description:
      "A web application that allows user to detect medicine authenticity.",
    image: "/familyphotos.png",
    github: "",
    link: "",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-left font-bold font-serif text-4xl">
        Projects I Worked On
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
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
                  </div>
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

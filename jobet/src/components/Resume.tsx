import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"
import Link from "next/link"

const pdfFiles = [
  {
    name: "Competency-Based Curriculum Vitae",
    description:
      "My CV which provides my contact details, education, skills, and projects.",
    size: "330 KB",
    link: "/CV_Aguirre.pdf",
  },
]
const Resume = () => {
  return (
    <section id="documents" className="py-12">
    <h1 className="my-2 text-left font-bold font-serif text-4xl">
      Resume
    </h1>
      
      <div className="flex flex-col justify-center items-center z-10 md:flex-row">
      <div className="md:w-1/4 my-2 md:mx-2 px-12 md:pl-8 md:pr-0">
          <Image
            src="/documents.svg"
            alt=""
            width={300}
            height={300}
            className="rounded-xl"
          />
      </div>
      <div className="md:w-3/4 md:mx-2">
      <div className="md:w-full md:text-left text-xl">
      {pdfFiles.map((pdf, idx) => {
          return (
            <div key={idx} className="md:px-2 md:w-full md:px-1 pb-3">
              
                    <h1 className="text-2xl font-bold">{pdf.name}</h1>
                    <p className="text-lg leading-7 mb-0 ">
                      {pdf.description}
                    </p>
                    <p className="text-base leading-7 mb-1 ">
                      {pdf.size}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={pdf.link} target="_blank" className="text-base bg-orange-600 hover:bg-orange-700 text-white px-4 py-1 mr-1 rounded-full font-semibold">
                      Download
                      </Link>
                    </div>
              
              </div>
          )
        })}
      </div>
      </div>
      </div>
    
    </section>
  )
}

export default Resume;

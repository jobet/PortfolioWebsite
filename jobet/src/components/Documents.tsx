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
  {
    name: "Final Report",
    description:
      "My whole report about my practicum engagement, my output, synthesis and documents used.",
    size: "1.87 MB",
    link: "/FR_Aguirre.pdf",
  },
]
const Documents = () => {
  return (
    <section id="documents" className="py-12">
    <h1 className="my-2 text-left font-bold font-serif text-4xl">
      Related Forms and Documents
    </h1>
      <SlideUp>
      <div className="flex flex-col justify-center items-center z-10 md:flex-row">
      <div className="md:w-2/3 md:mx-2">
      <div className="md:w-full md:text-left text-xl">
      Here are all the related documents in my practium:
      {pdfFiles.map((pdf, idx) => {
          return (
            <div key={idx} className="md:px-2 md:w-full md:px-1 pb-3">
              <SlideUp>
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
              </SlideUp>
              </div>
          )
        })}
      </div>
      </div>
      <div className="md:w-1/3 my-2 md:mx-2 px-12 md:pl-8 md:pr-0">
          <Image
            src="/documents.svg"
            alt=""
            width={300}
            height={300}
            className="rounded-xl"
          />
      </div>
      </div>
    </SlideUp>
    </section>
  )
}

export default Documents

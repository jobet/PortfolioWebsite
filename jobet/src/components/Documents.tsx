import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"

const Documents = () => {
  return (
    <section id="documents" className="py-12">
    <h1 className="my-2 text-left font-bold font-serif text-4xl">
      Appendix: Forms and Documents
    </h1>
      <SlideUp>
      <div className="flex flex-col z-10 md:flex-row">
      <div className="md:w-2/3 md:mx-2">
      Here are all the related documents in my practium:
      </div>
      <div className="md:w-1/3 my-2 md:mx-2 px-24 md:pl-8 md:pr-0">
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

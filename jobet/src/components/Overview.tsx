import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"

const Overview = () => {
  return (
    <section id="practicum" className="py-12">
      <div className="pb-12 md:pt-24 animate-fadeIn animation-delay-2">
        <h1 className="my-5 text-left font-bold font-serif text-4xl">
          My Practicum Journey: An Overview
        </h1>
        <div className="flex flex-col space-y-28">
        <div className="flex flex-col justify-center items-center animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
        <div className="md:w-1/4 md:p-0 px-24">
        <Image
              src="/overview.svg"
              alt=""
              width={325}
              height={325}
            />
        </div>
        <div className="md:w-3/4 md:text-left text-xl">
            <p>
            For my practicum, I chose to take the Learning Path to gain exposure
             in various in-demand skills. The Learning Path covers <span className="text-orange-600">Design Thinking, 
             Project Management, and Workplace Management</span>. In my specializations, 
             I have focused in <span className="text-orange-600">Web Development, User Experience, and 
             Cloud Computing</span>.
            </p>
            <br/>
            <p>
             The modules within Design Thinking, Project Management, and Workplace
             Management can help improve and enhance my <span className="text-orange-600">soft skills</span>. 
             These are vital in the workplace since it requires you to think creatively and critically.
             It also equips you to collaborate with your co-workers, handle projects,
             and the ettiquettes within the workplace.
             </p>
            <br/>
            <p>
             In my specializations, It is focused to enhance and nurture my <span className="text-orange-600">hard
             skills</span>. In Web Development, I have focused to take CSS, React, and Node.
             These are modern frameworks that are mostly used in today&apos;s web development.
             For User Exeperience, It talks about User Experience in detail and the rules
             one must abide to make the experience enjoyable and seamless. It also talks
             about the importance of accessibility. Finally, Cloud Computing helps in introducing
             Cloud services to deploy web applications, set up storage solutions and automate
             infrastructure.
             </p>
             <br/>
              <p>
              The whole Learning path will net me <span className="text-orange-600">327 credit hours </span> 
              which is required in my practicum. These modules overall will greatly improve my hard and soft 
              it helps me to be prepared in the industry of software and web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview

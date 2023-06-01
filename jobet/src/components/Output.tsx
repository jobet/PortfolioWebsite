import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"

const Output = () => {
  return (
    <section id="output" className="py-12">
      <div className="pb-12">
        <h1 className="my-5 text-left font-bold font-serif text-4xl">
          My Output
        </h1>
        <div className="flex flex-col space-y-28">
        <SlideUp>
        <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
        <div className="md:w-full md:text-left text-xl">
            <p>
            I started my learning path on <span className="text-orange-600">March 31, 2023</span> and finished on <span className="text-orange-600">May 16, 2023</span>. It comprises of 
            <span className="text-orange-600"> 164 hours</span> of courses from LinkedIn Learning. 
            I only watch and learn from LinkedIn Learning during weekdays and I allocate myself <span className="text-orange-600">4-8 hours</span> a day depending on how busy I was during 
            that day to watch and study about the courses. I was able to complete the learning path in Design Thinking, gathering essential skills 
            in critical thinking, creative thinking, decision-making, and problem-solving. I started on <span className="text-orange-600">March 31, 2023</span> and finished on 
            <span className="text-orange-600"> April 10, 2023</span>. 
            Afterwards I was able to complete the learning path in Project Management, gathering proper project management skills in specifics the 
            foundations of agile methodology and its advantages with regards to software development in general. I started on <span className="text-orange-600">April 11, 2023</span> and 
            finished on <span className="text-orange-600">April 19, 2023</span>. Finally, I was able to complete the learning path in Workplace Management, gathering insightful topics with 
            regards to how a workplace operates, the etiquette, and most importantly, time management. I started on <span className="text-orange-600">April 20, 2023</span> and finished on 
            <span className="text-orange-600"> April 24, 2023</span>.
            </p>
            <br />
            <p>
            In my specialization modules, I began on <span className="text-orange-600">May 2, 2023</span> and finished on <span className="text-orange-600">May 16, 2023</span>. 
            I was able to complete the module in Web Development 
            by learning React.js, Node.js, and CSS which are commonly used in web development. I started on <span className="text-orange-600">May 2, 2023</span> and finished on 
            <span className="text-orange-600"> May 10, 2023</span>. 
            Afterwards I was able to complete the module in User Experience, by learning how to sketch out your user experience, follow by the 
            unwritten rules in user experience and most importantly accessibility towards those with disabilities. I started on <span className="text-orange-600">May 10, 2023</span> and 
            finished on <span className="text-orange-600">May 13, 2023</span>. Finally, I was able to learn a lot about Cloud computing in depth alongside popular platforms that provide 
            cloud computing from the likes of AWS, Azure, and GCP. I started on May 15, 2023 and finished on May 16, 2023.
            </p>
            <br />
            <p>
            During those dates where I am taking courses in LinkedIn Learning, I was also completing Module Assessments 1 through 3 and my Daily Journals. I recorded a video 
            presentation of my Practicum Overview by <span className="text-orange-600">April 15, 2023</span>, my Practicum Progress by <span className="text-orange-600">May 20, 2023</span>, and my Final Report by 
            <span className="text-orange-600"> June 2, 2023</span>. I also 
            constructed my personal portfolio website using my skills enhanced by my modules which is Next.js and CSS that is hosted on a cloud service 
            from Vercel.
            </p>
            </div>
          </div>
          </SlideUp>
        </div>
      </div>
    </section>
  )
}

export default Output

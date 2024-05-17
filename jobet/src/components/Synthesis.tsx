import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"

const Synthesis = () => {
  return (
    <section id="synthesis" className="py-12">
      <div className="pb-12">
        <h1 className="my-5 text-left font-bold font-serif text-4xl">
          What I Learned
        </h1>
        <div className="flex flex-col space-y-28">
        
        <div className="flex flex-col justify-center items-center animate-slideUpCubiBezier animation-delay-2 md:flex-col md:space-x-12">
        <div className="text-center md:w-1/2 px-12 md:px-0">
        <Image
              src="/whatilearned.svg"
              alt=""
              width={500}
              height={500}
            />
        </div>
        <div className="md:w-full md:text-left text-xl">
            <p>
            Throughout my Practicum Engagement, I gained knowledge in various areas. 
            In Design Thinking, I improved my creative thinking and decision making 
            skills. I learned how to <span className="text-orange-600">think critically</span> and make <span className="text-orange-600">better judgments</span>. 
            In Project Management, I learned the <span className="text-orange-600">Agile methodology</span> which is useful 
            for software development. It allows for frequent updates to gather 
            feedback. It also improves collaboration to meet deadlines. In Workplace 
            Management, I learned how a <span className="text-orange-600">workplace functions</span> regarding 
            employees, time and etiquette. This includes <span className="text-orange-600">collaborating with coworkers, 
            managing work hours, scheduling time and communication etiquette</span> for 
            emails, messages and calls.
            </p>
            <br/>
            <p>
            For my Specializations, I enhanced my hard skills. In Web Development, 
            I learned new things and improved my knowledge in <span className="text-orange-600">React, CSS and Node</span>. 
            In React, I learned <span className="text-orange-600">testing, authentication, encryption and user 
            management</span>. In CSS, I learned <span className="text-orange-600">layouts, animations, rules and coding 
            standards</span>. In Node, I learned <span className="text-orange-600">API integration, authentication and 
            password security</span> for the backend. In User Experience, I gained knowledge 
            about <span className="text-orange-600">UX rules and accessibility</span>. I realized UX involves more than 
            seamless and user-friendly experiences. It includes <span className="text-orange-600">accessibility for 
            people with disabilities</span>.  In Cloud Computing, I learned about <span className="text-orange-600">different
             cloud services from various providers</span>. I can choose services based on 
             my needs and compare benefits of each provider. 
            </p>
            <br/>
            <p>
            Overall, I developed useful skills that will benefit my career. I have 
            a new perspective on <span className="text-orange-600">creativity, critical thinking, time management, 
            collaboration and communication</span>.  I gained a solid understanding of 
            web development, UX and cloud computing through <span className="text-orange-600">useful frameworks, 
            tools and methodologies</span>. These skills have prepared me for <span className="text-orange-600">future 
            opportunities</span>.
            </p>
          </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Synthesis

'use client'
import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import SlideUp from './SlideUp'
import Image from 'next/image'
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
function ContactForm() {
  const [state, handleSubmit] = useForm("meqwwyaa");
  if (state.succeeded) {
      return (
      <section id="contact">
      <h1 className="my-2 text-left font-bold font-serif text-4xl">
        Get In Touch
      </h1>
      <p className="text-3xl text-center">Thanks for the message! <br />I&apos;ll get back to you!</p>
      </section>
      );
  }
  return (
    <section id="contact" className="py-12">
      
        <h1 className="my-2 text-left font-bold font-serif text-4xl">
          Contact
        </h1>
      
      
      <div className="flex flex-col z-10 md:flex-row">
      <div className="md:w-2/3 md:mx-2">
      <div className="flex flex-wrap flex-row items-center space-x-2 mb-1 pt-2 text-black">
          <a 
            href="https://github.com/jobet/" 
            rel="noreferrer"
            target="_blank"
            className="hover:-translate-y-1 transition-transform cursor-pointer flex flex-row items-center space-x-2 mb-1 py-2 text-black text-l mr-2"
          >
            <FaGithub
              className="text-formColor mr-2"
              size={25}
            />
            jobet
          </a>
          <a
            href="https://www.facebook.com/jobetaguirre/"
            rel="noreferrer"
            target="_blank"
            className="hover:-translate-y-1 transition-transform cursor-pointer flex flex-row items-center space-x-2 mb-1 py-2 text-black text-l mr-2"
          >
            <FaFacebook
              size={25}
              className="text-formColor mr-2"
            />
            Jose Alberto Aguirre
          </a>
          <a
            href="https://www.linkedin.com/in/jose-alberto-aguirre"
            rel="noreferrer"
            target="_blank"
            className="hover:-translate-y-1 transition-transform cursor-pointer flex flex-row items-center space-x-2 mb-1 py-2 text-black text-l mr-2"
          >
            <FaLinkedin
              className="text-formColor mr-2"
              size={25}
            />
            jose-alberto-aguirre
          </a>
          <p className="flex flex-row items-center space-x-2 mb-1 py-2 text-black text-l">
            <FaPhoneAlt size={20} className="text-formColor"/>
            +63 916 325 3149
          </p>
        </div>
      <form onSubmit={handleSubmit}>
      <input
        className="bg-white rounded-3xl py-4 px-6 w-full block mb-2 outline outline-2 outline-formColor"
        placeholder="example@website.com"
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        className="bg-white rounded-3xl py-4 px-6 w-full h-32 md:h-48 block mb-2 outline outline-2 outline-formColor"
        placeholder="Send me a message!"
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className="bg-formColor hover:bg-formColorLighter transition-all transition-all text-white px-4 py-2 mr-2 rounded-full font-semibold" type="submit" disabled={state.submitting}>
        Submit
      </button>
      </form>
      </div>
      <div className="md:w-1/3 my-2 md:mx-2 px-24 md:pl-8 md:pr-0">
          <Image
            src="/contactme.svg"
            alt=""
            width={300}
            height={300}
            className="rounded-xl"
          />
      </div>
      </div>
    
    </section>
  );
}

export default ContactForm
'use client'
import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import SlideUp from './SlideUp'
import Image from 'next/image'

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
      Get In Touch
    </h1>
      <SlideUp>
      <div className="flex flex-col z-10 md:flex-row">
      <div className="md:w-2/3 md:mx-2">
      <form onSubmit={handleSubmit}>
      <input
        className="bg-white rounded-xl p-2 w-full block mb-2"
        placeholder="youremail@website.com"
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
        className="bg-white rounded-xl p-2 w-full h-32 md:h-48 block mb-2"
        placeholder="Send me a message!"
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 mr-2 rounded-full font-semibold" type="submit" disabled={state.submitting}>
        Submit
      </button>
      </form>
      </div>
      <div className="md:w-1/3 my-2 md:mx-2">
          <Image
            src="/headshot.png"
            alt=""
            width={300}
            height={300}
            className="rounded-xl"
          />
      </div>
      </div>
    </SlideUp>
    </section>
  );
}

export default ContactForm
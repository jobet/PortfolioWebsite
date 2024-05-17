'use client'
import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

export default function ContactFormCSR() {
  const [state, handleSubmit] = useForm("meqwwyaa");

  return (
    <div className="md:w-2/3 md:mx-2">
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
        <button
          className="bg-formColor hover:bg-formColorLighter transition-all transition-all text-white px-4 py-2 mr-2 rounded-full font-semibold"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
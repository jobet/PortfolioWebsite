import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import ContactFormCSR from './ContactFormCSR';

interface ContactDetailsProps {
  succeeded: boolean;
}

export default function ContactDetails({ succeeded }: ContactDetailsProps) {
  if (succeeded) {
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
              <FaGithub className="text-formColor mr-2" size={25} />
              jobet
            </a>
            <a
              href="https://www.facebook.com/jobetaguirre/"
              rel="noreferrer"
              target="_blank"
              className="hover:-translate-y-1 transition-transform cursor-pointer flex flex-row items-center space-x-2 mb-1 py-2 text-black text-l mr-2"
            >
              <FaFacebook size={25} className="text-formColor mr-2" />
              Jose Alberto Aguirre
            </a>
            <a
              href="https://www.linkedin.com/in/jose-alberto-aguirre"
              rel="noreferrer"
              target="_blank"
              className="hover:-translate-y-1 transition-transform cursor-pointer flex flex-row items-center space-x-2 mb-1 py-2 text-black text-l mr-2"
            >
              <FaLinkedin className="text-formColor mr-2" size={25} />
              jose-alberto-aguirre
            </a>
            <p className="flex flex-row items-center space-x-2 mb-1 py-2 text-black text-l">
              <FaPhoneAlt size={20} className="text-formColor" />
              +63 916 325 3149
            </p>
          </div>
          <ContactFormCSR />
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
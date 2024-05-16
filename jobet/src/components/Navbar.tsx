'use client'
import React from 'react'
import { useState } from 'react'
import Image from "next/image"
import { Link } from 'react-scroll/modules'
import { MdMenu } from "react-icons/md";

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Portfolio",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Contact",
    page: "contact",
  },
]
const NAV_ITEMS_PRACTICUM: Array<NavItem> = [
  {
    label: "Practicum",
    page: "practicum",
  },
  {
    label: "Overview",
    page: "overview",
  },
  {
    label: "Output",
    page: "output",
  },
  {
    label: "Synthesis",
    page: "synthesis",
  },
  {
    label: "Documents",
    page: "documents",
  },
]

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 md:bg-transparent bg-backgroundColor animate-fadeIn animation-delay-2">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link 
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            >
              <div className="container flex items-center space-x-2 cursor-pointer">
                <Image src="\logo.svg"
                width={30}
                height={30}
                alt="J"/>
                <h2 className="text-2xl font-serif font-bold">Jobet</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                <MdMenu />
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="text-white font-semibold rounded-xl md:rounded-full items-center justify-center space-y-8 md:flex md:space-x-2 md:space-y-0">
              <div className="bg-blue-600 md:rounded-full rounded-xl">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "bg-blue-600 block lg:inline-block cursor-pointer rounded-xl md:rounded-full hover:bg-blue-700 px-5 py-2 "
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                )
              })}
              </div>
              <div className="bg-orange-600 md:rounded-full rounded-full">
                  <a href="/practicum" className="bg-red block lg:inline-block cursor-pointer rounded-full hover:bg-orange-700 px-5 py-2 ">
                    Practicum
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

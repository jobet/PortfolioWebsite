'use client'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll/modules'
import { MdMenu } from "react-icons/md";

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
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

export default function NavbarPracticum() {
  const [navbar, setNavbar] = useState(false)
  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 md:bg-transparent bg-backgroundColor">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <div className="container flex items-center space-x-2 cursor-pointer">
                <img src="\logo.svg" width="30"></img>
                <h2 className="text-2xl font-serif font-bold">Jose Alberto Aguirre</h2>
              </div>
            </a>
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
                  <a href="/" className="bg-blue-600 block lg:inline-block cursor-pointer rounded-xl md:rounded-full hover:bg-blue-700 px-5 py-2 ">
                    Portfolio
                  </a>
              <div className="bg-orange-600 md:rounded-full rounded-xl">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "bg-orange-600 block lg:inline-block cursor-pointer rounded-xl md:rounded-full hover:bg-orange-700 px-5 py-2 "
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
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

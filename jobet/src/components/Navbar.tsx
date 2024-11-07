'use client'
import React from 'react'
import { useState } from 'react'
import Image from "next/image"
import { Link } from 'react-scroll/modules'
import { MdPerson, MdFolder  } from "react-icons/md";

interface NavItem {
  icon: any
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    icon: <Image src="\logo.svg" width={12} height={12} alt='J' className='mt-[2px] mr-[2px]'/>,
    label: "Jobet",
    page: "home",
  },
  {
    icon: <MdPerson className='text-formColor mr-[2px] mt-[4px]'/>,
    label: "About",
    page: "about",
  },
  {
    icon: <MdFolder className='text-formColor mr-[2px] mt-[4px]'/>,
    label: "Projects",
    page: "projects",
  },
]

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <header className="w-full mx-auto  px-4 fixed top-4 z-50 md:bg-transparent bg-backgroundColor animate-fadeIn animation-delay-2">
      <div className="justify-center md:items-center md:flex">
        <div>
            <div className="font-semibold rounded-full items-center justify-center space-y-8 md:flex md:space-x-2 md:space-y-0">
              <div className="bg-white outline outline-1 outline-formColor rounded-3xl flex justify-center items-center">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "flex flex-row bg-transparent text-black block cursor-pointer rounded-full hover:bg-gray-300 transition-all md:px-12 px-8 py-2"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  > 
                    {item.icon}
                    {item.label}
                  </Link>
                )
              })}
              </div>
              {/**<div className="bg-orange-600 md:rounded-full rounded-full">
                  <a href="/practicum" className="bg-red block lg:inline-block cursor-pointer rounded-full hover:bg-orange-700 px-5 py-2 ">
                    Practicum
                  </a>
              </div>
            )**/}
            </div>
          </div>
        </div>
    </header>
  )
}

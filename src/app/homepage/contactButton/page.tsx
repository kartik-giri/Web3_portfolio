"use client";
import React from 'react'
import { Link } from "react-scroll";

export default function ContactButton() {
  return (
    <div>
        <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="cursor-pointer"
                >
        <button className="text-white ml-8 md:ml-16  bg-orange-500 px-4 font-bold font-sans text-sm  xl:text-lg mt-3 py-2 rounded-sm hover:text-black hover:duration-100 hover:ease-in">
              Contact Me
            </button>
                </Link>
    </div>
  )
}

"use client";
import React from "react";
import { Link } from "react-scroll";
import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

export default function Navbar() {
  const [menuOpen, setmenuOpen] = useState(false);

  const handleNav = () => {
    setmenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className=" fixed w-full h-[8vh] xl:h-[14vh] z-50 bg-none shadow-sm shadow-gray-900 bg-slate-950 bg-opacity-60">
        <div className="flex justify-between w-full h-full items-center px-4 md:px-28 ">
          {/* LOGO */}
          
            <div className=" text-justify cursor-pointer">
              <span className=" mr-2 bg-orange-500 p-2 pl-3 pr-3 text-white rounded-lg font-bold ">
              <Link
                  to="homepage"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="cursor-pointer"
                >
                  K
                </Link>
                
              </span>
              <span className=" font-semibold text-white">
              <Link
                  to="homepage"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="cursor-pointer"
                >
                  Kartik Giri
                </Link>
                </span>
            </div>
          
          {/* NAVIGATION */}
          <div>
            <ul className=" hidden xl:flex">
              <li className=" pr-10 hover:font-bold text-white ">
              <Link
                  to="homepage"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                   className="cursor-pointer relative before:content-[''] before:block before:absolute before:h-[3px] before:w-full before:bg-orange-500 before:bottom-[-5px] before:scale-x-0 before:transition-transform before:origin-center hover:before:scale-x-100"
                >
                  Home
                </Link>
              </li>

              <li className=" pr-10 hover:font-bold text-white ">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-15}
                  duration={500}
                   className="cursor-pointer relative before:content-[''] before:block before:absolute before:h-[3px] before:w-full before:bg-orange-500 before:bottom-[-5px] before:scale-x-0 before:transition-transform before:origin-center hover:before:scale-x-100"
                
                >
                  About
                </Link>
              </li>


              <li className=" pr-10  hover:font-bold text-white">
              <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-15}
                  duration={500}
                   className="cursor-pointer relative before:content-[''] before:block before:absolute before:h-[3px] before:w-full before:bg-orange-500 before:bottom-[-5px] before:scale-x-0 before:transition-transform before:origin-center hover:before:scale-x-100"
                
                >
                  Services
                </Link>
              </li>
              <li className=" pr-10  hover:font-bold text-white ">
              <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-15}
                  duration={500}
                   className="cursor-pointer relative before:content-[''] before:block before:absolute before:h-[3px] before:w-full before:bg-orange-500 before:bottom-[-5px] before:scale-x-0 before:transition-transform before:origin-center hover:before:scale-x-100"
                
                >
                  Skills
                </Link>
              </li>

              <li className=" pr-10 hover:font-bold text-white ">
              <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-15}
                  duration={500}
                   className="cursor-pointer relative before:content-[''] before:block before:absolute before:h-[3px] before:w-full before:bg-orange-500 before:bottom-[-5px] before:scale-x-0 before:transition-transform before:origin-center hover:before:scale-x-100"
                
                >
                  Projects
                </Link>
              </li>

              <li className=" pr-10 ">
              <Link
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={-0}
                  duration={500}
                  className="cursor-pointer px-3 py-1 border-2 w-40 border-orange-500 hover:bg-orange-500 hover:duration-75 mt hover:ease-in mt-4  text-white"
      
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* MOBILE NAVBAR ICON */}
            <div className="mr-4">
              <div
                className=" xl:hidden cursor-pointer  text-white"
              >
                <AiOutlineMenu size={28} className ="hover:text-orange-500"  onClick={handleNav} />
              </div>
            </div>
          </div>
        </div>
        {/* MOBILE NAVIGATION */}
        <div
         className={
          menuOpen
             ? "fixed top-0 left-0 w-[65%] h-screen xl:hidden bg-gray-950 bg-opacity-90 transition-all ease-in duration-500"
             : "fixed left-[-100%] h-screen w-[65%] top-0 ease-in duration-500"
       }
       
        >
          <div className="flex w-full items-center justify-end pt-10 pr-8">
            <div  className="cursor-pointer">
              <AiOutlineClose size={25} className="text-white hover:text-orange-500" onClick={handleNav} />
            </div>
          </div>

          <div className="pl-10 pt-4 flex-col">
            <ul className="  h-full w-full">
              <li className=" py-3 hover:font-bold text-white " >
              <Link
                  to="homepage"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                   className="cursor-pointer relative before:content-[''] before:block before:absolute before:h-[3px] before:w-full before:bg-orange-500 before:bottom-[-5px] before:scale-x-0 before:transition-transform before:origin-center hover:before:scale-x-100"
                  onClick={handleNav}
                >
                  Home
                </Link>
              </li>

              <li className=" py-3 hover:font-bold text-white " >
              <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                   className="cursor-pointer relative before:content-[''] before:block before:absolute before:h-[3px] before:w-full before:bg-orange-500 before:bottom-[-5px] before:scale-x-0 before:transition-transform before:origin-center hover:before:scale-x-100"
                  onClick={handleNav}
                >
                  About
                </Link>
              </li>

              <li className=" py-3 hover:font-bold text-white " >
              <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                   className="cursor-pointer relative before:content-[''] before:block before:absolute before:h-[3px] before:w-full before:bg-orange-500 before:bottom-[-5px] before:scale-x-0 before:transition-transform before:origin-center hover:before:scale-x-100"
                  onClick={handleNav}
                >
                  Services
                </Link>
              </li>

              <li className=" py-3  hover:font-bold text-white " >
              <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                   className="cursor-pointer relative before:content-[''] before:block before:absolute before:h-[3px] before:w-full before:bg-orange-500 before:bottom-[-5px] before:scale-x-0 before:transition-transform before:origin-center hover:before:scale-x-100"
                  onClick={handleNav}
                >
                  Skills
                </Link>
              </li>

              <li className=" py-3 hover:font-bold text-white  " >
              <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                   className="cursor-pointer relative before:content-[''] before:block before:absolute before:h-[3px] before:w-full before:bg-orange-500 before:bottom-[-5px] before:scale-x-0 before:transition-transform before:origin-center hover:before:scale-x-100"
                  onClick={handleNav}
                >
                  Projects
                </Link>
              </li>

              <li className=" py-3 hover:font-bold " onClick={handleNav}>
              <Link
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer px-3 py-1 border-2 w-40 border-orange-500 hover:bg-orange-500 hover:duration-75 mt hover:ease-in mt-4 text-white"
                  onClick={handleNav}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

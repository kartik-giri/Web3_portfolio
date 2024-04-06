import React from "react";
import Image from "next/image";
import {AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import Profile from "../../../public/IMG-f.png";
import ContactButton from "./contactButton/page";
// import ParticleComp from "./particle/page";

export default function Homepage() {
  return (
    <div className="h-full xl:h-screen w-full pt-20 md:pt-0 bg-cover bg-center" id="homepage">
      {/* <ParticleComp /> */}
      <div className= " h-{90%} w-full md:flex md:flex-row-reverse md:items-center md:px-28 justify-between md:pb-10 md:pt-20">
      <div className="flex justify-center px-7 md:px-0  pt-24 md:flex md:justify-end  md:pl-14 ">
        <Image
          src={Profile}
          width={450}
          height={50}
          alt="Picture of the logo."
          className="rounded-full border-t-8 border-r-4 max-w-full border-l-4 border-orange-300 bg-gray-900 md:mb-11 md:mr-9  "
        />
      </div>

      <div className=" px-7 md:px-0 md:w-3/6 mt-4 text-left md:text-left">
        <div className=" text-4xl text-white xl:text-7xl  font-bold font-sans">
          Hello, my name is <span className=" text-orange-400">Kartik giri.</span>
        </div>
        <div className=" text-2xl font-medium text-white mt-2 md:pt-4">
          I am <span className=" text-orange-400 font-bold">Blockchain</span> developer.
        </div>
        <div className="flex text-left mt-2 md:px-0">
          <div>
          <button className=" text-white  bg-orange-500 px-4 text-sm  xl:text-lg mt-3 py-2 font-sans font-bold rounded-sm hover:text-black hover:duration-100 hover:ease-in">
              <a href="/My_resume.pdf" download="My_resume.pdf" className="flex justify-center" >

              <div >
              Download Cv 

              </div>
            
              </a>
            </button>
          </div>
          <div>
            <ContactButton/>
          </div>
        </div>
   </div>
   </div>
   <div className=" flex justify-center mt-12 md:mt-1 animate-bounce animate-duration-1000 ">
   <AiOutlineArrowDown  size={30}
   className=" text-orange-500  text-center"
   />
   </div>
    </div>
  );
}

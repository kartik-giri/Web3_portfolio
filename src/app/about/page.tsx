"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Profile from "../../../public/IMG-f.png";
import { Link } from "react-scroll";
import { AiOutlineDownload } from "react-icons/ai";

export default function About() {
  return (
    <div className=" w-screen h-full bg-gray-950" id="about">
      <div className=" flex justify-center w-full">
        <h1 className=" text-5xl  font-bold text-white pt-16 md:pt-24  cursor-pointer ">
          About <span className=" text-orange-500">Me</span>
        </h1>
      </div>

      <div className="  text-left px-7 md:flex md:justify-evenly pt-4 md:pt-24">
        <div className=" flex justify-center md:pr-8">
          <Image
            src={Profile}
            width={350 }
            height={50}
            alt="Picture of the logo."
            className=" bg-orange-300   border-8 border-orange-300 border-b-0 rounded-md "
          />
        </div>

        <div className=" text-white  md:w-2/6">
          <div>
            <h1 className=" text-3xl pt-3 md:pt-0">Blockchain Developer</h1>
          </div>
          <div className="md:text-xl text-lg  pt-4">
            <div className="">
              <p className="flex ">
                <span className="h-1 w-8 bg-orange-500 mr-2 pt-8"></span>
                I'm Kartik Giri, a blockchain developer and security researcher working on decentralized
                technologies. With expertise in building and securing smart contracts.

              </p>
            </div>
            <div className=" pt-2 pl-4">
            I specialize in coding secure, readable smart contracts and finding bugs in 
                blockchain protocols.
            </div>
            <div className=" pt-2 pl-4">
              Let's connect and explore the transformative world of blockchain
              together!
            </div>
          </div>
          <div>
            <button className=" border-2 px-2 w-40 py-1 border-orange-500 hover:bg-orange-500 hover:duration-75 mt hover:ease-in mt-4 ml-4">
              <a href="/My_resume.pdf" download="My_resume.pdf" className="flex justify-center" >

              <div >
              Download Cv 

              </div>
              <span className=" ml-2">
                <AiOutlineDownload size = "20"/>
              </span>
              </a>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

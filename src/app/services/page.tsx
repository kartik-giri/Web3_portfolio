import React from "react";
import Image from "next/image";
import contract from "../../../public/contract.png";
import { AiFillCheckCircle, AiOutlineLaptop } from "react-icons/ai";

export default function Service() {
  return (
    <div className=" h-full w-full  bg-gray-950 " id="services">
      <div className=" flex justify-center w-full">
        <h1 className=" text-5xl  font-bold text-white pt-16 md:pt-24  cursor-pointer  ">
          Servi<span className=" text-orange-500">ces</span>
        </h1>
      </div>

      <div className=" w-full md:flex md:justify-center md:pt-24 mt:4">
        <div className=" md:w-3/12   m-7 md:m-0 md:mr-28 xl:mr-40 bg-red-700 text-white rounded-md transform transition-transform ease-in-out duration-200 hover:-translate-y-2 ">
          <div className="w-full flex justify-center md:mt-6 pt-4">
            <Image
              src={contract}
              width={100}
              height={100}
              alt="Picture of the logo."
            />
          </div>
          <div className=" w-full flex justify-center mt-2">
            <h1 className=" text-lg font-bold">Smart contract</h1>
          </div>

          <div className=" mt-4 md:mb-8 pb-4">
            <div className="flex mx-6 my-2">
              <div>
                <AiFillCheckCircle size={20} className=" text-white mr-1" />
              </div>
              <div>Write secure and clean solidity code.</div>
            </div>

            <div className="flex mx-6  my-2">
              <div>
                <AiFillCheckCircle size={20} className=" text-white mr-1" />
              </div>
              <div>Write tests and deployement scripts.</div>
            </div>

            <div className="flex mx-6  my-2">
              <div>
                <AiFillCheckCircle size={20} className=" text-white mr-1" />
              </div>
              <div>Fuzz testing.</div>
            </div>

            <div className="flex mx-6  my-2">
              <div>
                <AiFillCheckCircle size={20} className=" text-white mr-1" />
              </div>
              <div>Invariant testing.</div>
            </div>
          </div>
        </div>

        <div className=" md:w-3/12 mx-7  md:m-0  md:ml-28 xl:ml-40 bg-blue-700 text-white rounded-md transform transition-transform ease-in-out duration-200 hover:-translate-y-2 ">
          <div className="w-full flex justify-center md:mt-6 pt-4 ">
           <AiOutlineLaptop
           size={100}
           />
          </div>
          <div className=" w-full flex justify-center mt-2">
            <h1 className=" text-lg font-bold">Security review</h1>
          </div>

          <div className=" mt-4 md:mb-8 pb-4">
            <div className="flex mx-6 my-2">
              <div>
                <AiFillCheckCircle size={20} className=" text-white mr-1" />
              </div>
              <div>Educate the protocol team about security.</div>
            </div>

            <div className="flex mx-6  my-2">
              <div>
                <AiFillCheckCircle size={20} className=" text-white mr-1" />
              </div>
              <div>Find and bugs with POC.</div>
            </div>

            <div className="flex mx-6  my-2">
              <div>
                <AiFillCheckCircle size={20} className=" text-white mr-1" />
              </div>
              <div>Write and deliver easily understandable security report.</div>
            </div>

            <div className="flex mx-6  my-2">
              <div>
                <AiFillCheckCircle size={20} className=" text-white mr-1" />
              </div>
              <div>Write invariant/fuzz test if required.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );  
}

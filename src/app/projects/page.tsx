"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import stableCoin from "../../../public/StableCoin.jpg";
import erc20 from "../../../public/ERC-20.jpg";
import lotteryContract from "../../../public/Lottery_contract.jpg";
import lotterydapp from "../../../public/LOttery_Dapp.jpg";
import fundMeContract from "../../../public/simple_Storage_Contract.jpg";
import fundMeDapp from "../../../public/simple_Storage_Dapp.jpg";
import { AiFillGithub } from "react-icons/ai";
import { AiFillChrome } from "react-icons/ai";

export default function Projects() {
  return (
    <div className="w-screen h-full  bg-gray-950 xl:pb-28 " id="projects">
      <div className=" flex justify-center w-full">
        <h1 className=" text-5xl font-bold text-white pt-16 md:pt-24  cursor-pointer ">
          My <span className=" text-orange-500">Projects</span>
        </h1>
      </div>

      <div className=" xl:grid grid-cols-3 gap-4 w-[80vw] mx-auto xl:pt-8 mt:4">
        <div className=" flex justify-center items-center mt-5 pb-5 xl:pb-0">
          <div className=" w-[85vw] bg-gray-900 rounded-sm ">
            <h1 className=" text-white font-sans font-medium text-3xl text-center mt-4">
              StableCoin-Protocol
            </h1>
            <div className=" w-full h-full flex xl:p-0 p-4 justify-center pt-3">
              <Image
                src={stableCoin}
                width={300}
                height={50}
                alt="Picture of the logo."
                className=" rounded-md"
              />
            </div>

            <div>
              <Link
                href="https://github.com/kartik-giri/Decentralized_StableCoin"
                target="_blank"
                className=" flex justify-end mr-6 xl:mr-12 pb-4 pt-2"
              >
                <AiFillGithub size={34} className=" text-white hover:text-orange-500 " />
              </Link>
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center mt-5 pb-5 xl:pb-0">
          <div className=" w-[85vw] bg-gray-900 rounded-sm ">
            <h1 className=" text-white font-sans font-medium text-3xl text-center mt-4">
              ERC-20 Token
            </h1>
            <div className=" w-full h-full  xl:p-0 p-4 flex justify-center pt-3">
              <Image
                src={erc20}
                width={300}
                height={50}
                alt="Picture of the logo."
                className=" rounded-md"
              />
            </div>

            <div>
              <Link
                href="https://github.com/kartik-giri/ERC-20-Token-Name_Giri"
                target="_blank"
                className=" flex justify-end mr-6 xl:mr-12 pb-4 pt-2"
              >
                <AiFillGithub size={34} className=" text-white hover:text-orange-500 " />
              </Link>
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center mt-5 pb-5 xl:pb-0">
          <div className=" w-[85vw] bg-gray-900 rounded-sm ">
            <h1 className=" text-white font-sans font-medium text-3xl text-center mt-4">
              Lottery-Dapp
            </h1>
            <div className=" w-full h-full xl:p-0 p-4 flex justify-center pt-3">
              <Image
                src={lotteryContract}
                width={300}
                height={50}
                alt="Picture of the logo."
                className=" rounded-md"
              />
              
            </div>

            <div className=" flex justify-end "> 
              <Link
                href="https://lottery-dapp-blue.vercel.app/"
                target="_blank"
                className="  mr-4 pb-4 pt-2"
              >
                <AiFillChrome size={34} className=" text-white hover:text-orange-500 " />
              </Link>
              <Link
                href="https://github.com/kartik-giri/LotteryWeb3-Dapp"
                target="_blank"
                className=" mr-6 xl:mr-12 pb-4 pt-2"
              >
                <AiFillGithub size={34} className=" text-white hover:text-orange-500 " />
              </Link>

            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center mt-5 xl:mt-0 pb-5">
          <div className=" w-[85vw] bg-gray-900 rounded-sm ">
            <h1 className=" text-white font-sans font-medium text-3xl text-center mt-4">
              Lottery-Protocol
            </h1>
            <div className=" w-full h-full flex xl:p-0 p-4 justify-center pt-3">
              <Image
                src={lotterydapp}
                width={300}
                height={50}
                alt="Picture of the logo."
                className=" rounded-md"
              />
            </div>

            <div>
              <Link
                href="https://github.com/kartik-giri/Raffle-smart-contract"
                target="_blank"
                className=" flex justify-end mr-6 xl:mr-12 pb-4 pt-2"
              >
                <AiFillGithub size={34} className=" text-white hover:text-orange-500 " />
              </Link>
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center mt-5 xl:mt-0 pb-5">
          <div className=" w-[85vw] bg-gray-900 rounded-sm ">
            <h1 className=" text-white font-sans font-medium mx-1 text-3xl text-center mt-4">
              Crowdfunding-Contract
            </h1>
            <div className=" w-full h-full xl:p-0 p-4 flex justify-center pt-3">
              <Image
                src={fundMeContract}
                width={300}
                height={50}
                alt="Picture of the logo."
                className=" rounded-md"
              />
            </div>

            <div>
              <Link
                href="https://github.com/kartik-giri/Hardhat_fundMe_SmartContract"
                target="_blank"
                className=" flex justify-end mr-6 xl:mr-12 pb-4 pt-2"
              >
                <AiFillGithub size={34} className=" text-white hover:text-orange-500 " />
              </Link>
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center mt-5 xl:mt-0 pb-5">
          <div className=" w-[85vw] bg-gray-900 rounded-sm ">
            <h1 className=" text-white font-sans font-medium text-3xl text-center mt-4">
              Crowdfunding-Dapp
            </h1>
            <div className=" w-full h-full xl:p-0 p-4 flex justify-center pt-3">
              <Image
                src={fundMeDapp}
                width={300}
                height={50}
                alt="Picture of the logo."
                className=" rounded-md"
              />
            </div>

            <div className=" flex justify-end "> 
              <Link
                href="https://react-fund-me-dapp.vercel.app/"
                target="_blank"
                className="  mr-4 pb-4 pt-2"
              >
                <AiFillChrome size={34} className=" text-white hover:text-orange-500 " />
              </Link>
              <Link
                href="https://github.com/kartik-giri/React_FundMe_Dapp"
                target="_blank"
                className=" mr-6 xl:mr-12 pb-4 pt-2"
              >
                <AiFillGithub size={34} className=" text-white hover:text-orange-500 " />
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

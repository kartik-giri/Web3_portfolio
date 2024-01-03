import React from 'react'
import { AiFillMail } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';

export default function Contacts() {
  return (
    <div className=' h-[50vh] md:h-[30vh] w-full bg-gray-950 pt-2' id='contacts'>
        <div className=' md:flex md:justify-between px-4 md:px-28'>
            <div className=' flex '>
                <div className=' bg-blue-700 rounded-full p-3'>
                    <AiFillMail size={40} className=' text-white '/>
                </div>
                <div className=' ml-3 mt-3'>
                    <div className=' text-white'>Send Me Email</div>
                    <div className=' text-white font-sans font-thin'>kartikgiri1t30@gmail.com</div>
                </div>
            </div>

                <Link href={"https://twitter.com/0xKartikgiri00"} target='/'>
            <div className=' flex my-6 md:my-0'>
                <div className=' bg-blue-700 rounded-full p-3'>
                    <AiOutlineTwitter size={40} className=' text-white '/>
                </div>
                <div className=' ml-3 mt-3'>
                    <div className=' text-white'>Send Me Dm</div>
                    <div className=' text-white font-sans font-thin'>0xKartikgiri00</div>
                </div>
            </div>
                </Link>

                <Link href={"https://www.linkedin.com/in/kartik-giri-496347251/"} target='/'>
            <div className=' flex'>
                <div className=' bg-blue-700 rounded-full p-3'>
                    <AiFillLinkedin size={40} className=' text-white '/>
                </div>
                <div className=' ml-3 mt-3'>
                    <div className=' text-white'>Send Me Dm</div>
                    <div className=' text-white font-sans font-thin'>kartik-giri</div>
                </div>
            </div>
                </Link>
        </div>
        <div className=' pt-12'> 
            <div className='w-full border-t-2 border-gray-700'></div>
            <div className=' text-center text-gray-700 font-sans font-normal pt-5'>Kartik_giri 2023 | All rights reserved</div>
        </div>
    </div>
  )
}

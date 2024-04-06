import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

export default function Skills() {
  return (
    <div className=' h-full w-full  bg-gray-950 ' id="skills">
      
      <div className=" flex justify-center w-full">
        <h1 className=" text-5xl  font-bold text-white pt-16 md:pt-24  cursor-pointer  ">
          My <span className=' text-orange-500'>Skills</span>
        </h1>
      </div>

      <div className=' xl:flex xl:justify-center xl:pt-24 mt:4'>
        <div className=' xl:w-3/12   m-7 xl:m-0 xl:mr-40  bg-blue-700 text-white rounded-md transform transition-transform ease-in-out duration-200 hover:-translate-y-2 '>
          
          <div className=' w-full flex justify-center pt-6'>
          <h1 className=' text-lg font-bold'>Security researcher</h1>
          </div>
          <div className=' pt-4 pb-6 grid grid-cols-2 gap-4 font-bold'>
            <div className='flex ml-6'>
              <div>
              <AiFillCheckCircle size={20} className=" text-white mr-1"/>
              </div>
              <div>
              Manual review
              </div>
            </div>
            <div className='flex ml-6'>
              <div>
              <AiFillCheckCircle size={20} className=" text-white mr-1"/>
              </div>
              <div>Static review</div>
            </div>

            <div className='flex ml-6'>
              <div>
              <AiFillCheckCircle size={20} className=" text-white mr-1"/>
              </div>
              <div>Fuzzing</div>
            </div>

            <div className='flex ml-6'>
              <div>
              <AiFillCheckCircle size={20} className=" text-white mr-1"/>
              </div>
              <div>Coded POCs</div>
            </div>

            <div className='flex ml-6'>
              <div>
              <AiFillCheckCircle size={20} className=" text-white mr-1"/>
              </div>
              <div>Mutation testing</div>
             
            </div>

            <div className='flex ml-6'>
              <div>
              <AiFillCheckCircle size={20} className=" text-white mr-1"/>
              </div>
              <div>Invariant testing</div>
            </div>

            {/* <div className='flex ml-6'>
              <div>
              <AiFillCheckCircle size={20} className=" text-white mr-1"/>
              </div>
              <div>Web3 frontend</div>
            </div> */}

            {/* <div className='flex ml-6'>
              <div>
              <AiFillCheckCircle size={20} className=" text-white mr-1"/>
              </div>
              <div>Git</div>
            </div> */}
            
          </div>
        </div>

        <div className=' xl:w-3/12 mt-7 mx-7 xl:m-0 xl:ml-40 bg-red-700 text-white rounded-md transform transition-transform ease-in-out duration-200 hover:-translate-y-2 '>
          
          <div className=' w-full flex justify-center pt-6'>
          <h1 className=' text-lg font-bold'>Blockchain developer</h1>
          </div>
          <div className=' pt-4 pb-6 grid grid-cols-2 gap-4 font-bold'>
            <div className='flex ml-6'>
              <div>
              <AiFillCheckCircle size={20} className=" text-white mr-1"/>
              </div>
              <div>
              Solidity
              </div>
            </div>
            <div className='flex ml-6'>
              <div>
              <AiFillCheckCircle size={20} className=" text-white mr-1"/>
              </div>
              <div>Hardhat</div>
            </div>

            <div className='flex ml-6'>
              <div>
              <AiFillCheckCircle size={20} className=" text-white mr-1"/>
              </div>
              <div>Foundry</div>
            </div>

            <div className='flex ml-6'>
              <div>
              <AiFillCheckCircle size={20} className=" text-white mr-1"/>
              </div>
              <div>Ethers.js</div>
            </div>

            <div className='flex ml-6'>
              <div>
              <AiFillCheckCircle size={20} className=" text-white mr-1"/>
              </div>
              <div>Testing</div>
             
            </div>

            <div className='flex ml-6'>
              <div>
              <AiFillCheckCircle size={20} className=" text-white mr-1"/>
              </div>
              <div>Web3 frontend</div>
            </div>

            <div className='flex ml-6'>
              <div>
              <AiFillCheckCircle size={20} className=" text-white mr-1"/>
              </div>
              <div>Next/React.js</div>
            </div>

            <div className='flex ml-6'>
              <div>
              <AiFillCheckCircle size={20} className=" text-white mr-1"/>
              </div>
              <div>JS/TS</div>
            </div>
            
          </div>
        </div>
        
      </div>


    
    </div>
  )
}

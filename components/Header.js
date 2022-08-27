import React from 'react'
import Image from 'next/image'
import {HiOutlineHome, HiOutlineSearch} from 'react-icons/hi'
import { RiFlag2Line } from 'react-icons/ri'
import { MdOutlineOndemandVideo } from 'react-icons/md'
import { AiOutlineShop } from 'react-icons/ai'
import { IoGameControllerOutline } from 'react-icons/io5'

const Header = () => {
  return (
    <div className="flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
        {/* Left component */}
        <div className="flex min-w-fit ">
          {/* <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png" height={40} width={40} /> */}
          <div className="flex items-center space-x-2 p-2 ml-2 rounded-full bg-gray-100 text-gray-500 ">
            <HiOutlineSearch size={20}/>
            <input className="lg:inline-flex focus:outline-none bg-transparent" type="text" placeholder='Search Facebook' />
          </div>
        </div>
        {/* Middle component */}
        <div className="flex flex-grow justify-center">
          <div className="flex items-center">
            <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <HiOutlineHome size={25} className="mx-auto"/>
            </div>
            <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <RiFlag2Line size={25} className="mx-auto"/>
            </div>
            <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <MdOutlineOndemandVideo size={25} className="mx-auto"/>
            </div>
            <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <AiOutlineShop size={25} className="mx-auto"/>
            </div>
            <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <IoGameControllerOutline size={25} className="mx-auto"/>
            </div>
          </div>
          
        </div>
        {/* Right component */}
        <div className="flex items-center justify-end min-w-fit space-x-2">
            <img src="../images/facebook_logo.png" alt="" />
        </div>
    </div>
  )
}

export default Header
import React from 'react'
import {RiVideoAddFill} from 'react-icons/ri'
import {BiSearch} from 'react-icons/bi'
import {CgMoreAlt} from 'react-icons/cg'
import Contacts from './Contacts'

const RightSidebar = () => {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
        <div className="flex items-center text-gray-500">
            <p className='flex text-lg font-semibold flex-grow'>Contacts</p>
            <div className="flex space-x-1 px-2">
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <RiVideoAddFill/>
                </div>

                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <BiSearch/>
                </div>

                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <CgMoreAlt/>
                </div>
            </div>
        </div>
        <Contacts src="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Adeola Oladeji" 
        status="Online"/>

        <Contacts src="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Lota my Enemy"
        status="Offline" />

        <Contacts src="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Esther My Baby" 
        status="Online"/>
    </div>
  )
}

export default RightSidebar
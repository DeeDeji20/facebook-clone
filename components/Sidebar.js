import React from 'react'
import {ImUsers} from 'react-icons/im'
import SidebarItem from './SidebarItem'
import {MdGroups, MdOutlineOndemandVideo, MdOutlineExpandMore} from "react-icons/md"
import {BsStopwatch} from "react-icons/bs"
import {AiOutlineShop} from "react-icons/ai"
import { useSession } from 'next-auth/react'

const Sidebar = () => {
  const {data: session} = useSession();
  return (
    <div className="hidden lg:inline">
        <div className="flex items-center space-x-2 pl-4 hover:bg-gray-200 rounded-w-xl cursor-pointer flex-col py-2 lg:min-w-[320px]">
            <img src={session?.user.image} className="rounded-full cursor-pointer" height={40} width={40} /> 
            <p className="hidden sm:inline-flex font-medium">{session?.user.name}</p>
        </div>
        <SidebarItem Icon={ImUsers} value="Friend"  />
        <SidebarItem Icon={MdGroups} value="Groups"  />
        <SidebarItem Icon={AiOutlineShop} value="Marketplace"/>
        <SidebarItem Icon={MdOutlineOndemandVideo} value="UserWatchs"/>
        <SidebarItem Icon={BsStopwatch} value="Memories"/>
        <SidebarItem Icon={MdOutlineExpandMore} value="See More"/>
    </div>
  )
}

export default Sidebar
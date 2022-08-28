import { useSession } from 'next-auth/react';
import React from 'react'
import {HiOutlineVideoCamera} from "react-icons/hi"
import {IoMdPhotos} from "react-icons/io"
import {BsEmojiSmile} from "react-icons/bs"

const CreatePost = () => {
    const {data:session} = useSession();
  return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2">
        <div className="flex p-4 space-x-2 items-center">
               {/* <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png" height={40} width={40}/> */}

               <form className="flex flex-1 ">
                   <input type="text"
                   className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 p-4"
                   placeholder={`What's on your mind ${session?.user.name.split(" ")[0]} ?`} />
                   <button hidden></button>
               </form>
        </div>
        <div className="flex justify-evenly py-2">
            <div className="flex items-center space-x-1 flex-grow justify-center">
                <HiOutlineVideoCamera size={20} className="text-red-500"/>
                <p>Live Video</p>
            </div>
        </div>
    </div>
  )
}

export default CreatePost
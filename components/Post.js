import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'
import {FaRegCommentAlt} from 'react-icons/fa'
import {RiShareForwardLine} from 'react-icons/ri'


const Post = () => {
  return (
    <div className="flex flex-col">
        <div className="bg-white mt-6 rounded-md p-4">
            <div className="flex items-center space-x-2">
                <img src="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-ful w-10 h-10"/>
                <div>
                    <p className="font-medium">Adeola Oladeji</p>
                    <p className="text-xs text-gray-500">{new Date().toDateString()}</p>
                </div>
            </div>
            <p className="py-4">Lorem Ipsum</p>
        </div>
        {/* If any image */}
        <div className="relative h-60 md:h-96 bg-white">
            <img src="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover" layout="fill" objectFit="cover" alt="" />
           {/* Footer */}
            <div className="flex items-center justify-center bg-white p-2">
                <div className="flex items-center space-x-1 hover:bg-gray-100 cursor-pointer flex-grow justify-center rounded-xl">
                    <FiThumbsUp className="h-4"/>
                    <p className="text-xs sm:text-base">Like</p>
                </div>

                <div className="flex items-center space-x-1 hover:bg-gray-100 cursor-pointer flex-grow justify-center rounded-xl">
                    <FaRegCommentAlt className="h-4"/>
                    <p className="text-xs sm:text-base">Comment</p>
                </div>

                <div className="flex items-center space-x-1 hover:bg-gray-100 cursor-pointer flex-grow justify-center rounded-xl">
                    <RiShareForwardLine className="h-4"/>
                    <p className="text-xs sm:text-base">Share</p>
                </div>
            </div>    
        </div>
             
    </div>
  )
}

export default Post
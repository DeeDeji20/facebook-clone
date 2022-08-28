import React from 'react'

const Post = () => {
  return (
    <div className="flex flex-col">
        <div className="bg-white mt-6 rounded-md p-4">
            <div className="flex items-center space-x-2">
                <img src="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-ful w-10 h-10"/>
                <div>
                    <p className="font-medium">Adeola Oladeji</p>
                    <p className="text-xs text-gray-500">{new Date().toLocaleString()}</p>
                </div>
            </div>
            <p className="py-4">Lorem Ipsum</p>
        </div>
        {/* If any image */}
        <div className="relative h-60 md:h-96">
            <img src="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" objectFit="cover" alt="" />
        </div>
    </div>
  )
}

export default Post
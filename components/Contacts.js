import React from 'react'

const Contacts = ({name, src, status}) => {
  return (
    <div className="flex items-center space-x-2 py-2 pl-1 hover:bg-gray-200 rounded-l-xl cursor-pointer relative">
        <img src={src} height={40} weight={40} className="h-10 w-10 rounded-full" alt="" />
        <p className="hidden sm:inline-flex text-base-sm">{name}</p>
        {status==="Online" && (
             <div className="bg-green-500 h-4 w-4 absolute rounded-full left-5 bottom-2"></div>
        )}
        {status=== "Offline" && (
             <div className="bg-gray-500 h-4 w-4 absolute rounded-full left-5 bottom-2"></div>
        )}
       
    </div>
  )
}

export default Contacts
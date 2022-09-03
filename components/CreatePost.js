import { useSession } from 'next-auth/react';
import React, { useRef, useState } from 'react'
import {HiOutlineVideoCamera} from "react-icons/hi"
import {IoMdPhotos} from "react-icons/io"
import {BsEmojiSmile} from "react-icons/bs"
import {RiDeleteBin6Line} from "react-icons/ri"


const CreatePost = () => {
const FACEBOOK_CLONE_ENDPOINT =""

    const [imageToPost, setImageToPost] = useState(null)
    const {data:session} = useSession();
    const inputRef = useRef(null);
    const hiddenFileInput = useRef(null);

    const handleClick = ()=>{
        hiddenFileInput.current.click();
    }

    const removeImage = () => {
        setImageToPost(null);
    }

    const addImageToPost = (e) => {
        const reader =  new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e)=>{
                setImageToPost(e.target.result)
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!inputRef.current.value) return;
        const formData = new FormData();
        formData.append("image", imageToPost)
        formData.append("post", inputRef.current.value)
        formData.append("name", session?.user.name);
        formData.append("email", session?.user.email);
        formData.append("profilePic", session.user.image)

        axios.post(FACEBOOK_CLONE_ENDPOINT, formData, {
            headers: {Accept: 'application/json'},
        })
        .then((response)=>{
            inputRef.current.value = "";
            removeImage()
        })
        .catch((error)=>{
            console.log(error);
        })
        // fetch("/api/posts", {
        //     method: "POST",
        //     body: formData
        // })
        // inputRef.current.value = "";
        // setImageToPost(null)
    }
    return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2">
        <div className="flex p-4 space-x-2 items-center">
            
               <form className="flex flex-1 ">
                   <input type="text"
                   ref={inputRef}
                   className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 p-4"
                   placeholder={`What's on your mind ${session?.user.name.split(" ")[0]} ?`} />
                   <button hidden onClick={handleSubmit}></button>
               </form>
        </div>
        {imageToPost && (
            <div
            onClick={removeImage}
            className="flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer">
                <img src={imageToPost} className="h-10 object-contain" alt="" />
                <RiDeleteBin6Line className="h-8 hover:text-red-600"/>
            </div>
        )}
        <div className="flex justify-evenly py-2">
            <div className="flex items-center space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
                <HiOutlineVideoCamera size={20} className="text-red-500"/>
                <p>Live Video</p>
            </div>

            <div
                onClick={handleClick}
                onChange={addImageToPost}
                className="flex items-center space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
                <IoMdPhotos size={20} className="text-green-500"/>
                <p>Photo/Video</p>
                <input type="file" ref={hiddenFileInput} hidden accept='image/*' />
            </div>

            <div className="flex items-center space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer">
                <BsEmojiSmile size={20} className="text-yellow-500"/>
                <p>Feeling/Activity</p>
            </div>
            
        </div>
    </div>
  )
}

export default CreatePost
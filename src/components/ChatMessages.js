import React from 'react'
import UserIcon from "../Svg/user_icon.svg";


const ChatMessages = ({userName,userComments}) => {
    
  return (
    <div>
        <div className='flex m-1 shadow-md dark:bg-black'>
            <img className="w-3 md:w-5 ml-2 h-12 py-2 " src={UserIcon}></img>
            <h1 className='w-20 text-sm md:text-lg  font-bold pt-3 md:pt-2  ml-3'>{userName}</h1>
            <p className='w-80 px-2 text-xs md:text-base  md:h-14 pt-2 '>{userComments}</p>
        </div>
    </div>
  )
}

export default ChatMessages
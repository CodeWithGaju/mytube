import React, { useEffect, useState } from 'react'
import UserIcon from "../Svg/user_icon.svg";


const ChatMessages = ({userName,userComments}) => {
    
  return (
    <div>
        <div className='flex m-1 shadow-md dark:bg-black'>
            <img className="w-5 ml-2 h-12 py-2 " src={UserIcon}></img>
            <h1 className='w-20 text-lg  font-bold pt-2  ml-3'>{userName}</h1>
            <p className='w-80 px-2  h-14 pt-2 '>{userComments}</p>
        </div>
    </div>
  )
}

export default ChatMessages
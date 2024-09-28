import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toogleMenu} from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { addChats } from '../utils/chatSlice';

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const [ChatInput,setChatInput] = useState();
  const toogleSideBar = useSelector((store)=>store.app.isMenuOpen);
  const style = toogleSideBar ? "w-[300px] md:w-[1300px] md:flex " : "w-[380px] md:w-[1535px] md:flex ";
  const frameStyle = toogleSideBar ? "w-[320px] h-[150px]  md:w-[900px] md:h-[500px] mt-2 " : "w-[350px] md:w-[1050px] md:h-[500px] md:ml-14 mt-2 mx-auto";
  const chatStyle = toogleSideBar ? "w-[280px] md:w-[400px] md:ml-4  " : "w-[380px] md:w-[450px] md:ml-4 mt-2 ";

  useEffect(()=>{
     dispatch(toogleMenu())
  },[]);

  const handleChatSubmit = () => {
      dispatch(addChats({name:"Gajanand",comment:ChatInput}));
      setChatInput('');
  }

  return (
    <div className={style}>
      <div className='md:h-screen overflow-y-scroll no-scrollbar dark:bg-black dark:text-white'>
         {/* video Section */}
         <div className=' md:h-2/3'>
         <iframe className={' px-2 md:px-5 rounded-lg '+frameStyle}  src={"https://www.youtube.com/embed/"+searchParam.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         </div>
         {/* Comment Section */}
         <CommentsContainer/>
      </div>
      <div className=' md:w-1/3 dark:bg-black dark:bg-opacity-90'>
      <div className='head'>
      {/* <ButtonList/> */}
      </div>
     
      <div className={chatStyle}>
           <LiveChat/>
           <form  onSubmit={(e)=>e.preventDefault()} className='h-12 px-2 py-2 w-full border border-gray-200'>
               <input type="text" placeholder='Chat' className='h-6 md:h-8 px-2 ml-5 md:ml-10 md:text-base text-sm py-1 w-2/3 shadow-lg rounded-l-full bg-gray-100 dark:bg-opacity-20' onChange={(e)=>setChatInput(e.target.value)} value={ChatInput} />
               <button className=' px-3  shadow-xl md:py-1 ml-0.5  h-6 md:h-8 rounded-r-lg bg-gray-300 dark:bg-opacity-60 text-sm justify-center md:text-base' onClick={handleChatSubmit}>Send</button>

            </form>
      </div>
      </div>
    </div>
  )
}

export default WatchPage
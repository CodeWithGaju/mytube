import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu, toogleMenu} from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import ButtonList from './ButtonList';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { addChats } from '../utils/chatSlice';

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const [ChatInput,setChatInput] = useState();
  const toogleSideBar = useSelector((store)=>store.app.isMenuOpen);
  const style = toogleSideBar ? "w-[1300px] flex " : "w-[1535px] flex ";
  const frameStyle = toogleSideBar ? "w-[900px] mt-2 " : "w-[1050px] ml-14 mt-2";
  const chatStyle = toogleSideBar ? "w-[400px] ml-4  " : "w-[450px] ml-4 mt-2 ";

  useEffect(()=>{
     dispatch(toogleMenu())
  },[]);

  const handleChatSubmit = () => {
      dispatch(addChats({name:"Gajanand",comment:ChatInput}));
      setChatInput('');
  }

  return (
    <div className={style}>
      <div className='h-screen overflow-y-scroll no-scrollbar dark:bg-black dark:text-white'>
         {/* video Section */}
         <div className=' h-2/3 '>
         <iframe className={' px-5 rounded-lg '+frameStyle} height="500" src={"https://www.youtube.com/embed/"+searchParam.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         </div>
         {/* Comment Section */}
         <CommentsContainer/>
      </div>
      <div className=' w-1/3 dark:bg-black dark:bg-opacity-90'>
      <div className='head'>
      {/* <ButtonList/> */}
      </div>
      <div className={chatStyle}>
           <LiveChat/>
           <form  onSubmit={(e)=>e.preventDefault()} className='h-12 px-2 py-2 w-full border border-gray-200'>
               <input type="text" placeholder='Chat' className='h-8 px-2 ml-10 py-1 w-2/3 shadow-lg rounded-l-full bg-gray-100 dark:bg-opacity-20' onChange={(e)=>setChatInput(e.target.value)} value={ChatInput} />
               <button className=' px-3  shadow-xl py-1 ml-0.5  h-8 rounded-r-lg bg-gray-300 dark:bg-opacity-60 ' onClick={handleChatSubmit}>Send</button>

            </form>
      </div>
      </div>
    </div>
  )
}

export default WatchPage
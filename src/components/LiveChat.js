import ChatMessages from './ChatMessages'
import { useDispatch, useSelector } from 'react-redux'
import { getGeneratedChatMessage, getGeneratedName } from '../utils/helper';
import { addChats } from '../utils/chatSlice';
import { useEffect } from 'react';

const LiveChat = () => {
  const liveChats = useSelector((store)=>store.chats.chatMessage);
  const dispatch = useDispatch();
  
    const generateChat = () =>{
      dispatch(addChats(({name:getGeneratedName(),comment:getGeneratedChatMessage()})));
    }

    useEffect(()=>{
      const timer = setInterval(()=>{
        generateChat();
      },2000)
      return () => clearInterval(timer); 
   },[])
  return (
    <div>
       <div className='px-2 py-2 h-[500px] border dark:bg-black dark:text-white border-gray-100 shadow-lg overflow-y-scroll no-scrollbar rounded-lg  flex flex-col-reverse'>
        {liveChats.map((chats)=><ChatMessages userName={chats.name} userComments={chats.comment} />)}
       </div>
    </div>
  )
}

export default LiveChat
import React, { useState } from 'react'
import WhitesUser from '../Svg/whiteUser_Icon.svg'
import blackUser from '../Svg/blackUser_Icon.svg'
import {commentsData} from '../utils/commentsData';
import Down_Arrow from "../Svg/Down_Arrow.svg";
import { useSelector } from 'react-redux';
const CommentsContainer = () => {
   const [showComments,setShowComments] = useState(false);
   const isDarkMode = useSelector((store)=>store.app.IsDarkmode);
//    const [createComment,setCreateComment] = useState(" ");
    
//    const handleAddComment = () => {
//         commentsData.unshift({name:"unknown",comments:createComment});
//      }
    
    const Comment = ({comData,condition})=>{
       if(comData===undefined) return;  
        return(
        <div className='hover:border dark:bg-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-200  dark:hover:bg-opacity-20 ml-8 md:ml-28 mt-1 px-1 py-1 rounded-lg'>
        <div className='flex  md:w-2/3'>
        <img className="w-4 md:w-7 ml-2 dark:w-auto dark:h-auto" src={isDarkMode ? WhitesUser : blackUser}></img>
        <h2 className='px-2 py-3 ml-2 text-sm font-bold md:text-lg '>{comData.name}</h2>
        </div>
        <p className='ml-8 px-3 text-xs -mt-2'>{comData.comments}</p>
        
        {comData.replies==undefined ?null:(comData.replies.length === 1 && <button onClick={()=>
        
        showComments ? setShowComments(false) : setShowComments(true)
        
        } className='ml-10 px-3 mt-2 flex'>
        <img className="w-2 md:w-3 mt-2 " src={Down_Arrow}/> <p className='px-1 text-sm'>replies</p>
    </button>)}
        
    
        
        {showComments && (comData.replies==undefined ? null :( comData.replies.length>=1 ?  <CommentList commentsListData={comData.replies} condition={showComments}/> : console.log("something went wrong",showComments)))}
       
     </div>
        );
    }

    const CommentList = ({commentsListData,condition}) => {
        // if(commentsListData)
       
     return  commentsListData.map((data,index)=>(<Comment key={index} comData={data} condition={condition}/>));
           
    }
    

  return (
    <div className=' h-96 mt-5'>
            <h1 className='px-3 md:px-24 py-2 md:py-5 text-xl md:text-2xl font-bold' >Comments</h1>
            {/* <input className='ml-24 w-2/3 border border-black px-3 py-1' onChange={(e)=>setCreateComment(e.target.value)} value={createComment}/><button className='bg-gray-600 text-white px-3 py-1' onClick={handleAddComment()}>Comment</button> */}
            <CommentList commentsListData={commentsData}/>
           
         </div>
  )
}

export default CommentsContainer
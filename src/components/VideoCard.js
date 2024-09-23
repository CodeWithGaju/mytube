import React from 'react'
import { useSelector } from 'react-redux';

const VideoCard = ({videoItems}) => {
  const toogleSideBar = useSelector((store)=>store.app.isMenuOpen);
   const {id,contentDetails,snippet,statistics} = videoItems;
const {thumbnails,title,channelTitle} = snippet;

  return (
    toogleSideBar ? <div className=' p-2 md:ml-10 h-auto w-[300px] md:w-96  hover:bg-gray-200 dark:hover:bg-opacity-20  hover:shadow-md'>
    <img  className="w-full  rounded-lg" src={thumbnails.medium.url}/>
    <ul>
      <li className='md:font-semibold text-sm md:text-base'>{title}</li>
      <li className='py-1 font-light text-xs md:text-sm'>{channelTitle}</li>
      <li className='py-1 font-light text-xs md:text-sm'>{statistics.viewCount+" views"}</li>
    </ul>
  </div> : <div className=' px-2 ml-4 mt-2  h-auto w-[360px]  rounded-lg hover:bg-gray-200 dark:hover:bg-opacity-20 hover:shadow-md'>
    <img  className="h-[200px] w-[350px] object-contain rounded-lg" src={thumbnails.medium.url}/>
    <ul className='px-2'>
      <li className='md:font-semibold text-sm md:text-base'>{title}</li>
      <li className='py-1 font-light text-xs md:text-sm'>{channelTitle}</li>
      <li className='py-1 font-light text-xs md:text-sm'>{statistics.viewCount+" views"}</li>
    </ul>
  </div> 
    
  )
}

export default VideoCard
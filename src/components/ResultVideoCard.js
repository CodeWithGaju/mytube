import React from 'react'
import { useSelector } from 'react-redux';


const ResultVideoCard = ({videoItems}) => {
  const toogleSideBar = useSelector((store)=>store.app.isMenuOpen);
   const style = toogleSideBar ? "w-[300px] md:w-[1300px]" : "mx-auto md:w-[1535px]"

  if(videoItems==undefined) return;
  
   const {id,contentDetails,snippet,statistics} = videoItems;
const {thumbnails,title,channelTitle} = snippet;

  return (
    <div className={' flex mt-2 ml-10 m-3 rounded-r-md bg-gray-100 hover:dark:bg-opacity-50 dark:bg-gray- dark:bg-opacity-20 hover:bg-gray-200'+style}>
   <div className='h-[120px] md:h-[240px] w-[230px] md:w-[560px] '>
    {/* <img  className=" w- rounded-lg" width="500" height={} src={thumbnails.high.url}/> */}
    <iframe className='w-[120px] md:w-full h-[120px] md:h-full rounded-l-md' src={"https://www.youtube.com/embed/"+id.videoId+"?si=-bH17YZg5C_VRjvt"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    <div className='px-1 md:px-5 py-1  dark:bg-opacity-5 hover:bg-gray-200  dark:text-white h-[120px] md:h-[240px] md:w-8/12 rounded-md'>
      <p className=' font-bold text-xs md:text-xl'>{title}</p>
      <h2 className='py-1 font-light text-xs md:text-sm'>{channelTitle}</h2>
      {/* <li className='py-1 font-light text-sm'>{statistics.viewCount+" views"}</li> */}
    </div>
    </div>
    
  )
}

export default ResultVideoCard
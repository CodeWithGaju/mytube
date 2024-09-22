import React from 'react'


const ResultVideoCard = ({videoItems}) => {
  if(videoItems==undefined) return;
  
   const {id,contentDetails,snippet,statistics} = videoItems;
const {thumbnails,title,channelTitle} = snippet;

  return (
    <div className=' flex mt-2 ml-10 m-3 rounded-r-md bg-gray-100 hover:dark:bg-opacity-50 dark:bg-gray- dark:bg-opacity-20 hover:bg-gray-200'>
   <div className=' h-[240px] w-[460px] '>
    {/* <img  className=" w- rounded-lg" width="500" height={} src={thumbnails.high.url}/> */}
    <iframe className='w-full h-full rounded-l-md' src={"https://www.youtube.com/embed/"+id.videoId+"?si=-bH17YZg5C_VRjvt"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    <div className='px-5 py-1  dark:bg-opacity-20 dark:text-white h-[240px] w-7/12 rounded-md'>
      <p className='font-bold text-xl'>{title}</p>
      <h2 className='py-1 font-light text-sm'>{channelTitle}</h2>
      {/* <li className='py-1 font-light text-sm'>{statistics.viewCount+" views"}</li> */}
    </div>
    </div>
    
  )
}

export default ResultVideoCard
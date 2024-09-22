import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addHomePageVideos } from '../utils/videosDataSlice';

const usePopularVideos = () => {
    const [popularVideos,setpopularVideos] = useState();
    const dispatch = useDispatch();
    const homePageVideos = useSelector((store)=>store.videosData.homePageVideos);
   
 const fetchPopularVideos = async() =>{
   try{
     const data = await fetch(YOUTUBE_VIDEO_API);
     const json = await data.json();
    dispatch(addHomePageVideos(json.items));
    // console.log("kya hua kar di api call")
   }
   catch(err){
    console.log(err.message);
   } 
}
useEffect(()=>{
  homePageVideos.length=== 0 && fetchPopularVideos();
},[])
  return popularVideos;
}

export default usePopularVideos;
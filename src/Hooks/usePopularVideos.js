import  { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addHomePageVideos } from '../utils/videosDataSlice';

const usePopularVideos = () => {
    const [popularVideos,setpopularVideos] = useState();
    const [categoryId,setCategoryId] = useState(); 
    const dispatch = useDispatch();
    const homePageVideos = useSelector((store)=>store.videosData.homePageVideos);
    const mainCategory = useSelector((store)=>store.videosData.mainCategory);
   
 const fetchPopularVideos = async() =>{
   try{
     const data = await fetch(YOUTUBE_VIDEO_API+mainCategory);
     const json = await data.json();
    dispatch(addHomePageVideos(json.items));
   }
   catch(err){
    console.log(err.message);
   } 

}
useEffect(()=>{
fetchPopularVideos();
},[mainCategory])
  return popularVideos;
}

export default usePopularVideos;
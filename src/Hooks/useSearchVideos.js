import React, { memo, useEffect, useState } from 'react'
import { SEARCH_VIDEOS_API} from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addSearchVideos } from '../utils/videosDataSlice';
import { useNavigate} from 'react-router-dom';

const useSearchVideos = (query) => {
  const [search_videos,setSearchVideos] = useState("");
  const dispatch = useDispatch();
  const fetchSearchData = async() =>{
    if(search_videos!= ""){
    try{
    const data = await fetch(SEARCH_VIDEOS_API+search_videos);//inside search video there is query by which we search for specific data in search box
    const json = await data.json();
    console.log(json);
    dispatch(addSearchVideos(json.items));
    
    }catch(err){
        console.log(err);
     }
    }
  }
  useEffect(()=>{
    fetchSearchData();
  },[search_videos])
  return [search_videos,setSearchVideos];
}

export default useSearchVideos
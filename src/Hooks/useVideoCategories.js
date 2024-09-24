import  { useEffect, useState } from 'react'
import { VideoCategories } from '../utils/constants'
import { useDispatch } from 'react-redux';
import {  addVideoCategories } from '../utils/videosDataSlice';

const useVideCategories = () => {
 const [videoCategories,setVideoCategories] = useState();
    const dispatch = useDispatch();

const fetchvideoCategory = async () =>{
  const data = await fetch(VideoCategories);
  const json = await data.json();
  dispatch(addVideoCategories(json.items))
}
useEffect(()=>{
  fetchvideoCategory();
},[])
  return videoCategories;
}

export default useVideCategories;
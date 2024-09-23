import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ResultVideoCard from './ResultVideoCard';
import { addSearchVideos } from '../utils/videosDataSlice';

const ResultVideoContainer = () => {
  const searchVideos = useSelector((store)=>store.videosData.searchVideo);
  const dispatch = useDispatch();
useEffect(()=>{
  return ()=>{
    dispatch(addSearchVideos(""));
  }
},[])

 
 if(searchVideos.length===0) return;

  return (
    <div className='h-96 dark:bg-black w-auto md:w-[1300px]'>
      {searchVideos.map((video)=> <Link to={"/watch?v="+video.id.videoId}  key={video.id}><ResultVideoCard videoItems={video} /></Link>)}
    </div>
  )
}

export default ResultVideoContainer;
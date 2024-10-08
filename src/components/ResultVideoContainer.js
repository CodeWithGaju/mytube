import React, { useEffect } from 'react'
import usePopularVideos from '../Hooks/usePopularVideos'
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
    <div className='h-96 dark:bg-black w-[1300]'>
      {searchVideos.map((video)=> <Link to={"/watch?v="+video.id.videoId}  key={video.id}><ResultVideoCard videoItems={video} /></Link>)}
        {/* <VideoCard thumbnail={thumbnails.medium} /> */}
    </div>
  )
}

export default ResultVideoContainer;
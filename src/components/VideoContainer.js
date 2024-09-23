import React from 'react'
import VideoCard from './VideoCard'
import usePopularVideos from '../Hooks/usePopularVideos'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
 usePopularVideos();
 const homePageVideos = useSelector((store)=>store.videosData.homePageVideos);
 if(homePageVideos.length===0) return;

  return (
    <div className=' flex flex-wrap px-1 dark:text-white  h-screen w-screen overflow-y-scroll '>
      {homePageVideos.map((video)=> <Link to={"/watch?v="+video.id}  key={video.id}><VideoCard videoItems={video} /></Link>)}

    </div>
  )
}

export default VideoContainer
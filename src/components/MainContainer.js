import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const toogleSideBar = useSelector((store)=>store.app.isMenuOpen);
  const style = toogleSideBar ? "w-[1300px] dark:bg-black " : "w-[1535px] dark:bg-black "
  return (
   
    <div className={style}>
        <ButtonList/>
        <VideoContainer/>
    </div>
   
  )
}

export default MainContainer;

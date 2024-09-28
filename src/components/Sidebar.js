import React from 'react'
import black_home from "../Svg/black_Home.svg"
import white_home from "../Svg/white_Home.svg"
import WhiteSubcription from "../Svg/whiteSubscription.svg"
import BlackSubscription from "../Svg/blackSubcription.svg"
import transparent_shorts from "../Svg/transparent_shorts_icon.svg"
import black_shorts from "../Svg/black_shorts.svg"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMainCategory } from '../utils/videosDataSlice'


const Sidebar = () => {
 const isDarkMode = useSelector((store)=>store.app.IsDarkmode);
 const dispatch = useDispatch();
 const videoCategories = useSelector((store)=>store.videosData.videoCategories)
 const handleButton = (id) =>{
    dispatch(setMainCategory(parseInt(id)));
 }
  return (
    <div className='text-center h-screen  bg-white dark:bg-black dark:text-white w-[100px] md:w-[250px] z-0 overflow-y-scroll overflow-x-hidden no-scrollbar'>
         <div>
            <ul className='border-b border-gray-200 dark:border-opacity-20 md:m-2 overflow-hidden'>
            <Link to={"/"} > <li  className='p-2 md:mx-2 md:text-lg text-xs font-bold rounded-md border-none bg-gray-200 dark:bg-opacity-20 flex justify-evenly'> <img className=' w-3 md:w-6' src={isDarkMode?white_home:black_home} alt='home_logo'/>
                <h1 className='' >Home</h1></li></Link>
                <li className='p-2 md:mx-2 text-xs md:text-lg font-bold rounded-md  hover:bg-gray-200 hover:dark:bg-opacity-20 flex justify-evenly'><img className='w-3 md:w-6 dark:md:w-5' src={isDarkMode ? transparent_shorts : black_shorts  }  alt='home_logo'/>
                <h1>Shorts</h1></li>
                <li className='p-2 md:mx-2 text-xs md:text-lg font-bold rounded-md  hover:bg-gray-200 hover:dark:bg-opacity-20 flex justify-evenly'> <img className='w-3 md:w-6 md:ml-6 object-fill dark:w-8 dark:md:w-auto dark:-mt-1 dark:md:mt-1 dark:-ml-2 dark:md:ml-2 dark:py-0' src={isDarkMode ? WhiteSubcription : BlackSubscription} alt='home_logo'/>
                <h1 className='ml-2 dark:md:mt-3 dark:-ml-2 dark:md:-ml-2'>Subscription</h1></li>
            </ul>
         </div>
         <div>
            <h1 className='text-left p-2  text-xs md:pl-10 md:text-lg font-bold  hover:bg-gray-200 hover:dark:bg-opacity-20'>You {">"}</h1>
         <ul className='border-b md:m-3   border-gray-200  dark:border-opacity-20 '>
                <li className='p-2 md:text-lg text-xs  font-bold rounded-md  hover:bg-gray-200  hover:dark:bg-opacity-20'>Your Channel</li>
                <li className='p-2 md:text-lg text-xs font-medium rounded-md  hover:bg-gray-200  hover:dark:bg-opacity-20'>History</li>
                <li className='p-2 md:text-lg text-xs font-medium rounded-md  hover:bg-gray-200  hover:dark:bg-opacity-20'>Playlists</li>
                <li className='p-2 md:text-lg text-xs font-medium rounded-md  hover:bg-gray-200  hover:dark:bg-opacity-20'>Your Videos</li>
                <li className='p-2 md:text-lg text-xs font-medium rounded-md  hover:bg-gray-200  hover:dark:bg-opacity-20'>Watch Later</li>
                <li className='p-2 md:text-lg text-xs font-medium rounded-md  hover:bg-gray-200  hover:dark:bg-opacity-20'>Like Videos</li>
            </ul>
         </div>
         <div>
            <h1 className='text-left p-2 md:pl-10 text-xs md:text-lg font-bold  hover:bg-gray-200  hover:dark:bg-opacity-20'>Explore</h1>
         <ul className='border-b md:m-3 border-gray-200  dark:border-opacity-20'>
         {videoCategories.map((category)=> <li key={category.id}  className='p-2 md:text-lg text-xs md:font-medium rounded-md  hover:bg-gray-200 text-center hover:dark:bg-opacity-20'><button className='text-center' onClick={()=>handleButton(category.id)}>{category.snippet.title}</button></li>)}
            </ul>
         </div>
         
    </div>
  )
}

export default Sidebar
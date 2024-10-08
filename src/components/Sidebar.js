import React, { useEffect, useState } from 'react'
import black_home from "../Svg/black_Home.svg"
import white_home from "../Svg/white_Home.svg"
import WhiteSubcription from "../Svg/whiteSubscription.svg"
import BlackSubscription from "../Svg/blackSubcription.svg"
import transparent_shorts from "../Svg/transparent_shorts_icon.svg"
import black_shorts from "../Svg/black_shorts.svg"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Sidebar = () => {
 const isDarkMode = useSelector((store)=>store.app.IsDarkmode);
  return (
    <div className='text-center h-screen  bg-white dark:bg-black dark:text-white  w-[250px] z-0 overflow-y-scroll '>
         <div>
            <ul className='border-b border-gray-200 dark:border-opacity-20'>
            <Link to={"/"} > <li  className='p-2 mx-2 text-lg font-bold rounded-md border-none bg-gray-200 dark:bg-opacity-20 flex justify-evenly'> <img className=' w-6' src={isDarkMode?white_home:black_home} alt='home_logo'/>
                <h1 className='' >Home</h1></li></Link>
                <li className='p-2 mx-2 text-lg font-bold rounded-md  hover:bg-gray-200 hover:dark:bg-opacity-20 flex justify-evenly'><img className=' w-6 dark:w-5' src={isDarkMode ? transparent_shorts : black_shorts  }  alt='home_logo'/>
                <h1>Shorts</h1></li>
                <li className='p-2 mx-2 text-lg font-bold rounded-md  hover:bg-gray-200 hover:dark:bg-opacity-20 flex justify-evenly'> <img className=' w-6 ml-6 object-fill dark:w-auto dark:mt-1 dark:ml-2 dark:py-0' src={isDarkMode ? WhiteSubcription : BlackSubscription} alt='home_logo'/>
                <h1 className='ml-2 dark:mt-3 dark:-ml-2'>Subscription</h1></li>
            </ul>
         </div>
         <div>
            <h1 className='text-left p-2 pl-10 text-lg font-bold  hover:bg-gray-200 hover:dark:bg-opacity-20'>You {">"}</h1>
         <ul className='border-b mx-2 border-gray-200  dark:border-opacity-20'>
                <li className='p-2 text-lg font-bold rounded-md  hover:bg-gray-200  hover:dark:bg-opacity-20'>Your Channel</li>
                <li className='p-2 text-lg font-medium rounded-md  hover:bg-gray-200  hover:dark:bg-opacity-20'>History</li>
                <li className='p-2 text-lg font-medium rounded-md  hover:bg-gray-200  hover:dark:bg-opacity-20'>Playlists</li>
                <li className='p-2 text-lg font-medium rounded-md  hover:bg-gray-200  hover:dark:bg-opacity-20'>Your Videos</li>
                <li className='p-2 text-lg font-medium rounded-md  hover:bg-gray-200  hover:dark:bg-opacity-20'>Watch Later</li>
                <li className='p-2 text-lg font-medium rounded-md  hover:bg-gray-200  hover:dark:bg-opacity-20'>Like Videos</li>
            </ul>
         </div>
         <div>
            <h1 className='text-left p-2 pl-10 text-lg font-bold  hover:bg-gray-200  hover:dark:bg-opacity-20'>Explore</h1>
         <ul className='border-b mx-2 border-gray-200  dark:border-opacity-20'>
                <li className='p-2 text-lg font-bold rounded-md  hover:bg-gray-200  hover:dark:bg-opacity-20'>Tranding</li>
                <li className='p-2 text-lg font-medium rounded-md  hover:bg-gray-200  hover:dark:bg-opacity-20'>Music</li>
                <li className='p-2 text-lg font-medium rounded-md  hover:bg-gray-200  hover:dark:bg-opacity-20'>Movie</li>
                <li className='p-2 text-lg font-medium rounded-md  hover:bg-gray-200  hover:dark:bg-opacity-20'>Lives</li>
                <li className='p-2 text-lg font-medium rounded-md  hover:bg-gray-200  hover:dark:bg-opacity-20'>Gaming</li>
                <li className='p-2 text-lg font-medium rounded-md  hover:bg-gray-200  hover:dark:bg-opacity-20'>News</li>
                <li className='p-2 text-lg font-medium rounded-md  hover:bg-gray-200  hover:dark:bg-opacity-20'>Sports</li>
                <li className='p-2 text-lg font-medium rounded-md  hover:bg-gray-200  hover:dark:bg-opacity-20'>Courses</li>
                <li className='p-2 text-lg font-medium rounded-md  hover:bg-gray-200  hover:dark:bg-opacity-20'>Fashion & Beauty</li>
                <li className='p-2 text-lg font-medium rounded-md  hover:bg-gray-200  hover:dark:bg-opacity-20'>Podcasts</li>
            </ul>
         </div>
         
    </div>
  )
}

export default Sidebar
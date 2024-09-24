import React, { useEffect } from 'react'
import useVideCategories from '../Hooks/useVideoCategories';
import { useDispatch, useSelector } from 'react-redux';
import { setMainCategory } from '../utils/videosDataSlice';
import usePopularVideos from '../Hooks/usePopularVideos';


const ButtonList = () => {
    useVideCategories();
    // const [categoryReload,]
    const dispatch = useDispatch();
    const videoCategories = useSelector((store)=>store.videosData.videoCategories)
    const handleButton = (id) =>{
       dispatch(setMainCategory(parseInt(id)));
    }
   useEffect(()=>{
    
   },[])
    const btn_list = ["All","Music","Weight Training","Comdey Clubs","Dramedy","Motor oils","Tamil Cinema","Thrillers","Live","Suzuki","Presentation","Asian Music"];
    return (
    <div className="w-full">
        <ul className='flex  overflow-scroll no-scrollbar  m-2'>
        {videoCategories.map((category)=> <li key={category.id}  className='md:mt-2'><button className='bg-gray-200  text-xs md:text-base w-24 md:w-40  md:px-2 py-1 md:py-2 rounded-lg ml-2 dark:text-white dark:bg-opacity-20' onClick={()=>handleButton(category.id)}>{category.snippet.title}</button></li>)}
        </ul>
    </div>
  )
}

export default ButtonList
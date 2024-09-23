import { useDispatch, useSelector } from 'react-redux'
import { setDarkMode, toogleMenu } from '../utils/appSlice'
import { useEffect, useState } from 'react'
import { SEARCH_SUGGESTION_API } from '../utils/constants'
import  { Search_cache } from '../utils/searchSlice'
import whiteSearch from '../Svg/whiteSearch.svg'
import blackSearch from '../Svg/blackSearch.svg'
import useSearchVideos from '../Hooks/useSearchVideos'
import { Link} from 'react-router-dom'
import BlackYouTube_logo from '../Svg/BlackYouTube_logo.svg'
import whiteYoutube_logo from "../Svg/WhiteYouTube_logo.svg"
import Sun from '../Svg/sun.svg'
import Moon from '../Svg/moon.svg'
import blackMenu_icon from '../Svg/blackMenu_icon.svg'
import whiteMenu_icon from '../Svg/whiteMenu_icon.svg'
import blackUser_icon from '../Svg/blackUser_Icon.svg'
import whiteUser_icon from '../Svg/whiteUser_Icon.svg'

const Header = () => {

  const dispatch = useDispatch();
  const [search_video,setSearchVideos] =  useSearchVideos("");
  const [search_suggestions,setSearchSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);
  const [searchQuery,setSearchQuery] = useState("");
  const cache_search = useSelector((store)=>store.search);
  const isDarkMode = useSelector((store)=>store.app.IsDarkmode);

  const [isDark,setIsDark] = useState(JSON.parse(localStorage.getItem('isDark')));
  if(isDark){
    document.documentElement.classList.add("dark");
    
    dispatch(setDarkMode(true))
   }
   else{
    document.documentElement.classList.remove("dark");
    dispatch(setDarkMode(false))
   }
   
 const get_Suggestions = async() => {
      const data = await fetch(SEARCH_SUGGESTION_API+searchQuery);
      const json = await data.json();
      setSearchSuggestions(json[1]);
      dispatch(Search_cache({
        [searchQuery]:json[1]}));
 }
  useEffect(()=>{

    if(showSuggestions){
     const timer = setTimeout(()=>{
      if(cache_search[searchQuery]){
        setSearchSuggestions(cache_search[searchQuery]);
      }
      else{
       get_Suggestions();
      }
     },200);

     return ()=> clearTimeout(timer);
    }
},[searchQuery])

const handleSearch = (search) =>{

   setSearchQuery(search)
   setShowSuggestions(false)
}
  const handleSidebar = () => {
       dispatch(toogleMenu());
  }
  const getVideoResult = () => {
      setSearchVideos(searchQuery);
      setSearchQuery("");
  }
  const handleTheme = () =>{
    localStorage.setItem('isDark', !isDark)
    setIsDark(!isDark);
  }
    return(
        <div className="bg-white dark:bg-black  md:h-auto  grid grid-flow-col px-2 md:px-5 md:py-2 shadow-lg" onDoubleClick={()=>setShowSuggestions(false)}>
            <div className="flex md:px-5 col-span-3 md:col-span-1">
                <img onClick={handleSidebar} alt="Hemburger_icon" className="w-4 md:w-5 h-14 md:h-8 dark:-mt md:mt-4" src={isDarkMode ? whiteMenu_icon :blackMenu_icon}/>
              
                <img alt="youtube_icon" className="h-14 md:h-16 w-32 md:ml-2" src={isDarkMode ? whiteYoutube_logo :BlackYouTube_logo}/>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="col-span-3 md:col-span-10 px-2 md:px-5 py-4  md:center ml-2 md:ml-24" >
              <input onFocus={()=>setShowSuggestions(true)}  onChange={(e)=>{setSearchQuery(e.target.value)}} value={searchQuery} className=" md:h-10  px-2 md:px-5 text-sm md:text-base border rounded-l-full border-gray-300 text-black dark:bg-black dark:text-white dark:border-opacity-50 w-7/12 md:w-8/12" placeholder="Search" type="text "/>
             
             <Link to={"/result"}><button onClick={getVideoResult} className="md:h-10 px-2 md:px-3 py-[6px] md:py-3 text-center rounded-r-full  bg-gray-200  dark:bg-black dark:border  w-auto dark:border-gray-50 dark:border-opacity-50 "> <img className="w-[10px] md:w-3.5 h-auto dark:" src={isDarkMode ? whiteSearch : blackSearch}/></button></Link>
              
              {showSuggestions && <div className='absolute bg-white dark:bg-black dark:text-white text-xs md:text-base dark:bg-opacity-80  w-[40rem] rounded-lg shadow-lg dark:shadow-sm dark:shadow-white'>
                <ul>
                {search_suggestions.map((search)=><><li  onClick={()=>handleSearch(search)}   className='px-2 py-1 flex m-1'>
                  <img className="w-3 md:w-5 " src={isDarkMode ? whiteSearch :blackSearch}/>
                  <a className='px-5 cursor-pointer' >{search}</a>
                </li></>)}
                 </ul>
              </div>}
            </form>
            <div className="grid col-span-3 md:col-span-1 py-5  md:px-0 md:py-4 ">
              <img alt="user_icon" className="h-5  md:h-8 md:w-8  dark:md:w-auto  dark:h-8 dark:-mt-2 dark:md:h-14 dark:md:-mt-3 dark:md:ml-4" src={isDarkMode ? whiteUser_icon :blackUser_icon}/>
             
            
            </div>
            <div className="grid col-span-3 md:col-span-1 pl-2 pr-9 h-1 py-5 ">
               
                   <input type="checkbox" class="checkbox" id="checkbox" onChange={handleTheme}/>
                  <label for="checkbox" class="checkbox-label bg-black  dark:bg-slate-400">
                     
                  <i><img class="fas fa-moon md:w-8 text-center h-2 md:h-5 rounded-full bg-orange-400" src={Sun}/></i>
                  <i><img class="fas fa-sun  md:w-8 text-center h-2 md:h-5 rounded-full bg-white" src={Moon}/></i>
                  <span class="ball bg-white text-[8px] px-[1px] md:text-sm">{isDark ? "on" : "off"}</span>
                   </label>
                   
               </div>
        </div>
    )
}
export default Header;

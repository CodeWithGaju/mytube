import { useDispatch, useSelector } from 'react-redux'
import { setDarkMode, toogleMenu } from '../utils/appSlice'
import { useEffect, useState } from 'react'
import { SEARCH_SUGGESTION_API } from '../utils/constants'
import  { Search_cache } from '../utils/searchSlice'
import whiteSearch from '../Svg/whiteSearch.svg'
import blackSearch from '../Svg/blackSearch.svg'
import useSearchVideos from '../Hooks/useSearchVideos'
import { Link, Navigate } from 'react-router-dom'
import BlackYouTube_logo from '../Svg/BlackYouTube_logo.svg'
import whiteYoutube_logo from "../Svg/WhiteYouTube_logo.svg"
import Sun from '../Svg/sun.svg'
import Moon from '../Svg/moon.svg'
import blackMenu_icon from '../Svg/blackMenu_icon.svg'
import whiteMenu_icon from '../Svg/whiteMenu_icon.svg'
import blackUser_icon from '../Svg/blackUser_Icon.svg'
import whiteUser_icon from '../Svg/whiteUser_Icon.svg'

const Header = () => {
  // useSearchVideos();
  const dispatch = useDispatch();
  const [search_video,setSearchVideos] =  useSearchVideos("");
  const [search_suggestions,setSearchSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);
  const [searchQuery,setSearchQuery] = useState("");
  const cache_search = useSelector((store)=>store.search);
  const isDarkMode = useSelector((store)=>store.app.IsDarkmode);
  // const localStorage = useL
  const [isDark,setIsDark] = useState(JSON.parse(localStorage.getItem('isDark')));
  // console.log( JSON.parse(localStorage.getItem('isDark')))
  if(isDark){
    document.documentElement.classList.add("dark");
    
    dispatch(setDarkMode(true))
   }
   else{
    document.documentElement.classList.remove("dark");
    dispatch(setDarkMode(false))
   }
   

  const [theme,setTheme] = useState("light");

  // console.log("kuch kar bhai iska");
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
},[searchQuery,theme])

const handleSearch = (search) =>{

   setSearchQuery(search)
   setShowSuggestions(false)

  //  console.log("kya hua")
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
    // setTheme(theme === "dark" ? "light" : "dark");
    setIsDark(!isDark);

    // dispatch(setDarkMode(isDark ? false: true))
  }
    return(
        <div className="bg-white dark:bg-black  grid grid-flow-col px-5 py-2 shadow-lg" onDoubleClick={()=>setShowSuggestions(false)}>
            <div className="flex px-5 col-span-1">
                <img onClick={handleSidebar} alt="Hemburger_icon" className="h-8 mt-4" src={isDarkMode ? whiteMenu_icon :blackMenu_icon}/>
                {/* <img alt="youtube_icon" className="h-16 ml-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Uru4syYf1tPEtG-nWC2NtC4HIMTUNuHU8jtDaYLGc9xkIv_iA-nQ&s"/> */}
                <img alt="youtube_icon" className="h-16 w-32 ml-2" src={isDarkMode ? whiteYoutube_logo :BlackYouTube_logo}/>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="col-span-10 px-5 py-3 center ml-24" >
              <input onFocus={()=>setShowSuggestions(true)}  onChange={(e)=>{setSearchQuery(e.target.value)}} value={searchQuery} className="h-10 px-5  border rounded-l-full border-gray-300 text-black dark:bg-black dark:text-white dark:border-opacity-50 w-8/12" placeholder="Search" type="text "/>
             
             <Link to={"/result"}><button onClick={getVideoResult} className="h-10 px-3 py-3 text-center rounded-r-full  bg-gray-200  dark:bg-black dark:border  w-auto dark:border-gray-50 dark:border-opacity-50 "> <img className="w-3.5 dark:" src={isDarkMode ? whiteSearch : blackSearch}/></button></Link>
              {showSuggestions && <div className='absolute bg-white w-[40rem] rounded-lg shadow-lg'>
                <ul>
                {search_suggestions.map((search)=><><li  onClick={()=>handleSearch(search)}   className='px-2 py-1 flex m-1'>
                  <img className="w-5 " src={isDarkMode ? whiteSearch :blackSearch}/>
                  <a className='px-5 cursor-pointer' >{search}</a>
                </li></>)}
                 </ul>
              </div>}
            </form>
            <div className="grid col-span-1 py-4 ">
              <img alt="user_icon" className="h-8 w-8  dark:w-auto dark:h-auto dark:-mt-3 dark:m" src={isDarkMode ? whiteUser_icon :blackUser_icon}/>
             
              {/* <div className='absolute bg-gray-100 mt-9 rounded-md shadow- w-40 -ml-14 text-center'>
                 <ul className=' '>
                  <li className=' py-2 border  border-b-slate-200 '>Google Account</li>
                  <li className=' py-2  border border-b-slate-200 '>Switch Account</li>
                  <li className=' py-2  border border-b-slate-200 '>Sign out</li>
                  <li className=' py-2  border border-b-slate-200 '>Youtube Studio</li>
                  <li className=' py-2  border border-b-slate-200 '>Purchase of Memberships</li>
                  <li className=' py-2  border border-b-slate-200 '>Appearence</li>
                  <li className=' py-2  border border-b-slate-200 '>Location</li>
                 </ul>
              </div> */}
            </div>
            <div className="grid col-span-1 h-1 py-4 ">
                {/* <button className='bg-blue-500 py-1 px-1 text-white rounded-xl' onClick={handleTheme}>Dark</button> */}
                   <input type="checkbox" class="checkbox" id="checkbox" onChange={handleTheme}/>
                  <label for="checkbox" class="checkbox-label bg-black dark:bg-slate-400">
                     
                  <i><img class="fas fa-moon w-8 text-center h-5 rounded-full bg-orange-400" src={Sun}/></i>
                  <i><img class="fas fa-sun  w-8 text-center rounded-full bg-white h-5" src={Moon}/></i>
                  <span class="ball bg-white text-sm">{isDark ? "on" : "off"}</span>
                   </label>
               </div>
        </div>
    )
}
export default Header;

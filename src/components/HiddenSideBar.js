import React from 'react'
import homeLogo from "../Svg/home_logo.svg";
import subscipLogo from "../Svg/Subscription.svg"
import shorts from "../Svg/Shorts.svg"
import You from '../Svg/You.svg'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../utils/appSlice';

const HiddenSidebar = () => {
  const toogleSideBar = useSelector((store)=>store.app.isMenuOpen);
  const dispatch = useDispatch();
  const style = toogleSideBar ? "w-[80px] ":"w-1/12 absolute bg-blue-500";
  return (

    <div className={'text-center h-screen  overflow-y-scroll'+style}>
         <div className=''>
            <ul className='border-b'>
                <Link to="/"><li onClick={()=>{dispatch(closeMenu(true))}} className='px-2 py-4  font-bold text-center rounded-md '>
                 <img className=' w-6 ml-9' src={homeLogo} alt='home_logo'/>
                 <h1>Home</h1>
                </li></Link>
            </ul>
         </div>
         <div>

         <div>
         
         <ul className='border-b'>
         <li className='px-2 py-4  font-bold text-center rounded-md '>
                 <img className=' w-6 ml-9' src={shorts} alt='home_logo'/>
                 <h1>Shorts</h1>
                </li>
            </ul>
         </div>
         <div>
         
         <ul className='border-b'>
         <li className='px-2 py-4  font-bold  rounded-'>
                 <img className=' w-6 ml-8' src={subscipLogo} alt='home_logo'/>
                 <h1>Subscription</h1>
                </li>
            </ul>
         </div>
         
         
         <ul className='border-b '>
         <li className='px-2 py-4  font-bold text-center rounded-md'>
                 <img className=' w-6 ml-9' src={You} alt='home_logo'/>
                 <h1>You</h1>
                </li>
            </ul>
         </div>
         
    </div>
  )
}

export default HiddenSidebar;
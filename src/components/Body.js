import React from 'react'
import Sidebar from './Sidebar'
import {useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Body = () => {

 const toogleSideBar = useSelector((store)=>store.app.isMenuOpen);
  return (
    <div className='dark:bg-black'>
     <div className='w-full'><Header/></div>
     <div className='w-auto flex dark:bg-black'> 
      {toogleSideBar ? <Sidebar/> : null}
           <Outlet/>
       </div>
    </div>
  )
}

export default Body
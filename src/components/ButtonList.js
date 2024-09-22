import React from 'react'
import { useSelector } from 'react-redux';

const ButtonList = () => {
    const btn_list = ["All","Music","Weight Training","Comdey Clubs","Dramedy","Motor oils","Tamil Cinema","Thrillers","Live","Suzuki","Presentation","Asian Music"];
    return (
    <div className="w-full ">
        <ul className='flex  overflow-scroll no-scrollbar  m-2'>
        {btn_list.map((map,index)=> <li key={index}  className='mt-2'><button className='bg-gray-200 w-40 px-2 py-2 rounded-lg ml-2 dark:text-white dark:bg-opacity-20'>{map}</button></li>)}
        </ul>
    </div>
  )
}

export default ButtonList
import React, { useState } from 'react'
import logo from './../assets/Images/logo.png';
import {
    HiHome,
    HiMagnifyingGlass ,
    HiStar,
    HiPlayCircle,
    HiTv
} from "react-icons/hi2";
import {HiPlus , HiDotsVertical} from "react-icons/hi";
import HeaderItem from './HeaderItem';


function Header() {

  const [toggle ,setToggle] = useState(false);

  const menu = [
    {
      name: 'HOME',
      icon:HiHome
    },
    {
      name: 'SEARCH',
      icon:HiMagnifyingGlass
    },
    {
      name: 'WATCH LIST',
      icon:HiPlus
    },
    {
      name: 'ORIGINALS',
      icon:HiStar
    },
    {
      name: 'MOVIES',
      icon:HiPlayCircle
    },
    {
      name: 'SERIES',
      icon:HiTv
    },
  ]

  return (
    <div className='flex items-center justify-between pl-4 pr-7'>
      <div className='flex gap-8 items-center ml-9 '>
        <img src={logo} className='w-[80px] md:w-[115px] object-cover'/>

        <div className='hidden md:flex ml-9 gap-8'>
          {menu.map((item) => (
            <HeaderItem name = {item.name} Icon = {item.icon}/>
          ))}
        </div>
        <div className='flex md:hidden gap-5'>
          {menu.map((item ,index) => index<3&& (
            <HeaderItem name = {''} Icon = {item.icon}/>
          ))}
          <div className='md:hidden' onClick={() => setToggle(!toggle)}>
            <HeaderItem name = {''} Icon={HiDotsVertical}/>
            {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
              {menu.map((item ,index) => index>2&& (
                <HeaderItem name = {item.name} Icon = {item.icon}/>
              ))}
            </div> : null}
          </div>

        </div>
      </div>
       <img src="src\assets\Images\profile.jpg" alt="profile" className='w-[40px] mt-5 rounded-full mr-9'/>
    </div>
  )
}

export default Header

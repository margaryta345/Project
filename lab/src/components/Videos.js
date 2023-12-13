import React from 'react'
import Test from '../media/test.mp4';
import Code from '../media/code.mp4';
import Soft from '../media/soft.mp4';
import Theory from '../media/theory.mp4';
import { FaHeadSideVirus } from "react-icons/fa";
import { BsCardChecklist } from "react-icons/bs";

function Videos() {
  return (
    <div className=''>
    <ul className='flex mt-[50px]'>
        
  <li className='flex flex-col mx-0 items-end mr-[10px]  justify-center relative'>
    <video width="50%" height="auto" autoPlay loop muted>
      <source src={Code} type="video/mp4" />
    </video>
    <div className="absolute top-[80px] left-28 w-full h-full flex items-center justify-center">
    <img className='mr-1' src="https://img.icons8.com/glyph-neue/30/FFFFFF/head-with-brain.png" alt="head-with-brain"/>
    <p className="text-white font-extrabold md:text-2xl">Hard Skills</p>
  </div>

  </li>
  <li className='flex flex-col mx-0 relative'>
  <div className="relative" style={{ width: '50%', height: 'auto' }}>
    <video width="100%" height="100%" autoPlay loop muted>
      <source src={Soft} type="video/mp4" />
    </video>
    <div className="absolute top-[80px] left-7 w-full h-full flex items-center justify-start">
    <img className='mr-1'  src="https://img.icons8.com/ios-filled/27/FFFFFF/test-passed.png" alt="test-passed"/>
      <p className="text-white font-extrabold md:text-2xl">Тести та завдання</p>
    </div>
  </div>
</li>
</ul>
<ul className='flex mt-[10px]'>
<li className='relative flex flex-col mx-0 items-end mr-[10px] justify-center'>
  <video width="50%" height="auto" autoPlay loop muted>
    <source src={Test} type="video/mp4" />
  </video>
  <div className="absolute top-[80px] left-28  w-full h-full flex items-center justify-center">
  <img className='mr-2' src="https://img.icons8.com/material-rounded/27/FFFFFF/conference-call.png" alt="conference-call"/>
    <p className="text-white font-extrabold md:text-2xl">Soft skills</p>
  </div>
</li>

<li className='flex flex-col mx-0 relative'>
  <div className="relative" style={{ width: '50%', height: 'auto' }}>
    <video width="100%" height="100%" autoPlay loop muted>
      <source src={Theory} type="video/mp4" />
    </video>
    <div className="absolute top-[80px] left-7 w-full h-full flex items-center justify-start">
    <img className='mr-2' src="https://img.icons8.com/ios-filled/27/FFFFFF/info-squared.png" alt="info-squared"/>
      <p className="text-white font-extrabold md:text-2xl">Теорія</p>
    </div>
  </div>
</li>

</ul>

    </div>
  )
}

export default Videos
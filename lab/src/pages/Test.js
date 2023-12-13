import React,{useState} from 'react'
import MyBack from '../media/Hand.png'
import Navbar from '../components/Navbar'
import { BsCardChecklist } from "react-icons/bs";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function Test() {
  return (
    <div>
         <img src={MyBack} />
    <div className='absolute top-0 left-0 w-full  flex items-center justify-center'>
      <Navbar/>
      <div>
        <h1 className='absolute md:top-[320px] left-0 w-full  flex items-center justify-center text-white font-extrabold md:text-6xl '>Протестуй свої знання</h1>
        <p className='absolute md:top-[440px] left-2 w-full  flex items-center justify-center text-white font-extrabold md:text-6xl  animate-bounce'>
      <MdKeyboardDoubleArrowDown/>
    </p>
</div>
</div>
<div className='flex items-center justify-center'>
  <div className='flex items-start  justify-center'>
    <BsCardChecklist className='md:text-5xl text-[#FF0000] pr-4' />
    <h1 className='font-extrabold md:text-4xl text-[#FF0000] pb-10'>
      Тест для визначення рівня володіння Python
    </h1>
  </div>
</div>

<h2 className='flex items-center justify-center mr-[370px] ml-[380px] mt-[20px] text-center md:text-xl text-[#FF0000]'>Цей тест розроблений для визначення ваших навичків та умінь в сфері пайтону . Він підскаже вам які теми краще підтягнути вивчити , а що слід починати з нуля. У тесті розміщенні як тестові так і відкриті відповіді. Уважно читайте завдання та усім успіхів!</h2>
<div className=' flex items-center justify-center pt-10 pb-20'>
<button className=' pt-2 pb-2 pl-5 pr-5 rounded-lg  text-white font-medium text-m   bg-[red]'>Перейти до тесту</button>
</div>
</div>
  )
}

export default Test
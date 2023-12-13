import React,{useState} from 'react'
import Main from '../media/About.png'
import Navbar from '../components/Navbar'
import Work from '../media/Work.png'
import Code from '../media/Code.png'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import CoursePart from '../components/CoursePart'

function Course() {
    return (
        <div>
             <img src={Main} />
        <div className='absolute top-0 left-0 w-full  flex items-center justify-center'>
          <Navbar/>
          <div>
            <h1 className='absolute md:top-[300px] left-0 w-full  flex items-center justify-center text-white font-extrabold md:text-6xl '>Курс Python Basic</h1>
            <p className='absolute md:top-[390px] left-0 w-full  flex items-center justify-center text-white font-extrabold md:text-6xl  animate-bounce'>
      <MdKeyboardDoubleArrowDown/>
    </p>
    </div>
    </div>  
    <h1 className='flex items-center justify-center font-extrabold md:text-4xl text-[#FF0000] pb-10'> Про цей курс </h1>
    <h2 className='flex items-center justify-center mx-auto mt-[20px] text-center md:text-xl text-black w-[55%]'>Python - універсальна та популярна мова програмування загального призначення. 
Вона чудово підходить для вивчення як перша мова, тому що вона лаконічна і легко читається, а також є хорошою мовою для будь-якого програміста, оскільки її можна використовувати для всього - від веб-розробки до розробки програмного забезпечення та наукових додатків.</h2>
    
<img src={Work} />
    
    
<h1 className='flex items-center justify-center font-extrabold md:text-4xl text-[#FF0000] pb-10'> Навички які ви отримаєте </h1>
<h2 className='flex items-center justify-center mx-auto mt-[20px] text-center md:text-xl text-black w-[55%]'>Цей курс є чудовим вступом як до фундаментальних концепцій програмування, так і до мови програмування Python. 
По закінченню курсу ви зможете вільно програмувати на Python і перенести свої навички з платформи Python Basic на власний комп'ютер.</h2>
    
<img src={Code} />

<CoursePart/>


    </div>
  )
}

export default Course
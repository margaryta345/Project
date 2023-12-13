import React,{useState} from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoClose } from "react-icons/io5";

function CourseMenu() {


  const [nav2,setNav2]= useState(false);

  const handleNav2=()=>{
    setNav2(!nav2)
  }

  const [t1,setT1]= useState(true);

  const handleT1=()=>{
    setT1(!t1)
  }

  const [t2,setT2]= useState(false);

  const handleT2=()=>{
    setT2(!t2)
  }


  const [t3,setT3]= useState(false);

  const handleT3=()=>{
    setT3(!t3)
  }



  const [t4,setT4]= useState(false);

  const handleT4=()=>{
    setT4(!t4)
  }

  const [t5,setT5]= useState(false);

  const handleT5=()=>{
    setT5(!t5)
  }

  
  const [t6,setT6]= useState(false);

  const handleT6=()=>{
    setT6(!t6)
  }
  return (
    <div>
        {!nav2 && (
  <div className='mt-2 h-12 mb-[10px]'>
    <button onClick={handleNav2} className='bg-[#ff0000] w-[3%] h-12 rounded-r-full '>
      <img className='pl-[10px]' src="https://img.icons8.com/external-solid-adri-ansyah/20/ffffff/external-music-music-player-button-solid-adri-ansyah-28.png" alt="Music icon" />
    </button>
  </div>
)}

{nav2 && (
  <div className='bg-[#E8E8E8]  bg-opacity-40 flex h-full w-[23%] ease-in-out duration-500 z-10 '>
    <div className='absolute top-[17%] left-[1%]'><button className='inline-block font-extrabold pb-[10%] '><IoClose color='red' size={25} onClick={handleNav2}/></button></div>
    
    
    <ul className='flex items-start justify-start ml-[3%]  h-full  pt-[25%] flex-col flex-wrap w-[100%]'>
    <li className={`flex flex-row ${t1 ? 'bg-[#FF0000] text-white font-bold w-[85%] text-[22px] h-[5%] rounded-[15px]' : 'text-[#ff0000] text-[20px] font-bold'}`}>
  <div className='pl-2 flex items-center '>
  <button onClick={handleT1}>
  {t1 ? <MdKeyboardArrowDown size={25}/> : <MdKeyboardArrowRight size={25} style={{marginTop:'3px'}}/>}
</button>
  </div>
  Основи Python
</li>
      {t1 && 
        ( 
          <ul className='ml-4 mt-2 flex flex-col items-start text-[14px] text-[#ff0000]'>
  <li className='flex items-center '>
    <img src="https://img.icons8.com/ios-filled/12/ff0000/filled-circle.png" alt="Red Circle"/>
    <span className='ml-2 '>Перша програма "Hello World!"</span>
  </li>
  <li className='flex items-center'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Змінні та типи даних</span>
  </li>
  <li className='flex items-center'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Консольне введення та виведення</span>
  </li>
  <li className='flex items-center'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Арифметичні та логічні операції з числами</span>
  </li>
  <li className='flex items-center'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Умовні конструкції, конструкція if</span>
  </li>
  <li className='flex items-center'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Цикли</span>
  </li>
</ul>
)}




<li className={`flex flex-row ${t2 ? 'bg-[#FF0000] text-white font-bold w-[85%] text-[22px] h-[5%] mt-[10%] rounded-[15px]' : 'text-[#ff0000] mt-[2%] text-[20px] font-bold'}`}>
  <div className='pl-2 flex items-center'>
  <button onClick={handleT2}>
  {t2 ? <MdKeyboardArrowDown size={25}  /> : <MdKeyboardArrowRight size={25} style={{marginTop:'3px'}}/>}
</button>
  </div>
  Обєктно орієнтоване...
</li>
      {t2 && 
        ( 
          <ul className='ml-4 mt-2 flex flex-col items-start text-[14px] text-[#ff0000]'>
  <li className='flex items-center '>
    <img src="https://img.icons8.com/ios-filled/12/ff0000/filled-circle.png" alt="Red Circle"/>
    <span className='ml-2 '>Класи та об'єкти</span>
  </li>
  <li className='flex items-center'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Інкапсуляція, атрибути та властивості</span>
  </li>
  <li className='flex items-center'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Наслідування</span>
  </li>
  <li className='flex items-center'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Перевизначення функціоналу базового класу</span>
  </li>
  <li className='flex items-center'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Атрибути класу та статичні методи</span>
  </li>
  <li className='flex items-center'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Клас оbject. Представлення об'єкту</span>
  </li>
</ul>
)}


<li className={`flex flex-row ${t3 ? 'bg-[#FF0000] text-white font-bold w-[85%] text-[22px] h-[5%]  mt-[10%] rounded-[15px]' : 'text-[#ff0000] mt-[2%] text-[20px] font-bold'}`}>
  <div className='pl-2 flex items-center'>
  <button onClick={handleT3}>
  {t3 ? <MdKeyboardArrowDown size={25} /> : <MdKeyboardArrowRight size={25} style={{marginTop:'3px'}}/>}
</button>
  </div>
  Обробка помилок...
</li>
      {t3 && 
        ( 
          <ul className='ml-4 mt-2 flex flex-col items-start text-[14px] text-[#ff0000]'>
  <li className='flex items-center '>
    <img src="https://img.icons8.com/ios-filled/12/ff0000/filled-circle.png" alt="Red Circle"/>
    <span className='ml-2 '>Конструкція try...except...finally</span>
  </li>
  <li className='flex items-center'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Except та обробка різних типів винятків</span>
  </li>
  <li className='flex items-center'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Генерація винятків та створення своїх типів винятків</span>
  </li>
</ul>
)}

<li className={`flex flex-row ${t4 ? 'bg-[#FF0000] text-white font-bold w-[85%] text-[22px] h-[5%]  mt-[10%] rounded-[15px]' : 'text-[#ff0000] mt-[2%] text-[20px] font-bold'}`}>
  <div className='pl-2 flex items-center'>
  <button onClick={handleT4}>
  {t4 ? <MdKeyboardArrowDown size={25} /> : <MdKeyboardArrowRight size={25} style={{marginTop:'3px'}}/>}
</button>
  </div>
  Списки, кортежі та ...
</li>
      {t4 && 
        ( 
          <ul className='ml-4 mt-2 flex flex-col items-start text-[14px] text-[#ff0000]'>
  <li className='flex items-center '>
    <img src="https://img.icons8.com/ios-filled/12/ff0000/filled-circle.png" alt="Red Circle"/>
    <span className='ml-2 '>Списки</span>
  </li>
  <li className='flex items-center'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Кортежі</span>
  </li>
  <li className='flex items-center'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Словники</span>
  </li>
  <li className='flex items-center'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Множини</span>
  </li>
</ul>
)}


<li className={`flex flex-row ${t5 ? 'bg-[#FF0000] text-white font-bold w-[85%] text-[22px] h-[5%]  mt-[10%] rounded-[15px]' : 'text-[#ff0000] mt-[2%] text-[20px] font-bold'}`}>
  <div className='pl-2 flex items-center'>
  <button onClick={handleT5}>
  {t5 ? <MdKeyboardArrowDown size={25}  /> : <MdKeyboardArrowRight size={25} style={{marginTop:'3px'}}/>}
</button>
  </div>
  Рядки та модулі
</li>
      {t5 && 
        ( 
          <ul className='ml-4 mt-2 flex flex-col items-start text-[14px] text-[#ff0000]'>
  <li className='flex items-center '>
    <img src="https://img.icons8.com/ios-filled/12/ff0000/filled-circle.png" alt="Red Circle"/>
    <span className='ml-2 '>Робота з рядками</span>
  </li>
  <li className='flex items-center'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Основні методи рядків</span>
  </li>
  <li className='flex items-center'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Форматування</span>
  </li>
  <li className='flex items-center'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Модуль random</span>
  </li>
  <li className='flex items-center'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Модуль math</span>
  </li>
</ul>
)}


<li className={`flex flex-row ${t6 ? 'bg-[#FF0000] text-white font-bold w-[85%] text-[22px] h-[5%]  mt-[10%] rounded-[15px] ' : 'text-[#ff0000] mt-[2%] text-[20px] font-bold mb-[10%]'}`}>
  <div className='pl-2 flex items-center'>
  <button onClick={handleT6}>
  {t6 ? <MdKeyboardArrowDown size={25} /> : <MdKeyboardArrowRight size={25} style={{marginTop:'3px'}}/>}
</button>
  </div>
  Робота з файлами
</li>
      {t6 && 
        ( 
          <ul className='ml-4 mt-2 flex flex-col items-start text-[14px] text-[#ff0000]'>
  <li className='flex items-center '>
    <img src="https://img.icons8.com/ios-filled/12/ff0000/filled-circle.png" alt="Red Circle"/>
    <span className='ml-2 '>Відкриття та закриття файлів</span>
  </li>
  <li className='flex items-center'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Текстові файли</span>
  </li>
  <li className='flex items-center'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Файли CSV</span>
  </li>
  <li className='flex items-center'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Програма підрахунку слів</span>
  </li>
  <li className='flex items-center mb-[10%]'>
    <img src="https://img.icons8.com/sf-regular-filled/12/ff0000/circled.png" alt="circled"/>
    <span className='ml-2'>Запис та читання архівних zip-файлів</span>
  </li>
</ul>
)}
    </ul>
  </div>
)}
    </div>
  )
}

export default CourseMenu
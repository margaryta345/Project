import React, {useState} from 'react'
import { PiNumberCircleOneFill , PiNumberCircleTwoFill , PiNumberCircleThreeFill, PiNumberCircleFourFill,PiNumberCircleFiveFill,PiNumberCircleSixFill } from "react-icons/pi";

function CoursePart() {
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);
  const [menu4, setMenu4] = useState(false);
  const [menu5, setMenu5] = useState(false);
  const [menu6, setMenu6] = useState(false);

  const handleButtonClick1 = () => {
    setMenu1(!menu1);
  };

  const handleButtonClick2 = () => {
    setMenu2(!menu2);
  };

  const handleButtonClick3 = () => {
    setMenu3(!menu3);
  };

  const handleButtonClick4 = () => {
    setMenu4(!menu4);
  };

  const handleButtonClick5 = () => {
    setMenu5(!menu5);
  };

  const handleButtonClick6 = () => {
    setMenu6(!menu6);
  };

  const handleButtonClick = () => {
    handleButtonClick1();
    handleButtonClick2();
    handleButtonClick3();
    handleButtonClick4();
    handleButtonClick5();
    handleButtonClick6();
  };
  const buttonText = (menu1 && menu2 && menu3 && menu4 && menu5 && menu6) ? 'Згорнути всі' : 'Розгорнути всі';
  return (
    <div>
        <h1 className='flex items-center justify-center font-extrabold md:text-4xl text-[#FF0000] pb-10' >Програма навчання</h1>
        <ul className="flex ml-[22%]">
        <li className='relative flex flex-col items-start justify-start pt-6 pl-7 bg-[#ff0000] text-white text-2xl font-extrabold w-[75%] h-[120px] rounded-[20px]'>
  Програма
  <ul className='flex flex-row text-[16px] font-bold'>
    <li className='pr-2'>35 лекцій</li>
    <li className='pr-2'>10 тестів</li>
    <li>10 проектів</li>
  </ul>
  <button onClick={handleButtonClick} className="absolute top-12 right-3 text-sm font-normal px-2 py-1  w-32 h-7">
  <span>{buttonText}</span>
  </button>
</li>
</ul>

<ul className="flex ml-[22%] ">
        <li className={`relative flex flex-col items-start justify-start pt-6 pl-7 bg-[#F5F5F5] text-[#ff0000] text-2xl  border border-solid border-red-500 font-extrabold w-[75%] ${menu1 ? 'h-[630px]' : 'h-[120px]'} rounded-[20px]`}>
        <li className="absolute top-10 text-[#ff0000]"><PiNumberCircleOneFill size={35} /></li>
        <li className="absolute top-6 text-2xl left-20 text-[#ff0000] font-extrabold ">Основи Python</li>
        <li className='absolute top-14 text-sm left-20 pr-32 font-bold'>В цьому розділі ми познайомимося з основами пайтону а саме змінними типами данних умовних конструкціях циклах та функціях</li>
    <button onClick={handleButtonClick1} className="absolute top-3 right-3 text-red px-2 py-1  w-7 h-7">
      {!menu1 ? <img src="https://img.icons8.com/metro/12/FF0000/expand-arrow.png" /> :
        <img src="https://img.icons8.com/metro/12/FF0000/collapse-arrow.png" alt="collapse-arrow" />}
    </button>
    {menu1 && <div>
        <ul>
            <li className="absolute  top-[120px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[115px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[115px] text-[16px] left-[280px] text-[#ff0000] font-bold">Перша програма Hello World!</li>
        </ul>

        <ul>
            <li className="absolute  top-[160px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[157px] text-[16px] left-32 text-[#ff0000] font-bold">Проект</li>
            <li className="absolute  top-[157px] text-[16px] left-[280px] text-[#ff0000] font-bold">Перша програма Hello World!</li>
        </ul>
        <ul>
            <li className="absolute  top-[200px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[197px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[197px] text-[16px] left-[280px] text-[#ff0000] font-bold">Змінні та типи даних</li>
        </ul>
        <ul>
            <li className="absolute  top-[240px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[237px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[237px] text-[16px] left-[280px] text-[#ff0000] font-bold">Консольне введення та виведення</li>
        </ul>
        <ul>
            <li className="absolute  top-[280px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[277px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[277px] text-[16px] left-[280px] text-[#ff0000] font-bold">Арифметичні та логічні операції з числами </li>
        </ul>
        <ul>
            <li className="absolute  top-[320px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[317px]  text-[16px] left-32 text-[#ff0000] font-bold">Проект</li>
            <li className="absolute  top-[317px] text-[16px] left-[280px] text-[#ff0000] font-bold">Калькулятор </li>
        </ul>
        <ul>
            <li className="absolute  top-[360px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[357px]  text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[357px] text-[16px] left-[280px] text-[#ff0000] font-bold">Умовні конструкції, конструкція if</li>
        </ul>
        <ul>
            <li className="absolute  top-[400px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[397px]  text-[16px] left-32 text-[#ff0000] font-bold">Проект</li>
            <li className="absolute  top-[397px] text-[16px] left-[280px] text-[#ff0000] font-bold">Умовні конструкції, конструкція if</li>
        </ul>
        <ul>
            <li className="absolute  top-[440px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[437px]  text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[437px] text-[16px] left-[280px] text-[#ff0000] font-bold">Цикли </li>
        </ul>
        <ul>
            <li className="absolute  top-[480px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[477px]  text-[16px] left-32 text-[#ff0000] font-bold">Проект</li>
            <li className="absolute  top-[477px] text-[16px] left-[280px] text-[#ff0000] font-bold">Цикли </li>
        </ul>
        <ul>
            <li className="absolute  top-[520px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[517px]  text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[517px] text-[16px] left-[280px] text-[#ff0000] font-bold">Функції</li>
        </ul>
        <ul>
            <li className="absolute  top-[560px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[557px]  text-[16px] left-32 text-[#ff0000] font-bold">Проект</li>
            <li className="absolute  top-[557px] text-[16px] left-[280px] text-[#ff0000] font-bold">Функції</li>
        </ul>
    </div>
    }
</li>
</ul>
<ul className="flex ml-[22%]">
        <li className={`relative flex flex-col items-start justify-start pt-6 pl-7 bg-[#F5F5F5] text-[#ff0000] text-2xl  border border-solid border-red-500 font-extrabold w-[75%] ${menu2 ? 'h-[500px]' : 'h-[120px]'} rounded-[20px]`}>
        <li className="absolute top-10 text-[#ff0000]"><PiNumberCircleTwoFill size={35} /></li>
        <li className="absolute top-6 text-2xl left-20 text-[#ff0000] font-extrabold ">Обєкто-орієнтоване програмування</li>
        <li className='absolute top-14 text-sm left-20 pr-32 font-bold'>В цьому розділі ми познайомимося з основами об'єктно-орієнтованого програмування: навчимося створювати та взаємодіяти з об'єктами.</li>
    <button onClick={handleButtonClick2} className="absolute top-3 right-3 text-red px-2 py-1  w-7 h-7">
      {!menu2 ? <img src="https://img.icons8.com/metro/12/FF0000/expand-arrow.png" /> :
        <img src="https://img.icons8.com/metro/12/FF0000/collapse-arrow.png" alt="collapse-arrow" />}
    </button>
    {menu2 && <div>
        <ul>
            <li className="absolute  top-[120px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[115px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[115px] text-[16px] left-[280px] text-[#ff0000] font-bold">Класи та об'єкти</li>
        </ul>

        <ul>
            <li className="absolute  top-[160px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[157px] text-[16px] left-32 text-[#ff0000] font-bold">Проект</li>
            <li className="absolute  top-[157px] text-[16px] left-[280px] text-[#ff0000] font-bold">Класи та об'єкти</li>
        </ul>
        <ul>
            <li className="absolute  top-[200px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[197px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[197px] text-[16px] left-[280px] text-[#ff0000] font-bold">Інкапсуляція, атрибути та властивості</li>
        </ul>
        <ul>
            <li className="absolute  top-[240px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[237px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[237px] text-[16px] left-[280px] text-[#ff0000] font-bold">Наслідування</li>
        </ul>
        <ul>
            <li className="absolute  top-[280px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[277px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[277px] text-[16px] left-[280px] text-[#ff0000] font-bold">Перевизначення функціоналу базового класу </li>
        </ul>
        <ul>
            <li className="absolute  top-[320px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[317px]  text-[16px] left-32 text-[#ff0000] font-bold">Проект</li>
            <li className="absolute  top-[317px] text-[16px] left-[280px] text-[#ff0000] font-bold">Бібліотека</li>
        </ul>
        <ul>
            <li className="absolute  top-[360px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[357px]  text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[357px] text-[16px] left-[280px] text-[#ff0000] font-bold">Атрибути класу та статичні методи</li>
        </ul>
        <ul>
            <li className="absolute  top-[440px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[437px]  text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[437px] text-[16px] left-[280px] text-[#ff0000] font-bold">Клас оbject. Представлення об'єкту</li>
        </ul>
        <ul>
            <li className="absolute  top-[400px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[397px]  text-[16px] left-32 text-[#ff0000] font-bold">Проект</li>
            <li className="absolute  top-[397px] text-[16px] left-[280px] text-[#ff0000] font-bold">Автомобільний салон</li>
        </ul>
    </div>
    }
</li>
</ul>
<ul className="flex ml-[22%]">
        <li className={`relative flex flex-col items-start justify-start pt-6 pl-7 bg-[#F5F5F5] text-[#ff0000] text-2xl  border border-solid border-red-500 font-extrabold w-[75%] ${menu3 ? 'h-[350px]' : 'h-[120px]'} rounded-[20px]`}>
        <li className="absolute top-10 text-[#ff0000]"><PiNumberCircleThreeFill size={35} /></li>
        <li className="absolute top-6 text-2xl left-20 text-[#ff0000] font-extrabold ">Обробка помилок та винятків</li>
        <li className='absolute top-14 text-sm left-20 pr-32 font-bold'>В цьому розділі ми вивчимо ефективні методи роботи з помилками та управління винятками у програмуванні</li>
    <button onClick={handleButtonClick3} className="absolute top-3 right-3 text-red px-2 py-1  w-7 h-7">
      {!menu3 ? <img src="https://img.icons8.com/metro/12/FF0000/expand-arrow.png" /> :
        <img src="https://img.icons8.com/metro/12/FF0000/collapse-arrow.png" alt="collapse-arrow" />}
    </button>
    {menu3 && <div>
        <ul>
            <li className="absolute  top-[120px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[115px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[115px] text-[16px] left-[280px] text-[#ff0000] font-bold">Конструкція try...except...finally</li>
        </ul>

        <ul>
            <li className="absolute  top-[160px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[157px] text-[16px] left-32 text-[#ff0000] font-bold">Проект</li>
            <li className="absolute  top-[157px] text-[16px] left-[280px] text-[#ff0000] font-bold">Конструкція try...except...finally</li>
        </ul>
        <ul>
            <li className="absolute  top-[200px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[197px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[197px] text-[16px] left-[280px] text-[#ff0000] font-bold">Except та обробка різних типів винятків</li>
        </ul>
        <ul>
            <li className="absolute  top-[240px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[237px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[237px] text-[16px] left-[280px] text-[#ff0000] font-bold">Генерація винятків та створення своїх типів винятків</li>
        </ul>
        <ul>
            <li className="absolute  top-[280px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[277px]  text-[16px] left-32 text-[#ff0000] font-bold">Проект</li>
            <li className="absolute  top-[277px] text-[16px] left-[280px] text-[#ff0000] font-bold">Генерація винятків та створення своїх типів </li>
        </ul>
    </div>
    }
</li>
</ul>
<ul className="flex ml-[22%]">
        <li className={`relative flex flex-col items-start justify-start pt-6 pl-7 bg-[#F5F5F5] text-[#ff0000] text-2xl  border border-solid border-red-500 font-extrabold w-[75%] ${menu4 ? 'h-[410px]' : 'h-[120px]'} rounded-[20px]`}>
        <li className="absolute top-10 text-[#ff0000]"><PiNumberCircleFourFill size={35} /></li>
        <li className="absolute top-6 text-2xl left-20 text-[#ff0000] font-extrabold ">Списки, кортежі та словники</li>
        <li className='absolute top-14 text-sm left-20 pr-32 font-bold'>У цьому розділі ви дізнаєтесь як створювати структури даних для зручного зберігання та обробки інформації</li>
    <button onClick={handleButtonClick4} className="absolute top-3 right-3 text-red px-2 py-1  w-7 h-7">
      {!menu4 ? <img src="https://img.icons8.com/metro/12/FF0000/expand-arrow.png" /> :
        <img src="https://img.icons8.com/metro/12/FF0000/collapse-arrow.png" alt="collapse-arrow" />}
    </button>
    {menu4 && <div>
        <ul>
            <li className="absolute  top-[120px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[115px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[115px] text-[16px] left-[280px] text-[#ff0000] font-bold">Списки</li>
        </ul>

        <ul>
            <li className="absolute  top-[160px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[157px] text-[16px] left-32 text-[#ff0000] font-bold">Проект</li>
            <li className="absolute  top-[157px] text-[16px] left-[280px] text-[#ff0000] font-bold">Списки</li>
        </ul>
        <ul>
            <li className="absolute  top-[200px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[197px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[197px] text-[16px] left-[280px] text-[#ff0000] font-bold">Кортежі</li>
        </ul>
        <ul>
            <li className="absolute  top-[240px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[237px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[237px] text-[16px] left-[280px] text-[#ff0000] font-bold">Словники</li>
        </ul>
        <ul>
            <li className="absolute  top-[280px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[277px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[277px] text-[16px] left-[280px] text-[#ff0000] font-bold">Множини </li>
        </ul>
        <ul>
            <li className="absolute  top-[320px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[317px]  text-[16px] left-32 text-[#ff0000] font-bold">Проект</li>
            <li className="absolute  top-[317px] text-[16px] left-[280px] text-[#ff0000] font-bold">Кортежі, словники , множини </li>
        </ul>
    </div>
    }
</li>
</ul>
<ul className="flex ml-[22%]">
        <li className={`relative flex flex-col items-start justify-start pt-6 pl-7 bg-[#F5F5F5] text-[#ff0000] text-2xl  border border-solid border-red-500 font-extrabold w-[75%] ${menu5 ? 'h-[420px]' : 'h-[120px]'} rounded-[20px]`}>
        <li className="absolute top-10 text-[#ff0000]"><PiNumberCircleFiveFill size={35} /></li>
        <li className="absolute top-6 text-2xl left-20 text-[#ff0000] font-extrabold ">Рядки та модулі</li>
        <li className='absolute top-14 text-sm left-20 pr-32 font-bold'>В цьому розділі ми познайомимося з обробкою та маніпуляцією рядків у Python, вивчимо основні операції та методи для роботи з текстовою інформацією. </li>
    <button onClick={handleButtonClick5} className="absolute top-3 right-3 text-red px-2 py-1  w-7 h-7">
      {!menu5 ? <img src="https://img.icons8.com/metro/12/FF0000/expand-arrow.png" /> :
        <img src="https://img.icons8.com/metro/12/FF0000/collapse-arrow.png" alt="collapse-arrow" />}
    </button>
    {menu5 && <div>
        <ul>
            <li className="absolute  top-[120px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[115px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[115px] text-[16px] left-[280px] text-[#ff0000] font-bold">Робота з рядками</li>
        </ul>

        <ul>
            <li className="absolute  top-[160px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[157px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[157px] text-[16px] left-[280px] text-[#ff0000] font-bold">Основні методи рядків</li>
        </ul>
        <ul>
            <li className="absolute  top-[200px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[197px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[197px] text-[16px] left-[280px] text-[#ff0000] font-bold">Форматування</li>
        </ul>
        <ul>
            <li className="absolute  top-[240px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[237px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[237px] text-[16px] left-[280px] text-[#ff0000] font-bold">Модуль random</li>
        </ul>
        <ul>
            <li className="absolute  top-[280px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[277px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[277px] text-[16px] left-[280px] text-[#ff0000] font-bold">Модуль math</li>
        </ul>
        <ul>
            <li className="absolute  top-[320px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[317px]  text-[16px] left-32 text-[#ff0000] font-bold">Проект</li>
            <li className="absolute  top-[317px] text-[16px] left-[280px] text-[#ff0000] font-bold">Калькулятор</li>
        </ul>
    </div>
    }
</li>
</ul>
<ul className="flex ml-[22%]">
        <li className={`relative flex flex-col items-start justify-start pt-6 pl-7 bg-[#F5F5F5] text-[#ff0000] text-2xl  border border-solid border-red-500 font-extrabold w-[75%] ${menu6 ? 'h-[420px]' : 'h-[120px]'} rounded-[20px]`}>
        <li className="absolute top-10 text-[#ff0000]"><PiNumberCircleSixFill size={35} /></li>
        <li className="absolute top-6 text-2xl left-20 text-[#ff0000] font-extrabold ">Робота з файлами</li>
        <li className='absolute top-14 text-sm left-20 pr-32 font-bold'>В цьому розділі ми вивчимо основи роботи з файлами в Python</li>
    <button onClick={handleButtonClick6} className="absolute top-3 right-3 text-red px-2 py-1  w-7 h-7">
      {!menu6 ? <img src="https://img.icons8.com/metro/12/FF0000/expand-arrow.png" /> :
        <img src="https://img.icons8.com/metro/12/FF0000/collapse-arrow.png" alt="collapse-arrow" />}
    </button>
    {menu6 && <div>
        <ul>
            <li className="absolute  top-[120px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[115px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[115px] text-[16px] left-[280px] text-[#ff0000] font-bold">Відкриття та закриття файлів</li>
        </ul>

        <ul>
            <li className="absolute  top-[160px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[157px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[157px] text-[16px] left-[280px] text-[#ff0000] font-bold">Текстові файли</li>
        </ul>
        <ul>
            <li className="absolute  top-[200px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[197px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[197px] text-[16px] left-[280px] text-[#ff0000] font-bold">Файли CSV</li>
        </ul>
        <ul>
            <li className="absolute  top-[240px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[237px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[237px] text-[16px] left-[280px] text-[#ff0000] font-bold">Програма підрахунку слів</li>
        </ul>
        <ul>
            <li className="absolute  top-[280px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[277px] text-[16px] left-32 text-[#ff0000] font-bold">Теорія</li>
            <li className="absolute  top-[277px] text-[16px] left-[280px] text-[#ff0000] font-bold">Запис та читання архівних zip-файлів </li>
        </ul>
        <ul>
            <li className="absolute  top-[320px] left-20 "><img src="https://img.icons8.com/metro/26/ff0000/private2.png" /></li>
            <li className="absolute  top-[317px]  text-[16px] left-32 text-[#ff0000] font-bold">Проект</li>
            <li className="absolute  top-[317px] text-[16px] left-[280px] text-[#ff0000] font-bold">Робота з файлами</li>
        </ul>
    </div>
    }
</li>
</ul>
    </div>
  )
}

export default CoursePart
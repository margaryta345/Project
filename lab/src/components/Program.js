import React,{useState} from 'react'

function Program() {
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


  return (
    <div>
      <h1 className='flex items-center justify-center font-extrabold md:text-4xl text-[#FF0000] pb-10'>Програма курсу</h1>
  
      <ul className="flex ml-[22%] mb-[10px]">
      <li className={`relative flex flex-col items-center justify-center bg-[#FF0000] text-white text-xl font-extrabold w-[25%] ${menu1 ? 'h-[300px]' : 'h-[75px]'} rounded-l-[20px]`}>
      <span className="absolute top-5 left-5">Основи Python</span>
    {menu1 && <span className="absolute top-15 font-medium text-[13px] pl-[20px] pr-[30px]">Починаючи з фундаментальних принципів, зокрема синтаксису, ми вивчаємо алфавіт Python і намагаємося конструювати прості вирази та блоки коду, схожі на створення простих слів і речень. </span>}
  </li>
  <li className={`relative flex items-center justify-center bg-[#F5F5F5] text-black w-[50%] ${menu1 ? 'h-[300px]' : 'h-[75px]'} rounded-r-[20px]`}>

    <button onClick={handleButtonClick1} className="absolute top-3 right-3 text-red px-2 py-1 rounded border border-solid border-red-500 w-7 h-7">
      {!menu1 ? <img src="https://img.icons8.com/metro/12/FF0000/expand-arrow.png" /> :
        <img src="https://img.icons8.com/metro/12/FF0000/collapse-arrow.png" alt="collapse-arrow" />}
    </button>
    <span className="absolute top-3.5 right-12">Теми: 8</span>
    {menu1 && <div><span className="absolute  top-[70px] font-normal text-[13px] left-10 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[84px] h-[24px]">Введення</span>
    <span className="absolute  top-[70px] font-normal text-[13px] left-36 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[154px] h-[24px]"> Змінні та типи даних</span>
    <span className="absolute  top-[70px] font-normal text-[13px] left-80 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[80px] h-[24px] "> Консоль </span>
    <span className="absolute  top-[110px] font-normal text-[13px] left-10 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[164px] h-[24px]  "> Арифметичні операції</span>
    <span className="absolute  top-[110px] font-normal text-[13px] left-56 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[120px] h-[24px]   "> Умовні вирази </span>
    <span className="absolute  top-[150px] font-normal text-[13px] left-52 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[120px] h-[24px] ">Конструкція if </span>
    <span className="absolute  top-[150px] font-normal text-[13px] left-10 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[144px] h-[24px]  ">Операції з рядками</span>
    </div>
    }
  </li>
</ul>



<ul className="flex ml-[22%] mb-[10px]">
      <li className={`relative flex flex-col items-center justify-center bg-[#FF0000] text-white text-xl font-extrabold w-[25%] ${menu2 ? 'h-[380px]' : 'h-[75px]'} rounded-l-[20px]`}>
    <span className="absolute top-2 pl-5">Обєкто-орієнтоване програмування</span>
    {menu2 && <span className="absolute top-15 font-medium text-[13px] pl-[20px] pr-[30px]">Від основ – до майстерності. Вивчаймо принципи ООП, працюймо з класами та об'єктами, і освоюймо інші ключові аспекти. На завершення цього модуля ти будеш володіти важливими навичками ООП, готовими до впровадження в реальні проекти</span>}
  </li>
  <li className={`relative flex items-center justify-center bg-[#F5F5F5] text-black w-[50%] ${menu2 ? 'h-[380px]' : 'h-[75px]'} rounded-r-[20px]`}>

    <button onClick={handleButtonClick2} className="absolute top-3 right-3 text-red px-2 py-1 rounded border border-solid border-red-500 w-7 h-7">
      {!menu2 ? <img src="https://img.icons8.com/metro/12/FF0000/expand-arrow.png" /> :
        <img src="https://img.icons8.com/metro/12/FF0000/collapse-arrow.png" alt="collapse-arrow" />}
    </button>
    <span className="absolute top-3.5 right-12">Теми: 6</span>
    {menu2 && <div><span className="absolute  top-[70px] font-normal text-[13px] left-10 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[120px] h-[24px]">Класи та об'єкти</span>
    <span className="absolute  top-[70px] font-normal text-[13px] left-44 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[240px] h-[24px]">Інкапсуляція, атрибути та властивості</span>
    <span className="absolute  top-[110px] font-normal text-[13px] left-10 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[104px] h-[24px]">Наслідування</span>
    <span className="absolute  top-[110px] font-normal text-[13px] left-40 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[300px] h-[24px]"> Перевизначення функціоналу базового класу</span>
    <span className="absolute  top-[150px] font-normal text-[13px] left-10 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[236px] h-[24px]">Атрибути класу та статичні методи</span>
    <span className="absolute  top-[150px] font-normal text-[13px] left-62 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[240px] h-[24px]">Клас оbject. Представлення об'єкту</span>
    </div>
    }
  </li>
</ul>


<ul className="flex ml-[22%] mb-[10px]">
      <li className={`relative flex flex-col items-center justify-center bg-[#FF0000] text-white text-xl font-extrabold w-[25%] ${menu3 ? 'h-[300px]' : 'h-[75px]'} rounded-l-[20px]`}>
    <span className="absolute top-2 pl-5">Обробка помилок та винятків</span>
    {menu3 && <span className="absolute top-15 font-medium text-[13px] pl-[20px] pr-[30px]">У цій частині ви оволодієте технікою обробки помилок та винятків у Python, що підвищить надійність та стабільність ваших програм.</span>}
  </li>
  <li className={`relative flex items-center justify-center bg-[#F5F5F5] text-black w-[50%] ${menu3 ? 'h-[300px]' : 'h-[75px]'} rounded-r-[20px]`}>

    <button onClick={handleButtonClick3} className="absolute top-3 right-3 text-red px-2 py-1 rounded border border-solid border-red-500 w-7 h-7">
      {!menu3 ? <img src="https://img.icons8.com/metro/12/FF0000/expand-arrow.png" /> :
        <img src="https://img.icons8.com/metro/12/FF0000/collapse-arrow.png" alt="collapse-arrow" />}
    </button>
    <span className="absolute top-3.5 right-12">Теми: 3</span>
    {menu3 && <div>
    <span className="absolute  top-[70px] font-normal text-[13px] left-10 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[210px] h-[24px]">Конструкція try...except...finally</span>
    <span className="absolute  top-[70px] font-normal text-[13px] left-64 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[260px] h-[24px]">Except та обробка різних типів винятків</span>
    <span className="absolute  top-[110px] font-normal text-[13px] left-10 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[340px] h-[24px]">Генерація винятків та створення своїх типів винятків</span>
    </div>
    }
  </li>
</ul>


<ul className="flex ml-[22%] mb-[10px]">
      <li className={`relative flex flex-col items-center justify-center bg-[#FF0000] text-white text-xl font-extrabold w-[25%] ${menu4 ? 'h-[340px]' : 'h-[75px]'} rounded-l-[20px]`}>
    <span className="absolute top-2 pl-5">Списки, кортежі та словники</span>
    {menu4 && <span className="absolute top-15 font-medium text-[13px] pl-[20px] pr-[30px]">В цьому розділі ви опануєте навички роботи зі списками, кортежами та словниками для ефективного структурувати та оптимізувати обробку інформації.</span>}
  </li>
  <li className={`relative flex items-center justify-center bg-[#F5F5F5] text-black w-[50%] ${menu4 ? 'h-[340px]' : 'h-[75px]'} rounded-r-[20px]`}>

    <button onClick={handleButtonClick4} className="absolute top-3 right-3 text-red px-2 py-1 rounded border border-solid border-red-500 w-7 h-7">
      {!menu4 ? <img src="https://img.icons8.com/metro/12/FF0000/expand-arrow.png" /> :
        <img src="https://img.icons8.com/metro/12/FF0000/collapse-arrow.png" alt="collapse-arrow" />}
    </button>
    <span className="absolute top-3.5 right-12">Теми: 4</span>
    {menu4 && <div>
    <span className="absolute  top-[70px] font-normal text-[13px] left-12 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[66px] h-[24px]">Списки</span>
    <span className="absolute  top-[70px] font-normal text-[13px] left-32 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[70px] h-[24px]">Кортежі</span>
    <span className="absolute  top-[70px] font-normal text-[13px] left-52 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[80px] h-[24px]">Словники</span>
    <span className="absolute  top-[70px] font-normal text-[13px] left-76 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[80px] h-[24px]">Множини</span>
    </div>
    }
  </li>
</ul>


<ul className="flex ml-[22%] mb-[10px]">
      <li className={`relative flex flex-col items-center justify-center bg-[#FF0000] text-white text-xl font-extrabold w-[25%] ${menu5 ? 'h-[340px]' : 'h-[75px]'} rounded-l-[20px]`}>
    <span className="absolute top-5 left-5">Рядки та модулі</span>
    {menu5 && <span className="absolute top-15 font-medium text-[13px] pl-[20px] pr-[30px]">Для полегшення та оптимізації роботи ознайомимося з  операціями з рядками для ефективного форматування коду. Після цього ми вивчатимемо модулі random та math, де освоїмо генерацію випадкових чисел та математичні операції.</span>}
  </li>
  <li className={`relative flex items-center justify-center bg-[#F5F5F5] text-black w-[50%] ${menu5 ? 'h-[340px]' : 'h-[75px]'} rounded-r-[20px]`}>

    <button onClick={handleButtonClick5} className="absolute top-3 right-3 text-red px-2 py-1 rounded border border-solid border-red-500 w-7 h-7">
      {!menu5 ? <img src="https://img.icons8.com/metro/12/FF0000/expand-arrow.png" /> :
        <img src="https://img.icons8.com/metro/12/FF0000/collapse-arrow.png" alt="collapse-arrow" />}
    </button>
    <span className="absolute top-3.5 right-12">Теми: 5</span>
    {menu5 && <div>
    <span className="absolute  top-[70px] font-normal text-[13px] left-10 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[130px] h-[24px]">Робота з рядками</span>
    <span className="absolute  top-[70px] font-normal text-[13px] left-44 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[160px] h-[24px]">Основні методи рядків</span>
    <span className="absolute  top-[110px] font-normal text-[13px] left-10 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[110px] h-[24px]">Форматування</span>
    <span className="absolute  top-[110px] font-normal text-[13px] left-40 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[130px] h-[24px]">Модуль random</span>
    <span className="absolute  top-[150px] font-normal text-[13px] left-10 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[100px] h-[24px]">Модуль math</span>
    </div>
    }
  </li>
</ul>


<ul className="flex ml-[22%] mb-[10px]">
      <li className={`relative flex flex-col items-center justify-center bg-[#FF0000] text-white text-xl font-extrabold w-[25%] ${menu6 ? 'h-[340px]' : 'h-[75px]'} rounded-l-[20px]`}>
    <span className="absolute top-5 left-5">Робота з файлами</span>
    {menu6 && <span className="absolute top-15 font-medium text-[13px] pl-[20px] pr-[30px]">В цьому розділі ми вивчимо основи роботи з файлами в Python, включаючи відкриття та закриття файлів, опрацювання текстових файлів та формату CSV. Також розглянемо програму для підрахунку слів та навчимося записувати та читати архівні zip-файли.</span>}
  </li>
  <li className={`relative flex items-center justify-center bg-[#F5F5F5] text-black w-[50%] ${menu6 ? 'h-[340px]' : 'h-[75px]'} rounded-r-[20px]`}>

    <button onClick={handleButtonClick6} className="absolute top-3 right-3 text-red px-2 py-1 rounded border border-solid border-red-500 w-7 h-7">
      {!menu6 ? <img src="https://img.icons8.com/metro/12/FF0000/expand-arrow.png" /> :
        <img src="https://img.icons8.com/metro/12/FF0000/collapse-arrow.png" alt="collapse-arrow" />}
    </button>
    <span className="absolute top-3.5 right-12">Теми: 5</span>
    {menu6 && <div>
    <span className="absolute  top-[70px] font-normal text-[13px] left-10 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[200px] h-[24px]">Відкриття та закриття файлів</span>
    <span className="absolute  top-[70px] font-normal text-[13px] left-64 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[120px] h-[24px]">Текстові файли</span>
    <span className="absolute  top-[110px] font-normal text-[13px] left-10 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[90px] h-[24px]">Файли CSV</span>
    <span className="absolute  top-[110px] font-normal text-[13px] left-36 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[180px] h-[24px]">Програма підрахунку слів</span>
    <span className="absolute  top-[150px] font-normal text-[13px] left-10 text-[#000000] pl-3 bg-[#dadada] rounded-xl w-[250px] h-[24px]">Запис та читання архівних zip-файлів</span>
    </div>
    }
  </li>
</ul>
    </div>
  )
}

export default Program
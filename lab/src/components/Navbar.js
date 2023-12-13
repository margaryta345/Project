import React,{useState} from 'react'
import Logo from '../media/cutedLogo.png'
import MyBack from '../components/Backgroung'
import{Link} from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { BsHouseDoor } from "react-icons/bs";
import { RiGroupLine } from "react-icons/ri";
import { RiPresentationLine } from "react-icons/ri";
import { GoTasklist } from "react-icons/go";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1600px] pl-10 pr-10 text-green'>  
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div className='pl-[1050px] block'>
        <MdAccountCircle color='white' size={40} />
      </div>
      <div onClick={handleNav}>
        <TiThMenu color='white' size={40} />
      </div>
      {nav && (
        <div className='fixed left-0 top-0 w-full bg-[#ffffff] ease-in-out duration-500 h-full z-10 '>
          <div className='pl-[1440px] pt-[25px] md:flex hover:text-red-500'><AiOutlineClose color='black' size={40} onClick={handleNav}/></div>
          <ul className='pt-32 uppercase flex flex-col items-center h-full w-full'>
  <li className='p-2 text-center flex items-center text-3xl font-extrabold hover:text-red-500 hover:translate-x-5 transition-transform duration-300'>
    <BsHouseDoor size={30} className='mr-1'/> Головна
  </li>
  <li className='p-3 text-center flex items-center text-3xl font-extrabold mr-20 hover:text-red-500 hover:translate-x-5 transition-transform duration-300'>
    <RiPresentationLine size={30} className='mr-1'  />Курс
  </li>
  <li className='p-3 text-center flex items-center text-3xl font-extrabold mr-4  hover:text-red-500 hover:translate-x-5 transition-transform duration-300'>
    <RiGroupLine size={30} className='mr-1'  />Про нас
  </li>
  <li className='p-3 text-center flex items-center text-3xl font-extrabold mr-20 hover:text-red-500 hover:translate-x-5 transition-transform duration-300'>
    <GoTasklist size={30} className='mr-1'/>Тест
  </li>
</ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import RedLogo from "../media/RegLogo.png";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { BsHouseDoor } from "react-icons/bs";
import { RiGroupLine } from "react-icons/ri";
import { RiPresentationLine } from "react-icons/ri";
import { GoTasklist } from "react-icons/go";

function NavbarCourse() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky top-0">
      <div>
        <ul className="flex flex-row border border-b-2 bg-[#ffffff] ">
          <li className="w-[18%] p-[1%]">
            <img src={RedLogo} alt="Logo" />
          </li>
          <li className="pl-[75%] block pt-[1%]">
            <MdAccountCircle color="red" size={40} />
          </li>
          <li onClick={handleNav} className="pt-[1%]">
            <TiThMenu color="red" size={40} />
          </li>
        </ul>

        {nav && (
          <div className="fixed left-0 top-0 w-full bg-[#ffffff] ease-in-out duration-500 h-full z-10 ">
            <div className="pl-[1440px] pt-[25px] md:flex hover:text-red-500">
              <AiOutlineClose color="black" size={40} onClick={handleNav} />
            </div>
            <ul className="pt-32 uppercase flex flex-col items-center h-full w-full">
              <li className="p-2 text-center flex items-center text-3xl font-extrabold hover:text-red-500 hover:translate-x-5 transition-transform duration-300">
                <BsHouseDoor size={30} className="mr-1" /> Головна
              </li>
              <li className="p-3 text-center flex items-center text-3xl font-extrabold mr-20 hover:text-red-500 hover:translate-x-5 transition-transform duration-300">
                <RiPresentationLine size={30} className="mr-1" />
                Курс
              </li>
              <li className="p-3 text-center flex items-center text-3xl font-extrabold mr-4  hover:text-red-500 hover:translate-x-5 transition-transform duration-300">
                <RiGroupLine size={30} className="mr-1" />
                Про нас
              </li>
              <li className="p-3 text-center flex items-center text-3xl font-extrabold mr-20 hover:text-red-500 hover:translate-x-5 transition-transform duration-300">
                <GoTasklist size={30} className="mr-1" />
                Тест
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavbarCourse;

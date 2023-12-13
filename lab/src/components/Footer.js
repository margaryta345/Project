import React from 'react'
import LogoB from '../media/logob.png'
import LogoT from '../media/cutedLogo.png'

function Footer() {
  return (
    <div className='bg-[#580000]  w-[100%] h-auto'>
  <div className="flex">
  <ul className="text-white font-medium text-m pl-24 mt-[50px] mb-[50px]">
    <li className="pb-4">Про нас</li>
    <li className="pb-4">Початковий тест</li>
    <li>Курс</li>
  </ul>

  <ul className="flex items-center flex-col justify-center ml-[350px]">
  <li className="flex">
    <img className="mr-1 w-16" src={LogoB} alt="LogoB" />
    <img className="w-[200px] h-auto" src={LogoT} alt="LogoT" />
  </li>
  <li className='mt-2 text-white font-medium text-m  '>2024</li>
</ul>

<ul className="flex items-center flex-col justify-center ml-[350px]">
  <li className="flex">
    <button className=' pt-2 pb-2 pl-12 pr-12 rounded-lg  text-white font-medium text-m   bg-[red]'>Зареєстуватись</button>
  </li>
  <li className='mt-2 pl-4 text-white font-medium text-m  '>Увійти в кабінет</li>
</ul>

</div>

    </div>
  )
}

export default Footer
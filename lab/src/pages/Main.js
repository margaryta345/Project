import React,{useState} from 'react'
import MyBack from '../components/Backgroung'
import Navbar from '../components/Navbar'
import Cyber from '../media/Cyber.mp4'
import CyberInfo from '../components/CyberInfo'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Videos from '../components/Videos';
import Comunity from '../components/Comunity'
import Program from '../components/Program'

function Main() {
    const [isClicked, setIsClicked] = useState(false);
    const handleArrowClick = () => {
      setIsClicked(!isClicked)
    }
  return (
    <div className='relative'>
    <MyBack />
    <div className='absolute top-0 left-0 w-full  flex items-center justify-center'>
      <Navbar/>
      <div>
        <h1 className='absolute md:top-[250px] left-0 w-full  flex items-center justify-center text-white font-extrabold md:text-6xl '>Маєш бажання вчити пайтон?</h1>
        <p className='absolute md:top-[320px]  left-0 w-full  flex items-center justify-center text-white font-extrabold md:text-6xl '>Тоді почнемо</p>
        <p className='absolute md:top-[440px] left-0 pl-12 w-full  flex items-center justify-center text-white font-extrabold md:text-6xl  animate-bounce'>
      <MdKeyboardDoubleArrowDown/>
    </p>
      </div>
    </div>
    <h1 className=' flex items-center justify-center font-extrabold md:text-4xl text-[#FF0000] '>Що ти отримаєш на курсі Python basic</h1>
    <h2 className='flex items-center justify-center mr-[350px] ml-[370px] mt-[20px] text-center md:text-xl text-black '>На нашому курсі ви отримаєте унікальну можливість вивчити мову програмування Python з нуля. Це не просто навчання синтаксису, а повноцінний вступ у захопливий світ програмування, де тільки ваша уява є межею.</h2>

  <Videos/>
  <div className=' items-center justify-center'><video width="100%" height="auto" autoPlay loop muted>
    <source src={Cyber} type="video/mp4" />
  </video>
  <div>
  <h1 className='flex items-center justify-center font-extrabold md:text-4xl text-[#FF0000] '>Плюси професії Python-розробник</h1>
  <h2 className='flex items-center justify-center mr-[350px] ml-[350px] mt-[20px] text-center md:text-xl text-black mb-5' >Python входить до топ-3 мов програмування. Він дозволяє працювати з даними, а також створювати вебсайти та застосунки. Наприклад, серверна частина YouTube, Instagram, Pinterest написана на Python.
     А ще його обожнюють у Tesla, NASA, IBM</h2></div>
  </div>
  <CyberInfo/>
  <Comunity/>
  <Program/>
  </div>

  )
}

export default Main
import React,{useState} from 'react'
import MyBack from '../media/2.png'
import Navbar from '../components/Navbar'
import SecondA from '../media/1.png'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function AbouUs() {
  return (
    <div>
         <img src={MyBack} />
    <div className='absolute top-0 left-0 w-full  flex items-center justify-center'>
      <Navbar/>
      <div>
        <h1 className='absolute md:top-[320px] left-0 w-full  flex items-center justify-center text-white font-extrabold md:text-6xl '>Про нас</h1>
        <p className='absolute md:top-[440px] left-0 w-full  flex items-center justify-center text-white font-extrabold md:text-6xl  animate-bounce'>
      <MdKeyboardDoubleArrowDown/>
    </p>
</div>
</div>

<h1 className='flex items-center justify-center font-extrabold md:text-4xl text-[#FF0000] pb-10'> Про розробника та  ідею проекту </h1>
<h2 className='flex items-center justify-center mr-[370px] ml-[380px] mt-[20px] text-center md:text-xl text-black'>Ласкаво просимо до нашого веб-сервісу!
Я є студенткою Національного технічного університету «Харківського політехнічного інституту». У мене виникла ідея створити цей веб-сервіс на основі мого власного досвіду навчання. Як студентці мені було складно знаходити якісні ресурси для вивчення Python, особливо тому, що російськомовна інформація важко сприймалася мною.
Саме тому я вирішила створити цей курс. На цьому веб-ресурсі студенти та школярі можуть вивчити Python безкоштовно та з задоволенням. Одне з головних переваг - це зручна навігація та зрозуміло пояснений матеріал. Я розумію, наскільки важливо мати доступ до навчальних ресурсів, які відповідають потребам , тому я намагалася зробити цей курс максимально корисним і зрозумілим для кожного.
Крім того , я отримувала значну підтримку та мотивацію від доцентки кафедри "Комп'ютерного моделювання процесів та систем" університету НТУ "ХПІ", що значно полегшило процес створення курсу, за що я хочу подякувати.</h2>
    
<img src={SecondA} />
    
    
<h1 className='flex items-center justify-center font-extrabold md:text-4xl text-[#FF0000] pb-10'> Для кого цей курс </h1>
<h2 className='flex items-center justify-center mr-[400px] ml-[400px] mt-[20px] text-center md:text-xl text-black'>Курс "Python Basic" був розроблений для абсолютних новачків у програмуванні та для тих, хто має бажання освоїти та оволодіти мовою програмування Python. Ця мова є однією з найпопулярніших мов програмування у світі . Вона відома своєю простотою, читабельністю коду та активною спільнотовою підтримкою.

Особливо важливо зазначити, що цей курс абсолютно безкоштовний та був створений за підтримки національно технічного університету «Харківського політехнічного інституту» у вигляді дипломної роботи.</h2>
    
    </div>
  )
}

export default AbouUs
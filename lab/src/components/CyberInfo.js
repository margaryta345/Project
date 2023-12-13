import React from 'react'

function CyberInfo() {
  return (
    <div>
      <ul className="flex space-x-8 ml-[22%] mt-8">
      <li className="flex flex-col items-start ">
  <span className="flex items-center text-xl ">
    <img src="https://img.icons8.com/metro/30/FF0000/expensive-2.png" className="mr-2" />
    2800$
  </span>
  <span className='w-[220px] items-center'>Середня зарплатня Python-розробника в Україні</span>
</li>
  <li className="flex  flex-col items-start">
    <span className='flex items-center text-xl'>
    <img src="https://img.icons8.com/ios-filled/30/FF0000/men-age-group-4.png" className="mr-1" />
    Ідеально для новачка
  </span>
  <span className='w-[300px] items-center'>Найпростіша мова програмування для вивчення з нуля</span>
</li>
<li className="flex  flex-col items-start">
    <span className='flex items-center text-xl'>
    <img  src="https://img.icons8.com/ios-filled/30/FF0000/groups.png" className="mr-2" />
    170+ вакансій
  </span>
  <span className='w-[270px] items-center'>Для Python-розробників щомісяця. І це лише на одному сайті</span>
</li>
</ul>

<ul className="flex space-x-8 ml-[22%] mt-8">
      <li className="flex flex-col items-start ">
  <span className="flex items-center text-xl ">
  <img  src="https://img.icons8.com/ios-filled/30/FF0000/video-conference.png " className="mr-2" />
    Віддалена робота
  </span>
  <span className='w-[220px] items-center'>75% вакансій пропонують працювати віддалено, 15% – релокейт</span>
</li>

  <li className="flex  flex-col items-start">
    <span className='flex items-center text-xl'>
    <img  src="https://img.icons8.com/ios-filled/28/FF0000/flipboard.png" className="mr-1" />
    Цікаві проєкти
  </span>
  <span className='w-[300px] items-center'>Вебсайти та застосунки,соцмережі, онлайн-сервіси, аналіз даних, нейромережі тощо</span>
</li>

<li className="flex  flex-col items-start">
    <span className='flex items-center text-xl'>
    <img src="https://img.icons8.com/external-photo3ideastudio-solid-photo3ideastudio/30/FF0000/external-gym-building-photo3ideastudio-solid-photo3ideastudio.png" />
    Найкращі умови
  </span>
  <span className='w-[270px] items-center'>Навчання, медична страховка, спортзал, відпустки та дей офи</span>
</li>
</ul>

    </div>
  )
}

export default CyberInfo
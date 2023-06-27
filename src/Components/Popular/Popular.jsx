import React from 'react'
import popular from '@/Data/popular.json'
import Image from 'next/image'
import {AiFillStar, AiOutlineShoppingCart} from 'react-icons/ai'
function Popular() {
  return (
    <div>
     <div className='text-black text-3xl text-center md:text-left'>
     Popular <span className='underline decoration-solid decoration-orange decoration-4 '>Now</span>
     </div>
     <div className='flex md:flex-row  flex-col items-center flex-wrap gap-y-10 justify-between mt-5' >
     {
      popular.map((item)=>(
        <div key={item.id} className='p-3 shadow-2xl rounded-md'>
        <div className='absolute p-1 m-2 bg-white text-brown border-2 solid border-lightorange flex flex-row items-center rounded-2xl'>{item.rating}<AiFillStar className='text-yellow-500'/></div>
        <Image src={item.image} height={200 } width={300}/>
        <div className='flex flex-row justify-between items-center mt-3'>
        <div className='text-2xl text-brown'>{item.name}</div>
        <div className='text-2xl text-brown'>{item.price}</div>
        </div>
        <div className='flex flex-row justify-between items-center mt-3'>

        <div className='flex flex-row items-center gap-x-2'>
          <div className='solid border-2 border-lightorange text-lightorange p-1 rounded-xl'>{item.hot}</div>
          <div className='solid border-2 border-lightorange text-lightorange p-1 rounded-xl'>{item.cold}</div>
        </div>
        <button className='p-2 bg-orange rounded-full hover:bg-transparent hover:border-2 hover:border-orange hover:solid hover:text-orange'><AiOutlineShoppingCart className='text-xl text-white hover:text-orange'/></button>
        </div>
        </div>
      ))
     }
     </div>
    </div>
  )
}

export default Popular
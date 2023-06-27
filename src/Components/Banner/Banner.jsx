import Image from 'next/image'
import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
function Banner() {
  return (
    <div className='container mx-auto flex md:flex-row flex-col items-center gap-y-10 justify-between gap-x-44'>
        <div className='flex flex-col gap-y-6'>
        <div className='text-5xl'>
        Enjoy your <span className='text-orange'>coffee</span> <br></br>before your activity
        </div>
        <div className='text-xl text-gray-500'>Boost your productivity and build your <br/> mood with a glass of coffee in the morning </div>
        <div className='flex flex-row gap-x-7'>
          <button className='bg-brown w-max h-max flex flex-row items-center justify-between text-white p-4 rounded-3xl gap-x-3'>Order Now<AiOutlineShoppingCart className=' text-orange  w-7 rounded-full'
          /></button>
          <button className='text-orange text-xl'>More Menu</button>

        </div>

        </div>
        <div>
          <Image src='/caffe/hero.png' width={500} height={400}/>
        </div>
    </div>
  )
}

export default Banner
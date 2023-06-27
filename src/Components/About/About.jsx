import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className='container mx-auto flex md:flex-row flex-col items-center gap-y-10 justify-evenly gap-x-44'>
      <div>
          <Image src='/about.png' width={359} height={493}/>
        </div>
        <div className='flex flex-col gap-y-6 text-center md:text-left'>
        <div className='text-4xl'>About <span className='underline decoration-solid decoration-orange decoration-4 '>Us</span></div>
        <div className='text-2xl  text-left md:text-center'>
        We provide quality coffee, and ready to deliver.        </div>
        <div className='text-xl text-gray-500 text-center md:text-left'>We are a company that makes and distributes <br/> delicious drinks. our main product is made with a<br/> secret recipe and available in stores worldwide. </div>
        <div className='flex flex-row gap-x-7'>
          <button className='text-orange text-xl bg-brown p-2 rounded-xl '>Get your coffee</button>
        </div>
        </div>
    </div>
  )
}

export default About
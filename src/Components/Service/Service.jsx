import React from 'react'
import service from '@/Data/service.json'
import Image from 'next/image'
function Service() {
  return (
    <div>
    <div className='text-black text-3xl '>
    How to use delivery  <span className='underline decoration-solid decoration-orange decoration-4 '>service</span>
     </div>
     <div className='mt-5 flex flex-row items-center justify-around'>
      {
        service.map((item)=>(
            <div key={item.id} className='flex flex-col items-center justify-center '>
              <Image src={item.image} width={159} height={159}/>
              <div className='mt-3 flex flex-col items-center'>
              <div className='text-brown text-2xl'>{item.name}</div>
              <div className='text-brown mt-2 text-lg'>{item.describe}</div>
              </div>
            </div>
        ))
      }
     </div>
    </div>
  )
}

export default Service
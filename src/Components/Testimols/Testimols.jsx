import React from 'react'
import testimols from '@/Data/testimols.json'
import Image from 'next/image'

function Testimols() {
  return (
    <div>
    <div>
        
    </div>
    <div className='text-4xl text-center'>What they say about us</div>
    <div className='text-center text-gray-500 mt-5'>We always provide the best service <br/>and always maintain the quality of<br/> coffee</div>
    <div className='flex md:flex-row  flex-col items-center flex-wrap gap-y-10 justify-around mt-5' >
      {
        testimols.map((item)=>(
            <div key={item.id} className='flex flex-col items-center justify-center  '>
              <Image src={item.image} width={159} height={159} />
              <div className='mt-36 flex flex-col items-center absolute text-left bg-lightorange w-48 rounded-xl '>
              <div className='text-brown text-base'>{item.name}</div> 
              <div className='text-brown mt-2 text-sm text-center'>{item.describe}</div>
              </div>
            </div>
        ))
      }
     </div>
    </div>
  )
}

export default Testimols
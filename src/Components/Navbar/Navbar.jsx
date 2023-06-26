import React from 'react'
function Navbar() {
  return (
    <div className='flex flex-row justify-between items-center p-5 container mx-auto'>
    <div><img src='caffe/Logo.svg'/></div>
    <div className='flex flex-row items-center gap-x-8'>
    <div>About us</div>
    <div>Our Product</div>
    <div>Delivery</div>
    </div>
    <div className='flex flex-row gap-x-8'>
      <input type='text' placeholder='Cappuccino ' className='bg-white shadow-lg placeholder:flex placeholder:items-center placeholder:justify-center placeholder:p-1 rounded-lg h-10 placeholder:mt-3'/>
      <div><img src='caffe/icon.svg'/></div>
    </div>
    </div>
  )
}

export default Navbar
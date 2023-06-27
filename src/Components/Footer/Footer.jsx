import Image from 'next/image'
import React from 'react'
import {BsGithub,BsInstagram} from 'react-icons/bs'
import {BiLogoLinkedin} from 'react-icons/bi'
function Footer() {
  return (
    <div className='m-10'>
     <div className='text-center text-brown text-4xl'>Social Media</div>
     <div className='flex flex-row justify-between mt-10'>
        <div> Developer by Asim Safarli</div>
        <div className='flex flex-row items-center justify-evenly gap-x-7'>
            <div className='text-2xl'><a href='https://github.com/AsimSafarli'><BsGithub/></a></div>
            <div className='text-2xl'><a href='https://www.linkedin.com/in/asim-seferli-272164202/'><BiLogoLinkedin/></a></div>
            <div className='text-2xl'><a href='https://www.instagram.com/asimsafar/'/><BsInstagram/></div>
        </div>
     </div>
    </div>
  )
}

export default Footer
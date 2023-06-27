import About from '@/Components/About/About'
import Banner from '@/Components/Banner/Banner'
import Menu from '@/Components/Menu/Menu'
import Navbar from '@/Components/Navbar/Navbar'
import Popular from '@/Components/Popular/Popular'
import Service from '@/Components/Service/Service'
import Image from 'next/image'

export default function Home() {
  return (
   
   <div className='flex flex-col justify-center  gap-y-16 container mx-auto'>
       <Navbar/>
       <Banner/>
       <Popular/>
       <Service/>
       <About/>
       <Menu/>
   </div>
  )
}

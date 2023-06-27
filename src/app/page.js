import About from '@/Components/About/About'
import Banner from '@/Components/Banner/Banner'
import Footer from '@/Components/Footer/Footer'
import Menu from '@/Components/Menu/Menu'
import Navbar from '@/Components/Navbar/Navbar'
import Popular from '@/Components/Popular/Popular'
import Service from '@/Components/Service/Service'
import Testimols from '@/Components/Testimols/Testimols'
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
       <Testimols/>
       <Footer/>
   </div>
  )
}

import Banner from '@/Components/Banner/Banner'
import Navbar from '@/Components/Navbar/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
   
   <div className='flex flex-col justify-center  gap-y-16 '>
       <Navbar/>
       <Banner/>

   </div>
  )
}

import Image from "next/image";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center p-5 container mx-auto">
      <div>
        <Image 
        src="/caffe/Logo.svg"
        width={60}
        height={48} />
      </div>
      <div className="flex flex-row items-center gap-x-8">
        <div className="hover:text-orange">About us</div>
        <div className="hover:text-orange">Our Product</div>
        <div className="hover:text-orange">Delivery</div>
      </div>
      <div className="flex flex-row gap-x-8">
        <input
          type="text"
          placeholder="Cappuccino "
          className="bg-white shadow-lg placeholder:flex placeholder:items-center placeholder:justify-center placeholder:p-1 rounded-lg h-10 placeholder:mt-3"
        />
        <div>
        <button className='p-2 bg-orange rounded-full hover:bg-transparent hover:border-2 hover:border-orange hover:solid hover:text-orange'><AiOutlineShoppingCart className='text-xl text-white hover:text-orange'/></button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

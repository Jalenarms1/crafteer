import React from 'react'
import { BiArrowBack, BiRecycle } from 'react-icons/bi'
import { CgPrinter } from 'react-icons/cg'
import { FaArrowCircleLeft, FaMailBulk } from 'react-icons/fa'
import { FaCircleArrowDown } from 'react-icons/fa6'
import { HiArrowPath } from 'react-icons/hi2'
import { IoColorPalette, IoShirt } from 'react-icons/io5'

const OurServices = () => {
  return (
    <div className="h-screen bg-zinc-50 flex flex-col justify-center items-center font-sans gap-10 px-20">
        <div className="flex flex-col gap-5 text-center">
            <p className="text-6xl font-semibold">Our Services</p>
            <p className="text-zinc-400">Comprehensive DTF printing solutions tailored to your needs</p>
        
        </div>

        <div className="grid grid-cols-4 gap-5 w-full">
            <div className="py-8 bg-white rounded-md shadow-sm shadow-zinc-200 text-amber-800 p-5 flex flex-col gap-10">
                <IoShirt className='text-5xl'/>
                <p className="text-black font-semibold text-lg">Custom Apparel</p>
                <p className="text-base text-zinc-400">Print on t-shirts, hoodies, jackets, and more with vibrant, long-lasting colors.</p>
            </div>
            <div className="py-8 bg-white rounded-md shadow-sm shadow-zinc-200 p-5 flex flex-col gap-10 text-amber-800">
                <CgPrinter className='text-5xl'/>
                
                <p className="text-black font-semibold text-lg">Direct-To-Film Printing</p>
                <p className="text-base text-zinc-400">High-quality <span className="text-amber-800 font-medium">DTF transfers</span> - <span className="text-amber-800 font-medium">gang sheets</span> or <span className="text-amber-800 font-medium">single sheets</span>.</p>
            </div>
            <div className="py-8 bg-white rounded-md shadow-sm shadow-zinc-200 p-5 flex flex-col gap-10 text-amber-800">
                <IoColorPalette className='text-5xl'/>
                <p className="text-black font-semibold text-lg">Full Color Designs</p>
                <p className="text-base text-zinc-400">No color limitations. Bring your most creative designs to life with unlimited colors.</p>
            </div>
            <div className="py-8 bg-white rounded-md shadow-sm shadow-zinc-200 p-5 flex flex-col gap-10 text-amber-800">
                <HiArrowPath className='text-5xl'/>
                <p className="text-black font-semibold text-lg">Bulk Orders</p>
                <p className="text-base text-zinc-400">Discounted rates for bulk orders. Perfect for businesses and events.</p>
            </div>
        </div>
    </div>
  )
}

export default OurServices

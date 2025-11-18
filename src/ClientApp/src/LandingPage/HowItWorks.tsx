import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const HowItWorks = () => {
  return (
    <div className="h-screen bg-zinc-800 flex flex-col justify-center items-center font-sans gap-10 px-20">
        <div className="flex flex-col gap-5 text-center">
            <p className="text-6xl text-white font-semibold">How it Works</p>
            <p className="text-zinc-400">Simple, transparent process from design to delivery</p>
        
        </div>

        <div className="grid grid-cols-4 gap-5 w-full">
            <div className="py-8 bg-white rounded-md shadow-sm shadow-zinc-200 text-amber-800 p-5 flex flex-col gap-10 relative">
                <div className="w-10 h-10 rounded-full bg-amber-800 text-white flex justify-center items-center">1</div>
                <p className="text-black font-semibold text-lg">Upload Your Design</p>
                <p className="text-base text-zinc-400">Submit your high-quality artwork in any format.</p>
                <div className="absolute right-[-15px] top-1/2 text-white">
                    <FaArrowRightLong className='text-shadow-md text' />
                </div>
            </div>
            <div className="py-8 bg-white rounded-md shadow-sm shadow-zinc-200 p-5 flex flex-col gap-10 text-amber-800 relative">
                <div className="w-10 h-10 rounded-full bg-amber-800 text-white flex justify-center items-center">2</div>

                <p className="text-black font-semibold text-lg">Choose Your Products</p>
                <p className="text-base text-zinc-400">Select garments, colors, and quantities you need.</p>
                <div className="absolute right-[-15px] top-1/2 text-white">
                    <FaArrowRightLong className='text-shadow-md text' />
                </div>
            </div>
            <div className="py-8 bg-white rounded-md shadow-sm shadow-zinc-200 p-5 flex flex-col gap-10 text-amber-800 relative">
                <div className="w-10 h-10 rounded-full bg-amber-800 text-white flex justify-center items-center">3</div>

                <p className="text-black font-semibold text-lg">Review & Approve</p>
                <p className="text-base text-zinc-400">Check your design mockup before we print.</p>
                <div className="absolute right-[-15px] top-1/2 text-white">
                    <FaArrowRightLong className='text-shadow-md text' />
                </div>
            </div>
            <div className="py-8 bg-white rounded-md shadow-sm shadow-zinc-200 p-5 flex flex-col gap-10 text-amber-800 relative">
                <div className="w-10 h-10 rounded-full bg-amber-800 text-white flex justify-center items-center">4</div>

                <p className="text-black font-semibold text-lg">Ship or Pickup</p>
                <p className="text-base text-zinc-400">Receive your order in 2-3 business days, or within 24 hours for pickup orders</p>
            </div>
        </div>
        <button className="w-2/5 py-2 rounded-full text-base font-semibold text-white border-0 active:scale-[.95] bg-amber-800 shadow-md shadow-amber-600">Get Started</button>
    </div>
  )
}

export default HowItWorks

import React from 'react'
import demo1 from "../assets/demo1.png"
import demo2 from "../assets/demo2.png"
import demo3 from "../assets/demo3.png"
import demo4 from "../assets/demo4.png"
import demo5 from "../assets/demo5.png"
import { BiChevronRight } from 'react-icons/bi'

const OurWork = () => {
    const demoImages = [
        demo1,
        demo2,
        demo3,
        demo4,
        demo5
    ]

  return (
    <div className="h-screen bg-zinc-100 flex  justify-center items-center font-serif gap-10 px-20 ">
        <div className="flex flex-col gap-5 text-center w-1/2 h-screen justify-center items-center relative">
            <p className="text-6xl font-semibold text-amber-800">Our Work</p>
            <p className="text-zinc-400">See what we’ve made for creators, brands, and small businesses just like yours. From DTF transfers to custom tees and hoodies, we help your designs stand out on every surface.</p>
            <div className="flex w-full justify-end items-end">
                <button className='border border-solid absolute bottom-5 right-0 border-zinc-300 rounded-md px-4 py-2 flex justify-center items-center gap-2 active:scale-[.97] w-fit cursor-pointer'>
                    <p>See more</p>
                    <BiChevronRight />
                </button>

            </div>
        </div>

        <div className='flex w-1/2 flex-wrap h-screen'>
            <img src={demo1} className='w-[275px]'/>
            <img src={demo2} className='w-[275px]'/>
            <img src={demo3} className='w-[275px]'/>
            <img src={demo4} className='w-[275px]'/>


        </div>
    </div>
  ) 

  return (
    <div className="h-screen bg-zinc-100 flex flex-col justify-center items-center font-sans gap-10 px-20 ">
        <div className="flex flex-col gap-5 text-center">
            <p className="text-6xl font-semibold">Our Work</p>
            <p className="text-zinc-400">From design templates to custom prints</p>
        
        </div>

        <div className=' overflow-x-scroll w-[90vw]'>
            <div className="flex  gap-">
                {demoImages.map((i) => (
                    <>
                        <div className=''>
                            <img src={i} className='h-96 min-w-[240px] '/>

                        </div>
                    
                    </>
                ))}
                {demoImages.map((i) => (
                    <>
                        <div className=''>
                            <img src={i} className='h-96 min-w-[240px] '/>

                        </div>
                    
                    </>
                ))}
                {demoImages.map((i) => (
                    <>
                        <div className=''>
                            <img src={i} className='h-96 min-w-[240px] '/>

                        </div>
                    
                    </>
                ))}
                
            </div>


        </div>
    </div>
  )
}

export default OurWork

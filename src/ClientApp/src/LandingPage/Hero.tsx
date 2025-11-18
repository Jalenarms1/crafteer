import React from 'react'
import shirtImg from "../assets/shirt-img.png"


const Hero = () => {
 

  return (
    <div className="h-screen flex items-center px-20 ">
        <div className="flex flex-col flex-1 h-[60%] gap-20">
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3 bg-orange-300/25 p-2 rounded-full w-fit">
                    <div className="w-3 h-3 rounded-full bg-orange-300"></div>
                    <p className="text-sm">Orders typically processed within 2-3 business days</p>
                </div>
                <p className="text-5xl text-amber-800">Professional DTF Printing Made Simple</p>
                <p className="text-base text-zinc-400">Create your own look with professional DTF printing. You can order just the prints to press yourself or have your design made right onto apparel. Upload your artwork or pick from our design gallery — it’s easy either way.</p>
            
            </div>
            <div className="flex items-center gap-2">
                <button className="px-8 rounded-md bg-amber-800 w-fit py-2 text-base text-white font-semibold  active:shadow-sm active:shadow-amber-800 hover:bg-amber-800 border-0 cursor-pointer flex items-center gap-2 active:scale-[.97]">
                    <p>Shop Now</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                </button>
                <button className="px-8 rounded-md border border-solid border-amber-800 w-fit py-2 text-base text-amber-800 font-semibold active:scale-[.97] hover:bg-zinc-100 bg-white cursor-pointer flex items-center gap-2">
                    <p>Learn More</p>
                    
                </button>
            
            </div>

        </div>
        <div>
            <img src={shirtImg} className="w-[600px]"/>
        </div>
    </div>
  )
}

export default Hero

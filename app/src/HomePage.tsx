import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import demo1 from "./assets/demo1.png"
import demo2 from "./assets/demo2.png"
import demo3 from "./assets/demo3.png"
import demo4 from "./assets/demo4.png"
import demo5 from "./assets/demo5.png"
import demo6 from "./assets/demo6.png"
import demo7 from "./assets/demo7.png"
import demoImg from "./assets/appDemoImg.png"
import logo from "./assets/logo.png"
import { MdAccountCircle, MdMenu } from 'react-icons/md'
import { useClothingItem } from './ClothingItem/useClothingItem'
import { BiCartAdd } from 'react-icons/bi'
import { CgIfDesign } from 'react-icons/cg'

const HomePage = () => {
    const navigate = useNavigate()
    const [view, setView] = useState<"T-Shirt" | "Crochet" | "Misc">("T-Shirt")
    const {assetOptions} = useClothingItem()

  return (
    <div className="bg-orange-50 min-h-screen flex flex-col overflow-y-auto">
        <div className='bg-orange-950/75 w-full min-h-[50vh] flex flex-col justify-between relative overflow-y-auto'>
            <div className="flex justify-end items-center gap-5 p-10">
                <button className='px-2 border border-zinc-300 py-1 hover:bg-orange-100/50 rounded-sm cursor-pointer text-white'>Sign in</button>
                <MdMenu className='text-2xl text-zinc-300/75 active:text-zinc-400 cursor-pointer' />
            </div>
            <div className="flex flex-wrap w-full p-10 max-h-screen  overflow-y-hidden">
                {/* <div className="absolute inset-0 bg-black/50 min-h-screen w-full">
                
                </div> */}
                <div className="flex flex-col gap-10 ">
                    {/* <p className='text-5xl font-semibold font-mono text-orange-950'>Knots & Prints co.</p> */}
                    
                    {/* <img src={demoImg} width={500} height={200}/> */}
                    <div className="flex flex-col gap-2">
                        <img src={logo} width={100}/>
                        <p className="text-5xl text-white font-mono">Knots and Prints co.</p>
                        <p className='text-zinc-300'>Crochet & Graphic Tees</p>
                    </div>
                    {/* <button onClick={() => navigate("/order-item/new")} className='bg-orange-950 hover:bg-orange-950/75 w-96 px-2 py-2 text-white cursor-pointer active:scale-[0.96] font-light rounded-full '>Design now</button> */}
                </div>
            </div>

            {/* <div className="grid grid-cols-2  w-1/2 bg-white h-screen overflow-y-auto  items-center justify-center relative">
                <img src={demo1} height={400} width={400} className='h-[500px]'    />
                <img src={demo2} height={400} width={400} className='h-[500px]'    />
                <img src={demo3} height={400} width={400} className='h-[500px]'    />
                <img src={demo4} height={400} width={400} className='h-[500px]'    />
                <img src={demo5} height={400} width={400} className='h-[500px]'    />
                <img src={demo7} height={400} width={400} className='h-[500px]'    />
                
                
                </div> */}
            {/* <div className="flex flex-col absolute items-center gap-10 top-36 p-5 text-shadow-zinc-500 text-shadow-2xs bg-zinc-100">
                <p className='text-5xl font-semibold font-mono text-orange-950'>Knots & Prints co.</p>
                <button onClick={() => navigate("/order-item/new")} className='bg-orange-950 w-96 px-2 py-2 text-white cursor-pointer active:scale-[0.96] font-semibold rounded-full '>Create a design</button>
                </div> */}
        </div>
        
        <div className="flex flex-col p-10 gap-10 ">
            <div className="flex  gap-5">
                <p onClick={() => setView("T-Shirt")} className={`pb-2 border-b cursor-pointer  ${view == "T-Shirt" ? "border-orange-950" : "border-transparent"}`}>T-Shirts</p>
                <p onClick={() => setView("Crochet")} className={`pb-2 border-b cursor-pointer  ${view == "Crochet" ? "border-orange-950" : "border-transparent"}`}>Crochet</p>
                <p onClick={() => setView("Misc")} className={`pb-2 border-b cursor-pointer  ${view == "Misc" ? "border-orange-950" : "border-transparent"}`}>Misc</p>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {assetOptions.map(o => (
                    <div className="flex flex-col p-2  border bg-white border-zinc-200 rounded-md">
                        <div className="flex justify-between items-center">
                            <p>{o.name}</p>
                            <p className='text-zinc-400'>${o.price / 100}</p>

                        </div>
                        <div className='flex items-center gap-10'>
                            <img src={o.image} width={200} />
                            <img src={o.backImage} width={200} />
                        </div>
                        <div className="flex justify-end items-center gap-3">

                            <div title="New Design" className='rounded-full cursor-pointer bg-blue-950/75 active:bg-blue-950/60 p-2'>
                                <CgIfDesign onClick={() => navigate("/order-item/new")} className='text-2xl text-white' />

                            </div>
                            <div title="Add to Cart" className='rounded-full cursor-pointer bg-orange-950/75 active:bg-orange-950/60 p-2'>
                                <BiCartAdd className='text-2xl text-white' />

                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
        
    </div>
  )
}

export default HomePage

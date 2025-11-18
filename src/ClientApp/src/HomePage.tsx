import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import homeBg from "./assets/home-bg.jpg"

import logo from "./assets/logo.png"
import { MdAccountCircle, MdMenu } from 'react-icons/md'
import { useClothingItem } from './ClothingItem/useClothingItem'
import { BiCartAdd } from 'react-icons/bi'
import { CgIfDesign } from 'react-icons/cg'
import OrderItemView from './OrderItem/OrderItemView'
import { useOrderContext } from './Order/useOrderContext'
import BrandNavbar from './Components/BrandNavbar'
import { CiShirt } from 'react-icons/ci'

const HomePage = () => {
    const navigate = useNavigate()
    const {order, setOrder, setOrderItem} = useOrderContext()
    
    const [view, setView] = useState<"Clothing" | "Tote Bags" | "Misc">("Clothing")
    const {assetOptions} = useClothingItem()

  return (
    <div className="min-h-screen overflow-y-scroll bg-black-/60 flex flex-col">
        <BrandNavbar />
        
        <div className=" h-screen flex font-sans flex-col pb-40 relative" style={{backgroundImage: `url(${homeBg})`}}>
           
            {/* <div className="flex flex-wrap w-full bg-amber-950/55 p-5 ">
                <div className="flex flex-col gap-10 ">
                    
                    <div className="flex flex-col gap-2">
                    </div>
                </div>
            </div> */}
            <div className="flex flex-col px-10 pb-10 gap-2 items-center bg-amber-950/55 pt-5">
                <div className=' px-8 flex justify-center'>
                    <img src={logo} width={100}/>

                </div>
                <div className="flex flex-col gap-2 items-center text-center top-0 p-5 ">
                    <p className="text-4xl text-white font-mono">Knots and Prints co.</p>
                    <p className='text-zinc-300'>Graphic Tees & Tote Bags</p>
                    <button className='bg-amber-950 px-12 py-2 rounded-4xl cursor-pointer text-white active:scale-[.97] font-semibold mt-2'>Shop now</button>
                </div>
                <div className="flex-1"></div>
                <div className="flex flex-1 gap-5">
                    <p onClick={() => setView("Clothing")} className={`pb-2 cursor-pointer text-white  ${view == "Clothing" ? "font-semibold " : "border-transparent"}`}>Clothing</p>
                    <p className='text-zinc-300'>|</p>
                    <p onClick={() => setView("Tote Bags")} className={`pb-2 cursor-pointer text-white  ${view == "Tote Bags" ? "font-semibold " : "border-transparent"}`}>Tote Bags</p>
                    <p className='text-zinc-300'>|</p>
                    <p onClick={() => setView("Misc")} className={`pb-2 cursor-pointer text-white  ${view == "Misc" ? "font-semibold " : "border-transparent"}`}>Misc</p>
                </div>
            </div>
            <div className='min-h-fit flex flex-col bg-white p-10  py-10'>
                <div className='flex items-center gap-2'>
                    <CiShirt />

                    <p className='font-semibold'>Design a Shirt</p>
                </div>
                
                <div className='w-full rounded-md border border-solid border-zinc-300'>
                    <OrderItemView OnSave={(item) => {
                        console.log("saved");
                        console.log(item);
                        
                        
                        setOrderItem(item)
                    }} ExistingItem={null} isShowingBackButton={false}/>


                </div>

            </div>
            {/* <div className="flex flex-col p-10 gap-10 bg-white flex-1 min-h-screen justify-between">
                
                <div className="grid grid-cols-6 mx-auto gap-5 bg-white">
                    {assetOptions.map(o => (
                        <div className="flex flex-col  h-96 border bg-white border-zinc-200 hover:shadow-md cursor-pointer rounded-md">
                            <div className="flex justify-between items-center p-2">
                                <p className='text-sm'>{o.name}</p>

                            </div>
                            <div className='flex items-center gap-10 p-2'>
                                <img src={o.image} width={400} />
                            </div>
                            <div className="flex justify-end items-end flex-1 gap-3 bg-zinc-100 p-2">
                                <p className='text-zinc-400 flex-1 flex justify-start'>${o.price / 100}</p>

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
            </div> */}
            <div className="bg-zinc-800 min-h-60 w-full"></div>
            
        </div>

    </div>
  )
}

export default HomePage

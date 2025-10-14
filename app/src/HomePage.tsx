import React from 'react'
import { useNavigate } from 'react-router-dom'
import demo1 from "./assets/demo1.png"
import demo2 from "./assets/demo2.png"
import demo3 from "./assets/demo3.png"
import demo4 from "./assets/demo4.png"
import demo5 from "./assets/demo5.png"
import demo6 from "./assets/demo6.png"
import demo7 from "./assets/demo7.png"
import demoImg from "./assets/appDemoImg.png"

const HomePage = () => {
    const navigate = useNavigate()
  return (
    <div className='bg-orange-50 w-full h-screen flex items-center justify-center relative'>
        <div className="grid grid-cols-2 w-1/2 bg- h-screen overflow-y-auto">
            <img src={demo1}  />
            <img src={demo2}  />
            <img src={demo3}  />
            <img src={demo4}  />
            <img src={demo5}  />
            <img src={demo6}  />
            <img src={demo7}  />
        </div>
        <div className="  w-1/2 bg-white h-screen overflow-y-auto flex items-center justify-center">
            <div className="flex flex-col items-center gap-10 ">
                <p className='text-5xl font-semibold font-mono text-orange-950'>Knots & Prints co.</p>
                
                <img src={demoImg} width={500} height={200}/>
                <button onClick={() => navigate("/order-item/new")} className='bg-orange-950 hover:bg-orange-950/75 w-96 px-2 py-2 text-white cursor-pointer active:scale-[0.96] font-light rounded-full '>Design now</button>
            </div>
        
        </div>
        {/* <div className="flex flex-col absolute items-center gap-10 top-36 p-5 text-shadow-zinc-500 text-shadow-2xs bg-zinc-100">
            <p className='text-5xl font-semibold font-mono text-orange-950'>Knots & Prints co.</p>
            <button onClick={() => navigate("/order-item/new")} className='bg-orange-950 w-96 px-2 py-2 text-white cursor-pointer active:scale-[0.96] font-semibold rounded-full '>Create a design</button>
        </div> */}
    </div>
  )
}

export default HomePage

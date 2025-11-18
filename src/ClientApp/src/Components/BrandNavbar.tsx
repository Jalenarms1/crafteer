import React from 'react'
import { BiCart } from 'react-icons/bi'
import { GiBowenKnot, GiKnot } from 'react-icons/gi'
import { useOrderContext } from '../Order/useOrderContext'
import { useNavigate } from 'react-router-dom'
import { MdMenu } from 'react-icons/md'

const BrandNavbar = () => {
    const {order} = useOrderContext()
    const navigate = useNavigate()
  return (
    <div className="flex justify-between bg-orange-950 w-full p-3 px-8">
        <div onClick={() => navigate("/")} className='flex items-center  gap-2 cursor-pointer'>
            {/* <GiBowenKnot className='text-lg text-orange-600'/> */}
            <GiKnot className='text-lg text-orange-100'/>
            {/* <p className='text-white font-mono text-xl font-light'>Knots & Prints Co.</p> */}
        </div>
        <div className="flex gap-5 items-center">
          <div onClick={() => navigate("/order")} className='w-fit relative hover:shadow-sm hover:shadow-zinc-700 border border-zinc-600 rounded-sm active:bg-orange-900 p-2'>
              <BiCart className='text-2xl text-white cursor-pointer'/>
              {order.items.length > 0 && <div className="absolute w-4 h-4 rounded-full top-[-10px] right-[-10px] bg-orange-600 text-white text-xs flex items-center justify-center">{order.items.length}</div>}
          </div>
          <button className='px-2 border border-zinc-600 py-2 hover:bg-orange-100/50 rounded-sm cursor-pointer text-white'>Sign in</button>
          {/* <MdMenu className='text-2xl text-zinc-300/75 active:text-zinc-400 cursor-pointer' /> */}


        </div>
        {/* <div className='w-full h-fit flex items-center  ' >
            
            <div className="flex justify-end items-center gap-5 bg-amber-950/55 p-5">
            </div>

        </div> */}
    </div>
  )
}

export default BrandNavbar

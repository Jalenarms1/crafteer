import React from 'react'
import { useOrder } from './useOrder'
import { useOrderContext } from './useOrderContext'
import Divider from '../components/Divider'
import { BiChevronLeft, BiMinusCircle, BiPlusCircle, BiSolidMinusSquare, BiSolidPlusSquare } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { FiEdit } from 'react-icons/fi'
import { TbEditCircle } from 'react-icons/tb'
import { TiEdit } from 'react-icons/ti'

const OrderPage = () => {
  const {order, setOrderItem} = useOrderContext()
  const navigate = useNavigate()

  const positionDisplay = {
    "Fill" : {
        top: "80px",
        width: 35
    },
    "Top-Right": {
        top: "80px",
        right: "-20px",
        width: 15
    },
    "Top-Left": {
        top: "80px",
        left: "-15px",
        width: 20

    }
  }

  return (
    <div className="flex flex-col p-10 gap-5">
        <div onClick={() => navigate("/order-item/new")} className=' bg-orange-950 px-2 py-1 w-fit rounded-md text-white flex items-center hover:bg-orange-950/80 active:scale-[0.96] cursor-pointer'>
            <BiChevronLeft className='text-3xl text-white/50'/>
            <p className='font-light'>Continue shopping</p>
        </div>
        <div className='pb-5 border-b border-zinc-200 flex flex-col'>
            <p className='font-semibold text-2xl text-zinc-400'>${(order.total / 100).toFixed(2)}</p>
            <p className='text-xs text-zinc-400'>Tax: ${(order.tax / 100).toFixed(2)}</p>
            <p className='text-xs text-zinc-400'>Sub Total: ${(order.subTotal / 100).toFixed(2)}</p>
        </div>
        <div className='grid grid-cols-3 gap-2'>
            {order.items.map(oi => (
                <div className='flex flex-col p-2 border border-zinc-100 rounded-md gap-5 relative'>
                    <div className="flex items-start gap-2">
                        {/* <img src={oi.item.image} width={50}/> */}
                        <div className="flex flex-col w-full">
                            <div className="flex justify-between">
                                <p className='text-sm font-semibold'>{oi.item.name}</p>
                                {/* <p className='text-sm text-orange-950 font-semibold'>{oi.quantity * oi.item.price / 100}</p> */}
                                <div className='flex items-center gap-2'>
                                    <BiSolidMinusSquare className='text-lg text-orange-950' onClick={() => {
                                        oi.quantity -= 1
                                        setOrderItem(oi)
                                    }}/>
                                    <p className='text-zinc-400 text-sm'>{oi.quantity}</p>
                                    <BiSolidPlusSquare onClick={() => {
                                        oi.quantity += 1
                                        setOrderItem(oi)
                                    }} className='text-lg text-orange-950'/>
                                </div>
                            </div>
                            <Divider />
                            <div className="flex items-center gap-2">
                                <p className='text-zinc-400 text-xs'>{oi.gender == "M" ? "Men's" : "Women's"} {oi.size}</p>

                            </div>
                            <div className="flex gap-2 mt-2">
                                {oi.designItems?.map(di => (
                                    <>
                                        <div className='relative flex flex-col'>
                                            {/* <p className='text-zinc-400 text-xs'>{di.isOnBack ? "Back" : "Front"}</p> */}
                                            {/* <img src={oi.item.image} width={50}/>
                                            
                                            <img className='absolute inset-0' src={di.designImage} width={25}/> */}
                                            <img src={di.isOnBack ? oi.item.backImage : oi.item.image} width={200}/>
                                            
                                            <div className={`absolute inset-0 top-16 ${di.designPosition == "Top-Right" ? "left-8" : di.designPosition == "Top-Left" ? "right-8" : ""} justify-center`} >
                                                <img className='mx-auto' src={di.designImage} width={positionDisplay[di.designPosition].width} height={positionDisplay[di.designPosition].width} />

                                            </div>
                                        </div>
                                    </>
                                ))}
                                

                            </div>
                        </div>
                    </div>
                    <Divider />
                    <div className="flex flex-col gap-2 bg-zinc-50 p-5 shadow-sm shadow-zinc-200">
                        <div className="flex items-center gap-2">
                            {oi.designItems?.map(di => (
                                <>
                                    <img className='' src={di.designImage} width={35} height={35} />
                                
                                </>
                            ))}
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-1">
                                <p onClick={() => navigate(`/order-item/${oi.id}`)} className='underline text-xs text-amber-900 cursor-pointer active:text-orange-900'>Edit</p>
                                <p className='underline text-xs text-amber-900'>Share</p>
                                <p className='underline text-xs text-amber-900'>Delete</p>
                                <p className='underline text-xs text-amber-900'>Preview</p>
                            </div>
                            <div className="flex items-center gap-2">
                                {/* <div className='flex items-center gap-2'>
                                    <BiSolidMinusSquare className='text-lg text-orange-950'/>
                                    <p className='text-zinc-400 text-sm'>{oi.quantity}</p>
                                    <BiSolidPlusSquare className='text-lg text-orange-950'/>
                                </div> */}
                                <p className='text-sm text-zinc-400 font-semibold'>${(oi.quantity * oi.item.price / 100).toFixed(2)}</p>

                            </div>
                        </div>

                    </div>
                    {/* <div className='absolute w-full flex justify-end top-[-10px] right-[-10px]'>
                        <TiEdit className='text-2xl' />
                    </div> */}
                </div>
            ))}

        </div>
    </div>
  )
}

export default OrderPage

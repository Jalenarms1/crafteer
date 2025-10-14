import React, { useEffect, useRef, useState } from 'react'
import { useOrderItem } from './useOrderItem'
import type { OrderItem } from './OrderItem'
import { IoArrowBack } from 'react-icons/io5'
import { useClothingItem } from '../ClothingItem/useClothingItem'
import { CgClose } from 'react-icons/cg'
import type { ClothingItemDesign, ClothingItemDesignPos, DesignPositionDisplay } from '../ClothingItem/ClothingItem'
import { GrGallery } from 'react-icons/gr'
import { BsUpload } from 'react-icons/bs'
import { IoMdReverseCamera } from 'react-icons/io'
import { handleDownload } from '../utils'
import { CiWarning } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'

const imagePositionDisplays: DesignPositionDisplay[] = [
  {
      position: "Fill",
      width: 200,
      height: 250,
      top: 140
  },
  {
      position: "Top-Right",
      width: 75,
      height: 60,
      // right: 325,
      top: 140
  },
  {
      position: "Top-Left",
      width: 75,
      height: 60,
      // right: 500,
      top: 140
  },

]

interface OrderItemViewParams {
    OnSave: (item: OrderItem) => void
    ExistingItem: OrderItem | null
}


const OrderItemView = (params: OrderItemViewParams) => {
    const navigate = useNavigate()
    const {OnSave} = params
    const {orderItem, setOrderItem, isShowingBackImage, setIsShowingBackImage, selectedDesignItem, setSelectedDesignItem} = useOrderItem(params.ExistingItem)
    const {assetOptions, selectedAsset, setSelectedAsset} = useClothingItem()
    const [errors, setErrors] = useState<{field: string, err: string}[]>([])
    // const [dataUrl, setDataUrl] = useState<string>("")
    const [imagePositionDisplayList, setImagePositionDisplays] = useState<DesignPositionDisplay[]>(imagePositionDisplays)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const width = 225
    const height = 275
    const designPositions: ClothingItemDesignPos[] = [
        'Fill',
        'Top-Right',
        'Top-Left'
    ]

    const handleUpload = (event) => {
        const file = event.target.files[0]

        console.log(file);

        const reader = new FileReader()

        reader.onload = (e) => {
            const img = new Image()
            img.onload = () => {
                const canvas = canvasRef.current
                if(!canvas) return

                canvas.width = width
                canvas.height = height

                const ctx = canvas.getContext("2d")
                if(!ctx) return
                ctx.imageSmoothingEnabled = false;

                ctx?.clearRect(0,0, width, height)

                const imgAspectRatio = img.width / img.height;
                const canvasAspectRatio = width / height;

                let sx = 0, sy = 0, sWidth = img.width, sHeight = img.height;
                let dx = 0, dy = 0, dWidth = width, dHeight = height;

                if (imgAspectRatio > canvasAspectRatio) {
                sWidth = img.height * canvasAspectRatio;
                sx = (img.width - sWidth) / 2;
                } else {
                sHeight = img.width / canvasAspectRatio;
                sy = (img.height - sHeight) / 2;
                }

                ctx?.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

                const dUrl = canvas.toDataURL('image/png', 1.0);
                const designItem: ClothingItemDesign = {id: crypto.randomUUID(), designImage: dUrl, designPosition: "Fill", isOnBack: isShowingBackImage}
                setOrderItem(p => {
                    return {
                        ...p,
                        designItems: [...(p.designItems ?? []), designItem]
                    }
                })
                // setSelectedDesignItem(designItem)
                // setDataUrl(dUrl)
                if(!fileInputRef.current) return
                fileInputRef.current.value = ""
            }

            img.src = e.target?.result as string;

       
        }

        reader.readAsDataURL(file);
    
    }

    useEffect(() => {
        setOrderItem(oi => {
            return {
                ...oi,
                item: selectedAsset
            }
        })
        
    }, [selectedAsset])

  return (
    <div className='bg-zinc-100 w-full h-screen flex'>
        <div className='w-3/4 h-screen shadow-zinc-700 flex flex-col items-center '>
            <div className='flex items-center bg-zinc-100 border-b border-zinc-200 w-full p-2 gap-2'>
            <IoArrowBack className='text-black'/>
            <p onClick={() => navigate("/order")} className="text-black">Back</p>
            </div>
            <div className="w-full flex justify-between ">
            <div className="bg-white w-3/5 flex items-center justify-center overflow-hidden h-[70vh] flex-1 flex-col relative mx-auto">
                

                {/* <img src={whiteTeeImg} className=''/> */}
                <img src={isShowingBackImage ? selectedAsset.backImage : selectedAsset.image} className='min-w-[800px] max-w-[800px]'/>
                {/* <img src={whiteTeeImgBack} className='scale-[0.8]'/> */}
                {orderItem.designItems?.map(i => {
                
                return (<div onClick={() => selectedDesignItem?.id != i.id ? setSelectedDesignItem(i) : setSelectedDesignItem(null)} className={` z-[99] absolute   flex w-[225px] `} style={{top: imagePositionDisplayList.find(f => f.position == i.designPosition)?.top, right: imagePositionDisplayList.find(f => f.position == i.designPosition)?.right}}>
                    <div className={` w-full flex ${i?.designPosition == "Top-Right" ? "justify-end" : i?.designPosition == "Fill" ? "justify-center" : "justify-start"} `}>
                        <div className='relative w-fit'>
                        {(i.isOnBack == isShowingBackImage) && <img  className={` ${i.id == selectedDesignItem?.id ? "border-2 border-dashed border-zinc-400 shadow-sm shadow-zinc-300 rounded-sm  " : "hover:border-2 hover:border-blue-300 hover:rounded-md"} `} src={i.designImage} width={imagePositionDisplayList.find(f => f.position == i.designPosition)?.width} height={imagePositionDisplayList.find(f => f.position == i.designPosition)?.height}/>}
                        {selectedDesignItem?.id == i.id && <button onClick={() => {
                            setOrderItem(p => {
                            return {
                                ...p,
                                designItems: [...(p.designItems ?? []).filter(i => i.id != selectedDesignItem?.id)]
                            }
                            })
                            setSelectedDesignItem(null)
                        }} className='bg-black text-white p-1 rounded-full absolute top-[-10px] right-[-15px] cursor-pointer'>
                            <CgClose />

                        </button>}

                        </div>
                    </div>
                    
                    </div>
                )

                })}
                <div className='absolute top-5 left-5 flex flex-col'>
                    <p className='text-zinc-400 font-semibold'>{isShowingBackImage ? "BACK" : "FRONT"}</p>
                    <img src={isShowingBackImage ? selectedAsset.backImage : selectedAsset.image} className='w-12 h-12'/>
                </div>
            </div>
            <div className="flex flex-col w-1/5">
                <div onClick={() => {}} className='flex flex-col bg-zinc-100 border h-full border-zinc-200 p-5 items-center justify-center cursor-pointer gap-2'>
                <GrGallery  className='text-2xl'/>
                <p>Gallery</p>
                </div>
                <div onClick={() => fileInputRef.current?.click()} className='flex flex-col bg-zinc-100 border h-full border-zinc-200 p-5 items-center justify-center cursor-pointer gap-2'>
                <BsUpload className='text-2xl'/>
                <p>Upload Image</p>
                </div>
                <div onClick={() => {
                setSelectedDesignItem(null)
                setIsShowingBackImage(p => !p)
                }} className='flex flex-col bg-zinc-100 border h-full border-zinc-200 p-5 items-center justify-center cursor-pointer gap-2'>
                <IoMdReverseCamera  className='text-2xl'/>
                <p>Flip</p>
                </div>
                <div onClick={() => {
                    if(!selectedDesignItem) return
                    const i = designPositions.indexOf(selectedDesignItem?.designPosition as ClothingItemDesignPos)
                    if(i == designPositions.length - 1) {
                        const newItem = {
                            ...selectedDesignItem,
                            designPosition: designPositions[0]
                        }
                        
                        setSelectedDesignItem(newItem)

                        setOrderItem(p => {
                            return {
                                ...p,
                                designItems: [...(p.designItems ?? []).filter(f => f.id != selectedDesignItem.id), newItem]
                                
                            }
                        })
                        
                    }
                    else
                    {
                        console.log(designPositions[i + 1]);
                        const newItem = {
                        ...selectedDesignItem,
                        designPosition: designPositions[i + 1]
                        }
                        setSelectedDesignItem(newItem)

                        setOrderItem(p => {
                            return {
                                ...p,
                                designItems: [...(p.designItems ?? []).filter(f => f.id != selectedDesignItem.id), newItem]
                            }
                        })
                    }
                }} className='flex flex-col bg-zinc-100 border h-full border-zinc-200 p-5 items-center justify-center cursor-pointer gap-2'>
                    <div className='flex items-center gap-5'>
                        <div className={`relative w-fit`}>
                            <div className={`bg-orange-950 w-4 h-7 rounded-sm ${selectedDesignItem?.designPosition == "Fill" ? "" : "opacity-35"}`}></div>
                        </div>
                        <div className={`relative grid grid-cols-2 rounded-md w-4 h-7 ${selectedDesignItem?.designPosition == "Top-Right" ? "" : "opacity-35"}`}>
                            <div className='bg-zinc-400  rounded-tl-sm'></div>
                            <div className='bg-orange-950  rounded-tr-sm'></div>
                            <div className='bg-zinc-400  rounded-bl-sm'></div>
                            <div className='bg-zinc-400  rounded-br-sm'></div>
                        </div>
                        <div className={`relative grid grid-cols-2 rounded-md w-4 h-7 ${selectedDesignItem?.designPosition == "Top-Left" ? "" : "opacity-35"}`}>
                            <div className='bg-orange-950  rounded-tl-sm'></div>
                            <div className='bg-zinc-400  rounded-tr-sm'></div>
                            <div className='bg-zinc-400  rounded-bl-sm'></div>
                            <div className='bg-zinc-400  rounded-br-sm'></div>
                        </div>

                    </div>
                <p>Change position</p>
                </div>
                
            </div>
            </div>
            <div className='h-[1px] w-full '>

            </div>
            <div className=" w-full bg-zinc-100 flex  gap-2 items-center px-8 py-2 z-[99]">
            {assetOptions.map(o => (
                <div onClick={() => setSelectedAsset(o)} className={`bg-zinc-400 rounded-sm ${selectedAsset == o ? "border border-orange-400 shadow-sm shadow-orange-200" : ""}`}>
                <img src={o.image} width={100} height={50}/>
                </div>
            ))}
            </div>

        </div>
        <div className='w-1/4 h-screen bg-orange-50 p-5 flex flex-col gap-10'>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold '>Size</p>
                    <div className="flex items-center gap-2">
                        {selectedAsset.sizes.map(s => (
                            <p onClick={() => {
                                if(!orderItem) return
                                setOrderItem(p => {
                                    return {
                                        ...p,
                                        size: s
                                    } as OrderItem
                                })
                            }} className={` ${orderItem?.size == s ? "bg-orange-950 text-white" : "border border-solid border-zinc-500"} rounded-md px-4  cursor-pointer hover:shadow-sm hover:shadow-zinc-700`}>{s}</p>
                        ))}

                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold '>Gender</p>
                    <div className="flex items-center gap-2">
                        {selectedAsset.genders.map(s => (
                            <p onClick={() => {
                                if(!orderItem) return
                                setOrderItem(p => {
                                    return {
                                        ...p,
                                        gender: s
                                    } as OrderItem
                                })
                            }} className={` ${orderItem?.gender == s ? "bg-orange-950 text-white" : "border border-solid border-zinc-500"} rounded-md px-4  cursor-pointer hover:shadow-sm hover:shadow-zinc-700`}>{s}</p>
                        ))}

                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold '>Quantity</p>
                    <div className="flex items-center gap-2">
                        <input value={orderItem?.quantity} onChange={(e) => {
                            if(parseInt(e.target.value) == 0)
                            {
                                return
                            }
                            setOrderItem(p => {
                                return {
                                    ...p,
                                    quantity: parseInt(e.target.value)
                                } as OrderItem
                            })
                        }} type='number' min={1} className={`bg-white p-1 w-20 ${errors.find(e => e.field == "quantity") ? "border border-red-500" : ""}`}/>

                    </div>
                    {errors.find(e => e.field == "quantity") && (
                            <div className='flex items-center gap-2 text-red-700 text-sm p-2 bg-red-300 rounded-sm'>
                                <CiWarning />
                                <p className=' '>Enter a number 1 or greater</p>

                            </div>

                        )
                    }
                </div>

            </div>

            <div className="flex flex-col">
                <div className="flex justify-between  font-light">
                    <p className='font-semibold'>Subtotal</p>
                    <div className=''>
                    {orderItem  && orderItem.item && parseInt(orderItem.quantity?.toString()) ? <p>${(orderItem.item?.price * (orderItem.quantity ?? 0) / 100).toFixed(2)}</p> : <p>$0.00</p>}
                    </div>
                </div>
                <div className='border border-zinc-400 border-dashed'></div>

            </div>
            <button onClick={() => {
                setErrors([])
                
                
                if(!parseInt(orderItem?.quantity?.toString() ?? "")) {
                    setErrors(e => {
                    return [...e.filter(f => f.field != "quantity"), {field: "quantity", err: "Enter a valid number"}]
                    })
                }

                OnSave(orderItem)
                
                navigate("/order")

            }}  className='bg-orange-950 text-white px-2 py-1 cursor-pointer rounded-sm active:scale-[.97]'>Add to order</button>
            {/* <div className='flex flex-col '>
                <div onClick={handleDownload} className="flex justify-between cursor-pointer text-white font-light py-4  px-2">
                    <p>Download</p>
                    <BiDownload />
                </div>
                <div className='border border-zinc-400 border-dashed'></div>


            </div> */}
        </div>
        <input ref={fileInputRef} onChange={handleUpload} type='file' className='hidden'  accept='image/*'/>
        <canvas ref={canvasRef} className='hidden'>

        </canvas>
        </div>
  )
}

export default OrderItemView

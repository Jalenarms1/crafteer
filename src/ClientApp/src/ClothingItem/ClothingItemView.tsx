import React, { useEffect, useRef, useState, type InputEventHandler } from 'react'
import { BiCart, BiCheck, BiDownload } from 'react-icons/bi'
import { BsUpload } from 'react-icons/bs'
import { GrGallery } from 'react-icons/gr'
import { IoMdReverseCamera } from 'react-icons/io'
import { IoAdd, IoArrowBack } from 'react-icons/io5'
import { LuLocate } from 'react-icons/lu'
import whiteTeeImg from "../assets/white-tee.png"
import whiteTeeImgBack from "../assets/white-t-back.png"
import blackTeeImg from "../assets/black-tee.png"
import redTee from "../assets/red-t.png"
import blueTee from "../assets/blue-t.png"
import { CiEdit, CiWarning } from 'react-icons/ci'
import type { ClothingItem, ClothingItemDesign, ClothingItemDesignPos, DesignPositionDisplay } from './ClothingItem'
import { CgClose } from 'react-icons/cg'
import BrandNavbar from '../Components/BrandNavbar'
import type { OrderItem } from '../OrderItem/OrderItem'
import OrderItemView from '../OrderItem/OrderItemView'

const clothingItems = [
    {image: whiteTeeImg, backImage: whiteTeeImgBack,id: "12312", "name": "Plain White-T", price: 1999, genders: ["M", "F"], sizes: ["S", "M", "L"]}, 
    {image: blackTeeImg, backImage: blackTeeImg,id: "4312", "name": "Plain Black-T", price: 1999, genders: ["M", "F"], sizes: ["S", "M", "L"]},
    {image: redTee, backImage: blackTeeImg,id: "4312", "name": "Plain Black-T", price: 1999, genders: ["M", "F"], sizes: ["S", "M", "L"]},
    {image: blueTee, backImage: blueTee,id: "4312", "name": "Plain Black-T", price: 1999, genders: ["M", "F"], sizes: ["S", "M", "L"]},
]

const designPositions: ClothingItemDesignPos[] = [
    'Fill',
    'Top-Right',
    'Top-Left'
]

const displayObj = {
  "Fill": {
      position: "Fill",
      width: 225,
      height: 250,
      top: 170
  },
  "Top-Right": {
      position: "Top-Right",
      width: 75,
      height: 60,
      right: 325,
      top: 170
  },
  "Top-Left": {
      position: "Top-Left",
      width: 75,
      height: 60,
      right: 500,
      top: 170
  }

}
const imagePositionDisplays: DesignPositionDisplay[] = [
  {
      position: "Fill",
      width: 200,
      height: 230,
      top: 170
  },
  {
      position: "Top-Right",
      width: 75,
      height: 60,
      // right: 325,
      top: 170
  },
  {
      position: "Top-Left",
      width: 75,
      height: 60,
      // right: 500,
      top: 170
  },

]

const ClothingItemView = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [dataUrl, setDataUrl] = useState<string | null>(null)
    const [assetOptions, setAssetOptions] = useState<ClothingItem[]>(clothingItems)
    const [selectedAsset, setSelectedAsset] = useState<ClothingItem>(clothingItems[0])
    const [isShowingBackImage, setIsShowingBackImage] = useState<boolean>(false)
    const [OrderItems, setOrderItems] = useState<OrderItem[]>([])
    const [clothingDesignItems, setClothingDesignItems] = useState<ClothingItemDesign[]>([])
    const [selectedDesignItem, setSelectedDesignItem] = useState<ClothingItemDesign | null>(null)
    const [currOrderItem, setCurrOrderItem] = useState<OrderItem | null>(null)
    const [selectedDesignPosition, setSelectedDesignPosition] = useState<ClothingItemDesignPos>("Fill")
    const [imagePositionDisplay, setImagePositionDisplay] = useState<DesignPositionDisplay | undefined>(imagePositionDisplays.find(f => f.position == "Fill"))
    const [imagePositionDisplayList, setImagePositionDisplays] = useState<DesignPositionDisplay[]>(imagePositionDisplays)
    const [errors, setErrors] = useState<{field: string, err: string}[]>([])
    const width = 200
    const height = 240
    const fileInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        setCurrOrderItem({id: crypto.randomUUID(), item: selectedAsset, quantity: 1, designItems: [], size: "M", gender: "M"})
    }, [])

    useEffect(() => {
        setImagePositionDisplay(imagePositionDisplays.find(f => f.position == selectedDesignItem?.designPosition))
        console.log(clothingDesignItems);
        
    }, [selectedDesignItem])

    

  return (
    
    <OrderItemView />
  )
    
  
}

export default ClothingItemView

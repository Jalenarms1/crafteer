import { useState } from "react"
import type { ClothingItem } from "./ClothingItem"
import whiteTeeImg from "../assets/white-tee.png"
import whiteTeeImgBack from "../assets/white-t-back.png"
import blackTeeImg from "../assets/black-tee.png"
import redTee from "../assets/red-t.png"
import blueTee from "../assets/blue-t.png"

const clothingItems = [
    {image: whiteTeeImg, backImage: whiteTeeImgBack,id: "12312", "name": "Plain White-T", price: 1999, sizeGroups: ["M", "F"], sizes: ["S", "M", "L"]}, 
    {image: blackTeeImg, backImage: blackTeeImg,id: "4312", "name": "Plain Black-T", price: 1999, sizeGroups: ["M", "F"], sizes: ["S", "M", "L"]},
    {image: redTee, backImage: blackTeeImg,id: "4312", "name": "Plain Black-T", price: 1999, sizeGroups: ["M", "F"], sizes: ["S", "M", "L"]},
    {image: blueTee, backImage: blueTee,id: "4312", "name": "Plain Black-T", price: 1999, sizeGroups: ["M", "F"], sizes: ["S", "M", "L"]},
]

export const useClothingItem = () => {
    const [assetOptions, setAssetOptions] = useState<ClothingItem[]>(clothingItems)
    const [selectedAsset, setSelectedAsset] = useState<ClothingItem>(clothingItems[0])

    return {assetOptions, selectedAsset, setSelectedAsset}
}
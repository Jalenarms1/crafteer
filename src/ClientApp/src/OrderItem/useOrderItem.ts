import { useState } from "react";
import type { OrderItem } from "./OrderItem";
import type { ClothingItemDesign } from "../ClothingItem/ClothingItem";
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

export const useOrderItem = (existingItem: OrderItem | null = null) => {
    const [orderItem, setOrderItem] = useState<OrderItem>(existingItem ?? {id: crypto.randomUUID(), sizeGroup: "M", size: "M", quantity: 1, item: clothingItems[0]})
    const [isShowingBackImage, setIsShowingBackImage] = useState<boolean>(false)
    const [selectedDesignItem, setSelectedDesignItem] = useState<ClothingItemDesign | null>(null)

    return {orderItem, setOrderItem, isShowingBackImage, setIsShowingBackImage, setSelectedDesignItem, selectedDesignItem}
}
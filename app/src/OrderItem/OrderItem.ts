import type { ClothingItem, ClothingItemDesign } from "../ClothingItem/ClothingItem"

export type OrderItem = {
    id: string,
    designItems?: ClothingItemDesign[],
    item: ClothingItem,
    size: string,
    gender: string
    quantity: number,
}
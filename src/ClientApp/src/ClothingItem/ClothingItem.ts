export type ClothingItem = {
    id: string,
    name: string,
    price: number,
    sizes: string[],
    sizeGroups: string[],
    image: string,
    backImage: string
}


export type ClothingItemDesign = {
    id: string,
    designImage?: string,
    designPosition: ClothingItemDesignPos,
    isOnBack: boolean
}



export type ClothingItemDesignPos = "Fill" | "Top-Right" | "Top-Left"

export type DesignPositionDisplay = {
    position: ClothingItemDesignPos,
    width: number,
    height: number,
    top: number,
    right?: number
}
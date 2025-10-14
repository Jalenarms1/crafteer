import type { OrderItem } from "../OrderItem/OrderItem"

export type Order = {
    id: string,
    items: OrderItem[],
    subTotal: number,
    tax: number,
    total: number
}
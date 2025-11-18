import { useState } from "react"
import type { Order } from "./Order"
import type { OrderItem } from "../OrderItem/OrderItem"


export const useOrder = () => {
    const [order, setOrder] = useState<Order>({id: crypto.randomUUID(), items: [], subTotal: 0, tax: 0, total: 0})

    const setOrderItem = (item: OrderItem) => {
        if(order.items.length == 0) {
            setOrder(p => {
                return {
                    ...p,
                    items: [item],
                    subTotal: getSubtotal([item]),
                    tax: getTax([item]),
                    total: getSubtotal([item]) + getTax([item])
                }
            })
            return
        }
        const items = order.items.map(i => {
            if(i.id != item.item.id) return i
            
            return item
        })

        if(!items.some(i => i.id == item.id))
        {
            items.push(item)
        }

        setOrder(p => {
            return {
                ...p,
                items,
                subTotal: getSubtotal(items),
                tax: getTax(items),
                total: getSubtotal(items) + getTax(items)
            }
        })
    }

    const getSubtotal = (items: OrderItem[]) => {
        return items.reduce((acc, obj) => acc += obj.item.price * obj.quantity, 0)
    }

    const getTax = (items: OrderItem[]) => {
        return getSubtotal(items) - (getSubtotal(items) * 0.86)
    }

    return {order, setOrder, setOrderItem}
}
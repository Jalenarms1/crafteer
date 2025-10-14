import React, { createContext, useContext, useState, type ReactNode } from "react";
import type { Order } from "./Order";
import type { OrderItem } from "../OrderItem/OrderItem";


interface OrderContextParams {
    order: Order,
    setOrder: React.Dispatch<React.SetStateAction<Order>>,
    setOrderItem: (item: OrderItem) => void
}

const OrderContext = createContext<OrderContextParams>({} as OrderContextParams)

export const OrderProvider = ({children}: {children: ReactNode}) => {
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
            if(i.id != item.id) return i
            
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
    return (
        <OrderContext.Provider value={{order, setOrder, setOrderItem}}>
            {children}
        </OrderContext.Provider>
    )
}

export const useOrderContext = () => {
    return useContext(OrderContext)
}
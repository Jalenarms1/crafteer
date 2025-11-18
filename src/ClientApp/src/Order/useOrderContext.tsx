import React, { createContext, useContext, useState, type ReactNode } from "react";
import type { Order } from "./Order";
import type { OrderItem } from "../OrderItem/OrderItem";


interface OrderContextParams {
    order: Order,
    setOrder: React.Dispatch<React.SetStateAction<Order>>,
    setOrderItem: (item: OrderItem) => void,
    removeItem: (id: string) => void
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

    const removeItem = (id: string) => {
        console.log(`removing ${id}`);
        
        setOrder(o => {
            var newItems = o.items.filter(i => i.id != id)

            return {
                ...o,
                items: newItems,
                subTotal: getSubtotal(newItems),
                tax: getTax(newItems),
                total: getSubtotal(newItems) + getTax(newItems)
            }
        })
    }

    const getSubtotal = (items: OrderItem[]) => {
        return items.reduce((acc, obj) => acc += obj.item.price * obj.quantity, 0)
    }

    const getTax = (items: OrderItem[]) => {
        console.log(getSubtotal(items));
        console.log(parseFloat(((getSubtotal(items) - (getSubtotal(items) * 0.86)) / 100).toFixed(2)) * 100);
        
        return parseFloat(((getSubtotal(items) - (getSubtotal(items) * 0.86)) / 100).toFixed(2)) * 100
    }

    const submitOrder = async () => {
        var order
    }
    return (
        <OrderContext.Provider value={{order, setOrder, setOrderItem, removeItem}}>
            {children}
        </OrderContext.Provider>
    )
}

export const useOrderContext = () => {
    return useContext(OrderContext)
}
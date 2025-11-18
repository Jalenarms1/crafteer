import React, { useEffect, useState } from 'react'
import { useOrderContext } from '../Order/useOrderContext'
import OrderItemView from './OrderItemView'
import { useParams } from 'react-router-dom'
import type { OrderItem } from './OrderItem'
import BrandNavbar from '../Components/BrandNavbar'

const OrderItemPage = () => {
    const {order, setOrder, setOrderItem} = useOrderContext()
    const {orderItemId} : {orderItemId?: string} = useParams()
    const [existingItem, setExistingItem] = useState<OrderItem | null>(null)
    const [hasLoaded, setHasLoaded] = useState<boolean>(false)

    useEffect(() => {
        if(orderItemId) {
            setExistingItem(order.items.find(i => i.id == orderItemId) as OrderItem)
        }
        setHasLoaded(true)
    }, [])

    if(!hasLoaded) return;
    
  return (
    <div className='flex flex-col'>
        <BrandNavbar />
        <OrderItemView OnSave={(item) => {
            console.log("saved");
            console.log(item);
            
            
            setOrderItem(item)
        }} ExistingItem={existingItem} />
    </div>
  )
}

export default OrderItemPage

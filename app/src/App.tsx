import './App.css'
import ClothingItemView from './ClothingItem/ClothingItemView'
import BrandNavbar from './components/BrandNavbar'
import HomePage from './HomePage'
import OrderPage from './Order/OrderPage'
import { useOrder } from './Order/useOrder'
import { OrderProvider, useOrderContext } from './Order/useOrderContext'
import OrderItemPage from './OrderItem/OrderItemPage'
import OrderItemView from './OrderItem/OrderItemView'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {


  return (
    <OrderProvider>
      <div className="flex flex-col">
        <Router>
          <BrandNavbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/order-item/new' element={<OrderItemPage />} />
            <Route path='/order-item/:orderItemId' element={<OrderItemPage />} />
            <Route path='/order' element={<OrderPage />} />
          </Routes>
        </Router>
        
      </div>

    </OrderProvider>
  )
}

export default App

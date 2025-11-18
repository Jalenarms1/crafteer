import { ApolloProvider, useMutation, useQuery } from '@apollo/client/react'
import './App.css'
import LandingPage from './LandingPage/LandingPage'
import OrderPage from './Order/OrderPage'
import { OrderProvider } from './Order/useOrderContext'
import OrderItemPage from './OrderItem/OrderItemPage'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import client from './apolloClient'


function App() {

  return (
    <ApolloProvider client={client}>
      <OrderProvider>
        <div className="flex flex-col overflow-hidden h-screen font-mono">
          <Router>
            {/* <BrandNavbar /> */}
            <Routes>
              {/* <Route path='/' element={<HomePage />} /> */}
              <Route path='/' element={<LandingPage />} />
              <Route path='/order-item/new' element={<OrderItemPage />} />
              <Route path='/order-item/:orderItemId' element={<OrderItemPage />} />
              <Route path='/order' element={<OrderPage />} />
            </Routes>
          </Router>
          
        </div>

      </OrderProvider>


    </ApolloProvider>
  )
}

export default App

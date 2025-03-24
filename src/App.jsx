import React from 'react'
import Home from './pages/home/Home.jsx'
import Order from './pages/order/Order.jsx'
import Cart from './pages/cart/Cart.jsx'
import Dashboard from './pages/admin/dashboard/Dashboard.jsx'
import Login from './pages/registration/Login.jsx'
import Signup from './pages/registration/Signup.jsx'
import ProductInfo from './pages/productInfo/ProductInfo.jsx'
import AddProduct from './pages/admin/page/AddProduct.jsx'
import UpdateProduct from './pages/admin/page/UpdateProduct.jsx'
import NoPage from './pages/nopage/NoPage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MyState from './context/data/MyState.jsx'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order' element={<Order />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/productinfo/:id' element={<ProductInfo />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/updateproduct' element={<UpdateProduct />} />
          <Route path='/*' element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  )
}

export default App
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
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import MyState from './context/data/MyState.jsx'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order' element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          } />
          <Route path='/cart' element={<Cart />} />
          <Route path='/dashboard' element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/productinfo/:id' element={<ProductInfo />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/addproduct' element={
            <ProtectedRouteForAdmin>
              <AddProduct />
            </ProtectedRouteForAdmin>
          } />
          <Route path='/updateproduct' element={
            <ProtectedRouteForAdmin>
              <UpdateProduct />
            </ProtectedRouteForAdmin>
          } />
          <Route path='/*' element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  )
}

export default App

//user

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user')
  if (user) {
    return children
  } else {
    return <Navigate to={'/login'} />
  }
}

//admin

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  if (admin.user.email === import.meta.env.VITE_ADMIN_EMAIL_ID) {
    return children
  } else {
    return <Navigate to={'/login'} />
  }
}

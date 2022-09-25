import React from 'react'
import { Routes,Route } from 'react-router-dom'
import SignIn from '../pages/LogIn/SignIn'
import SignUp from '../pages/LogIn/SignUp'
const Dashboard = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home} />
        <Route path="/signIn" element={<SignIn/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/product/:productID" element={<ProductPage />} />
        <Route path="/addProduct" element={<AddProduct />} />
      </Routes>
    </div>
  )
}

export default Dashboard
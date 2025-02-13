import React from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import PlaceOrder from './Pages/PlaceOrder'
import Orders from './Pages/Orders'
import NavBar from './Components/NavBar'
import ShopContextprovider from './Context/ShopContext'
import Footer from './Components/Footer'
import Searchbar from './Components/Searchbar'

import { ToastContainer, toast } from 'react-toastify';
import RegisterPage from './Components/Registerpage'
function App() {


  return (
    <div className='px- 2sm:px-[3vw] lg:px-[5vw]'>
     <ToastContainer/>
      <BrowserRouter>
      <ShopContextprovider>
      <NavBar/>
      <Searchbar/>
      <Routes>
      
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Collection" element={<Collection/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/product/:product_Id" element={<Product />} ></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/PlaceOrder" element={<PlaceOrder/>}></Route>
        <Route path="/Orders" element={<Orders/>}></Route>


      </Routes>
      <Footer/>
      </ShopContextprovider>
      </BrowserRouter>
    </div>
  )
}

export default App

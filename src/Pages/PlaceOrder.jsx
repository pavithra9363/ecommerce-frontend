import React, { useContext, useState } from 'react'
import CartTotal from '../Components/CartTotal';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
function PlaceOrder() {

  const [method,setmethod]=useState('cod');
   const navigate=useNavigate();
   const{backendUrl,token,cart,setcart,getcartAmount,delivery_fees,Items}=useContext(ShopContext)
   const [formdata,setformdata]=useState({
    firstName:' ',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:' ',
    zipcode:'',
    country:'',
    phone:''
   })

   const onchangehandler=(event)=>{
    const name=event.target.name
    const value=event.target.value

    setformdata(data=>({...data,[name]:value}))

    
   }
   const onsumithandler=async(event)=>{
    event.preventDefault()
    try {
      let orderItems=[]

      for(const items in cart){
        for(const qty in cart[items]){
          if(cart[items][qty]>0){
            const iteminfo=structuredClone(Items.find(product=>product._id===items))
              if(iteminfo){
                iteminfo.weight=qty
                iteminfo.total=cart[items][qty]
                orderItems.push(iteminfo)
              }
          }
        }
      }
     let orderdata={
      address:formdata,
      items:orderItems,
      amount:getcartAmount()+delivery_fees
     } 
     
     try {
      const response = await axios.post(
        `${backendUrl}/api/order/place`,orderdata,{headers:{token}})
       if(response.data.success){
        // setcart({})
        navigate('/Success')
       }
       else{
        toast.error(response.data.error)
       }
      
     } catch (error) {
      console.log(response.data.error)
      
     }
     
    } catch (error) {
      console.log(error)
      
    }
   }
 
 
 
   return (
    <form onSubmit={onsumithandler} className="flex flex-col sm:flex-row justify-between gap-6 pt-5 sm:pt-14 min-[480px] pb-20 bg-gray-50 px-4 sm:px-10">
      {/* ------------------ Left Side ------------------- */}
      <div className="flex flex-col gap-6 w-full sm:max-w-[480px]">
        <div className="text-3xl sm:text-xl my-3 font-semibold">
          <span className="text-gray-600">DELIVERY </span><span className='font-bold text-gray-800'>INFORMATION</span>
        </div>

        {/* Personal Information */}
        <div className="flex gap-3 flex-col sm:flex-row">
          <input
            required onChange={onchangehandler} name='firstName' value={formdata.firstName} 
            className=" border border-gray-300 rounded py-2 px-4 w-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text"   placeholder="First Name"  
          />
          <input
            required onChange={onchangehandler} name='lastName' value={formdata.lastName}
            className="border border-gray-300 rounded py-2 px-4 w-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text" placeholder='Last Name'
          />
        </div>

        {/* Address Fields */}
        <div className="flex gap-5 flex-col sm:flex-row">
          <input
            required onChange={onchangehandler} name='email' value={formdata.email}
            className="border border-gray-300 rounded py-2 px-4 w-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            type="email" placeholder='Email Address'
          />
          <input
            required onChange={onchangehandler} name='street' value={formdata.street}
            className="border border-gray-300 rounded py-2 px-4 w-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text" placeholder='Street'
          />
        </div>

        {/* City & State */}
        <div className="flex gap-3 flex-col sm:flex-row">
          <input
            required onChange={onchangehandler} name='city' value={formdata.city}
            className="border border-gray-300 rounded py-2 px-4 w-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text" placeholder='City'
          />
          <input
            required onChange={onchangehandler} name='state' value={formdata.state}
            className="border border-gray-300 rounded py-2 px-4 w-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text" placeholder='State'
          />
        </div>

        {/* Zipcode & Country */}
        <div className="flex gap-3 flex-col sm:flex-row">
          <input
            required onChange={onchangehandler} name='zipcode' value={formdata.zipcode}
            className="border border-gray-300 rounded py-2 px-4 w-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text" placeholder='Zipcode'
          />
          <input
            required onChange={onchangehandler} name='country' value={formdata.country}
            className="border border-gray-300 rounded py-2 px-4 w-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            type="text" placeholder='Country'
          />
        </div>

        {/* Phone Number */}
        <div className="flex gap-3">
          <input
            required onChange={onchangehandler} name='phone' value={formdata.phone}
            className="border border-gray-300 rounded py-2 px-4 w-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            type="number" placeholder='Phone'
          />
        </div>
      </div>
 
    <div  className='mt-5'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
          <div className='mt-12'>
          <span className=' text-2xl sm:text-2xl my-3' >PAYMENT </span><span className='font-bold  text-2xl sm:text-2xl my-3'>METHOD___ </span>
          {/* -----------------------------pament method selection--------------------------- */}
         
          <div className="flex gap-3 flex-col lg:flex-row mt-10 ">
  {/* Stripe Payment */}
  <div 
    onClick={() => setmethod('stripe')} 
    className={`flex items-center gap-3 border border-gray-50 p-2 px-3 cursor-pointer rounded-md shadow-md`}>
    <p className={` min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''} Stripe`}></p> 
  <button className="h-8 mx-4 font-bold text-blue-800 ">STRIPE</button>
  </div>

  {/* Razorpay Payment */}
  <div 
    onClick={() => setmethod('razorpay')} 
    className={`flex items-center gap-3 border border-gray-50 p-2 px-3 cursor-pointer rounded-md shadow-md`}>
    <p className={` min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''} Stripe`}></p> 
  <button className="h-8 mx-4 font-bold text-black ">RAZERPAY</button>
  </div>

  {/* Cash on Delivery */}
  <div 
    onClick={() => setmethod('cod')} 
    className={`flex items-center gap-3 border border-gray-50 p-2 px-3 cursor-pointer rounded-md shadow-md`}>
    <p className={` min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''} Stripe`}></p> 
  <button className="h-8 mx-4 text-gray-600 font-bold">cash on Delivery</button>
  </div>
</div>
       <div className='w-full text-end mt-8'>
        <button  type='sumbit '  className='bg-black text-white rounded-md px-16 py-3 text-sm'>PLACE ORDER</button>
       </div>
          </div>
         
          
        </div>

      </div>
  </form>
);
}

export default PlaceOrder

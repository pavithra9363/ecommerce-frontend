import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import axios from 'axios'

function Orders() {
  const{backendUrl,token,currency}=useContext(ShopContext)

  const  [orderdata,setorderdata]=useState([])

  const loadorderdata=async()=>{
    try {
      if(!token){
  return null;
      }
      
      const response = await axios.post(
        `${backendUrl}/api/order/userorder`,{ },{headers:{token}})
        if(response.data.success){
          let allordersItem=[]
          response.data.orders.map((order)=>{
            order.items.map((item)=>{
              item['status']=order.status
              item['payment']=order.payment
              item['PaymentMethod']=order.PaymentMethod
              item['date']=order.date
              allordersItem.push(item)

            })
          })
          setorderdata(allordersItem.reverse())
          console.log(allordersItem.reverse())


        }
    } catch (error) {
       console.log( "its not connect",error)
    }
  }
 useEffect(()=>{
  loadorderdata()
 },[token])
  return (
    <div>
       <div className="text-3xl p-5  ">
            <span className='font-bold  '>MY</span><span>ORDERS__ </span>
            </div>
            {
 orderdata.map((item, index) => (
    <div key={index} className="py-4 border-b text-gray-700 flex flex-col text-sm md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-start gap-3">
        <img className="w-96 sm:w-40 rounded-md" src={item.image[0]} alt="dfgh" />
        <div>
          <p className="sm:text-base font-medium">{item.name}</p>
          <div className="flex items-center gap-3 mt-2 text-base text-gray-500">
            <p className="text-lg">{currency}{item.price}</p>
            <p>Quantity: {item.total}</p>
            <p>Qty: {item.weight}</p>
          </div>
          <p className="mt-2">
            Date: <span className="text-gray-400">{new Date(item.date).toDateString()}</span>
          

          </p>
          <p className="mt-2">
          Payment Method: <span className="text-gray-400">{item.PaymentMethod}</span>
          

          </p>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-between">
        <div className="flex items-center gap-2">
          <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
          <p className="text-sm md:text-base">{item.status}</p>
        </div>
        <button onClick={ loadorderdata} className='border px-5 py-2 text-sm font-medium rounded-md'>Track Order</button>
        
      </div>
    </div>
  ))
};
</div>

  )
}

export default Orders

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import ProdutItem from './ProductItem';
function LatestPrduct() {

    const{  Items }=useContext(ShopContext);
    const [lastest,setlatest]=useState([]);

    useEffect(()=>{
        setlatest(Items.slice(23,30));
    },[Items]);

   
  return (
    <div className='my-10'>
       {/* <div className="my-10"> */}
  <div className="text-center py-8">
    {/* Animated Heading */}
    <h1 className="text-4xl font-bold text-gray-800 tracking-wide transition-transform duration-700 transform hover:scale-105">
      <span className="text-green-500">LATEST</span> PRODUCTS
    </h1>
    {/* Animated Underline */}
    <div className="mt-2 w-16 h-1 bg-green-500 mx-auto animate-pulse"></div>
  </div>

       
    
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 ml-3 gap-y-6">
                    {lastest.map((item, index) =>
                        < ProdutItem key={index} id={item._id} name={item.name}   price={item.price}  image={item.image} description={item.description}  className="product-item"/>
                    )}
                           
                            
        
         </div>
    </div>
  )
}

export default LatestPrduct;

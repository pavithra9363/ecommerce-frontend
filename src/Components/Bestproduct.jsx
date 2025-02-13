import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import ProdutItem from './ProductItem';

function Bestproduct() {
    const{  Items }=useContext(ShopContext);
    const [best,setbest]=useState([]);

    useEffect(()=>{
        const bestsell=Items.filter((item)=>(item.bestseller));
        setbest(bestsell.slice(0,3));

        console.log('Updated Items:',best)
        
    },[Items]);

    useEffect(() => {
        console.log('Updated Items:',best); 
      }, [Items]);
      

   
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
        <h1 className="text-4xl font-bold text-gray-800 tracking-wide transition-transform duration-700 transform hover:scale-105">
      <span className="text-green-500">BEST</span> PRODUCTS
    </h1>
           
        </div>
       
    
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 ml-3 gap-y-6">
                    {best.map((item, index) =>
                        < ProdutItem key={index} id={item._id} name={item.name}   price={item.price}  image={item.image} description={item.description}  className="product-item"/>
                    )}
                           
                            
        
         </div>
    </div>
  )
}

export default Bestproduct

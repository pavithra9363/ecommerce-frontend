import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { GoStarFill } from "react-icons/go";
import { FaStarHalf } from "react-icons/fa";
import Relatedproduct from '../Components/Relatedproduct';



function Product() {
  const { product_Id } = useParams();  
  const { Items, addtocard } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState(''); 
  const [qty, setqty] = useState('');
  const [loading, setLoading] = useState(true); 

 
  const fetchProductData = async () => {
    if (Items.length === 0) return; 

   
    const product = Items.find(item => String(item._id) === product_Id); 

    if (product) {
      setProductData(product);
      setImage(product.image[0]);  
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [product_Id, Items]); // Added Items as dependency

  // Show loading state
  if (loading) {
    return <div>Loading...</div>; // Placeholder while data is loading
  }

  return productData ? (
    <div className='transition-opacity ease-in duration-500 opacity-100 ml-0 md:ml-5 mt-5 mb-5'>
        
      <div className='flex flex-col sm:flex-row w-full'>
        <div className='flex flex-col-reverse sm:flex-row w-2/3  '>
       
          <div className='flex sm:flex-col justify-between  w-1/2 pr-5 md:ml-1 sm:ml-5 m-5 rounded-lg'>
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={`/${item}`}
                alt=""
                key={index}
                className='w-[200px] sm:mb-3  rounded-md  shadow-lg'
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%] mb-5  md:ml-1 sm:ml-20 rounded-lg shadow-lg' >
            <img className='w-full h-full rounded-md' src={`/${image}`} />
          </div>
        </div>
        {/* product information */}
        <div className='flex-1 ml-10 '>
          <h1 className="text-3xl font-bold text-gray-900">{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <GoStarFill size={50} className="w-3.5 text-orange-500" />
            <GoStarFill className="w-3.5 text-orange-500" />
            <GoStarFill className="w-3.5 text-orange-500" />
            <GoStarFill className="w-3.5 text-orange-500" />
            <GoStarFill className="w-3.5 text-orange-300" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>${productData.price}</p>
          <p className='mt-5 text-gray-700 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p className='text-2xl'>Select Qty</p>
            <div className='flex gap-2'>
              {productData.weight.map((item, index) => (
                <button
                  onClick={() => setqty(item)}
                  className={`border py-3 px-3 bg-gray-200 text-bold  rounded-sm ${item === qty ? 'border-blue-500' : ''}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addtocard(productData._id, qty)}
            className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 rounded-md'
          >
            ADD TO CARD
          </button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-md text-gray-600 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>This is organic.</p>
            <p>Cash on Delivery is available on this product.</p>
          </div>
        </div>
      </div>
      {/* review section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-700'>
          <p>FarmDirect is your online marketplace for fresh, locally grown farm products. Order directly from trusted farmers and enjoy high-quality, sustainable goods delivered to your doorstep. FreshHarvest brings farm-fresh produce and goods straight to your door, sourced from local farms. Enjoy organic, quality products with just a few clicks.</p>
          <p>FarmFreshHub connects you with local farmers, offering fresh, organic products at your fingertips. Shop directly from the farm and enjoy fast, convenient delivery to your door.</p>
        </div>
      </div>
      {/* related products */}
      <Relatedproduct category={productData.category} />
    
    </div>
  ) : (
    <div>No product found</div> // Display message if no product is found
  );
}

export default Product;

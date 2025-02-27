import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ProductItem from './ProductItem';

function Relatedproduct({ category, currentProductId }) {
  const { Items } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (Items.length > 0) {
      // Filter items by category and exclude the current product
      const products = Items.filter(
        (item) => item.category === category && item._id !== currentProductId
      );
      setRelated(products.slice(0, 5));
    }
  }, [Items, category, currentProductId]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <h1 className="text-4xl font-bold text-gray-800 tracking-wide transition-transform duration-700 transform hover:scale-105">
          <span className="text-green-500">RELATED</span> PRODUCTS
        </h1>
        <div className="mt-2 w-16 h-1 bg-green-500 mx-auto animate-pulse"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 ml-3 gap-y-6">
        {related.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Relatedproduct;

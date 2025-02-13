import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ProductItem from './ProductItem';

function Relatedproduct({ category }) {
  const { Items } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (Items.length > 0) {
      const products = Items.filter((item) => item.category === category);
      setRelated(products.slice(0, 5));
    }
  }, [Items, category]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <h1 className="text-4xl font-bold text-gray-800 tracking-wide transition-transform duration-700 transform hover:scale-105">
          <span className="text-green-500">RELATED</span> PRODUCTS
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 ml-3 gap-y-6">
        {related.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image} // Pass the image correctly
          />
        ))}
      </div>
    </div>
  );
}

export default Relatedproduct;

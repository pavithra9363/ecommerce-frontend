import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ id, name, description, price, image }) {
  const imageUrl = image && image.length > 0 ? image[0] : 'default-image-url';

  return (
    <div className=  " m-5 bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
      {/* <Link to={`/Product/${id}`} className="cursor-pointer"> */}
        {/* Image Section */}
        <div className="overflow-hidden">
          <img
            className="h-60 w-full object-cover group-hover:scale-110 transition-transform duration-300"
            src={imageUrl}
            alt={name}
          />
        </div>

        {/* Text Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-500 text-sm truncate">{description}</p>
          <p className="text-green-600 font-bold mt-2">${price}</p>
        </div>
      {/* </Link> */}

      {/* Add to Cart Button */}
      <button className="mt-4 w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
      <Link to={`/Product/${id}`} className="cursor-pointer"> View Product</Link>
      </button>
    </div>
  );
}

export default ProductItem;

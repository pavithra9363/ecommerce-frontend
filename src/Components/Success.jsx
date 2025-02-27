import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  useEffect(() => {
    const audio = new Audio('/success-sound.mp3'); // Replace with your file path
    audio.play();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen rounded-xl mt-5 mb-5 bg-gray-900">
      <div className="bg-white p-8 rounded-3xl shadow-md text-center">
        {/* Success Message */}
        <div className="text-green-500 text-5xl rounded-3xl mb-4">
          <img
            src="success1.webp"
            alt="Success Icon"
            className="w-16 h-16 mx-auto"
          />
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been successfully placed.
          You can view the details of your order by clicking the button below.
        </p>

        {/* View Order Button */}
        <Link to="/orders">
          <button className="px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors">
            View Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;

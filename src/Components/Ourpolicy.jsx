
import React from 'react';

const OurPolicy = () => {
  return (
    <section className="flex flex-col items-center bg-gray-50 p-10 mt-10 ">
      <div className="relative flex items-center justify-center w-full h-[300px] mb-40 mt-10">
        {/* Center Image */}
        <div className="absolute z-10 mt-40 animate-spin-slow">
          <img src="roundf.webp" alt="Organic" className="rounded-full transition-all duration-300 transform hover:-translate-y-4 hover:shadow-2xl " />
          <h2 className="text-center text-2xl font-bold text-green-600 mt-4">Fresh & Organic</h2>
        </div>

        {/* Top Left Policy */}
        <div className="hidden  md:flex  sm:hidden  flex-col absolute top-0  left-10 bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 transform hover:-translate-y-4 hover:shadow-2xl">
          <img src="icon-1.png " alt="Support" className="rounded-full  h-20 w-20 mb-4 ml-10 " />
          <h3 className="text-lg font-semibold text-gray-700">Fresh from Nutrition</h3>
          <p className="text-gray-500 text-sm">We’re always here to assist you.</p>
        </div>

        {/* Top Right Policy */}
        <div className="  hidden   md:flex  sm:hidden  flex-col absolute top-0 right-10 bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 transform hover:-translate-y-4 hover:shadow-2xl">
          <img src="icon-2.png" alt="Guarantee" className="rounded-full  h-20 w-20 mb-4 ml-10 " />
          <h3 className="text-lg font-semibold text-gray-700">100% Organic</h3>
          <p className="text-gray-500 text-sm">Shop risk-free with confidence.</p>
        </div>

        {/* Bottom Left Policy */}
        <div className="  hidden  md:flex  sm:hidden  flex-col absolute top-56 left-10 bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 transform hover:-translate-y-4 hover:shadow-2xl">
          <img src="icon-4.png" alt="Shipping" className="rounded-full   h-20 w-20 mb-4 ml-10" />
          <h3 className="text-lg font-semibold text-gray-700">Free Shipping Worldwide</h3>
          <p className="text-gray-500 text-sm">Fast & secure delivery everywhere.</p>
        </div>

        {/* Bottom Right Policy */}
        <div className=" hidden   md:flex  sm:hidden  flex-col absolute top-56 right-10 bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 transform hover:-translate-y-4 hover:shadow-2xl">
          <img src="icon-3.png" alt="Rewards" className="rounded-full  h-20 w-20 mb-4 ml-10" />
          <h3 className="text-lg font-semibold text-gray-700">Exclusive Rewards</h3>
          <p className="text-gray-500 text-sm">Win $100 gift cards and more.</p>
        </div>
      </div>
    </section>
  );
};


export default OurPolicy;

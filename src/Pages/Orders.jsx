import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import axios from 'axios';


function Orders() {
  
  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderdata, setOrderdata] = useState([]);


  

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        `${backendUrl}/api/order/userorder`,
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['PaymentMethod'] = order.PaymentMethod;
            item['date'] = order.date;
            allOrdersItem.push(item);
          });
        });
        setOrderdata(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log("It's not connected", error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
      
    <div className="container mx-auto px-6 py-10 bg-gray-50">
      <div className="text-center py-8 text-3xl">
        <h1 className="text-5xl font-bold text-gray-800 tracking-wide transition-transform duration-700 transform hover:scale-105 font-poppins">
          <span className="text-green-600">MY</span> ORDERS
        </h1>
        <div className="mt-2 w-16 h-1 bg-green-500 mx-auto animate-pulse"></div>
      </div>

      {orderdata.length === 0 ? (
        <p className="text-center text-lg text-gray-600">You have no orders yet.</p>
      ) : (
        orderdata.map((item, index) => (
          <div
            key={index}
            className="py-6 border-b text-gray-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white shadow-lg rounded-lg mb-6 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image and Order Details */}
            <div className="flex items-start gap-3 p-5">
              <img
                className="w-32 sm:w-40 md:w-48 rounded-lg object-cover shadow-md"
                src={item.image[0]}
                alt={item.name}
              />
              <div className="pr-5">
                <p className="sm:text-xl font-semibold text-gray-900">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-lg text-gray-600">
                  <p className="text-lg font-medium text-green-600">{currency}{item.price}</p>
                  <p className="text-sm">Quantity: {item.total}</p>
                  <p className="text-sm">Weight: {item.weight}</p>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Date: <span className="text-gray-400">{new Date(item.date).toDateString()}</span>
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Payment Method: <span className="text-gray-400">{item.PaymentMethod}</span>
                </p>
              </div>
            </div>

            {/* Order Status and Track Button */}
            <div className="flex flex-col sm:w-1/3 sm:flex-row sm:items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="w-2 h-2 rounded-full bg-green-600 ml-5"></p>
                <p className="text-sm sm:text-base text-gray-600 font-medium">{item.status}</p>
              </div>
              <button
                onClick={loadOrderData}
                className="mt-4  border m-5 px-5 py-3 text-sm font-medium rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors shadow-md"
              >
                Track Order
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
 
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import CartTotal from "../Components/CartTotal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Cart() {
  const { cart, updateQuantity, Items } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/Login");  
      toast.error("Please login to access the cart!");
    }
  }, []);

  useEffect(() => {
    if (Items.length > 0) {
      const tempData = [];
      for (const item in cart) {
        for (const qty in cart[item]) {
          if (cart[item][qty] > 0) {
            tempData.push({
              _id: item,
              quantity: qty,
              total: cart[item][qty],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cart, Items]);

  return (
    <div className="border-t border-color-black pt-14">
      <div className="text-2xl mb-3">
        <h1 className="font-semibold">YOUR CART</h1>
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = Items.find(
            (product) => String(product._id).trim() === String(item._id).trim()
          );

          return (
            <div
              key={index}
              className="py-4 border-t text-gray-700 flex justify-between gap-10"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt={productData.name}
                />
                <div>
                  <h1 className="text-2xl">{productData.name}</h1>
                  <div className="flex items-center gap-5 mt-2">
                    <h1 className="text-2xl">${productData.price}</h1>
                    <p className="px-2 sm:px-3 sm:py-2 border bg-slate-50">
                      {item.quantity}
                    </p>
                  </div>
                </div>
              </div>

              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(item._id, item.quantity, Number(e.target.value))
                }
                className="border h-10 w-20 text-center mt-10"
                type="number"
                min={1}
                defaultValue={item.total}
              />

              <RiDeleteBin6Line
                onClick={() => updateQuantity(item._id, item.quantity, 0)}
                className="mt-10 cursor-pointer"
                size={20}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/PlaceOrder")}
              className="bg-black text-white text-sm my-8 py-3 px-8 rounded-sm shadow-sm"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

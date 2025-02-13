import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

function CartTotal() {
    const{delivery_fees,getcartAmount,currency}=useContext(ShopContext);
    return (
        <div className="w-full">
          <div className="text-3xl p-5 ">
            <span className='font-bold'>CART </span><span>TOTAL__ </span>
          </div>
    
          <div className="flex flex-col gap-2 mt-2  font-bold text-x">
            <div className="flex justify-between">
              <p >Subtotal</p>
              <p>{currency} {getcartAmount()}.00</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Shipping Fee</p>
              <p>{currency} {delivery_fees}.00</p>
            </div> 
            <hr />
            <div className="flex justify-between">
              <b>Total</b>
              <b>
                {currency} {getcartAmount() === 0 ? 0 : getcartAmount()+delivery_fees}
              </b>
              
            </div>
          </div>
        </div>
      );
    };

export default CartTotal

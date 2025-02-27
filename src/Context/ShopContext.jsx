//  ShopContextProvider file:
import React, { createContext, useEffect, useState } from 'react';
// import { Items } from '../../productdetail';
import { toast } from 'react-toastify';
import axios from 'axios';

export const ShopContext = createContext();
  
 const currency='$';
 const delivery_fees=10;
const backendUrl = import.meta.env.VITE_BACKEND_URL;
console.log(backendUrl); 

function ShopContextProvider(props) {

const [search,setsearch]=useState(''); 
  const [Showsearch,setshowsearch]=useState(false);
 const[cart,setcart]=useState({});
 const[Items,setItems]=useState([ ]);
 const[token,setToken]=useState([])



 const addtocard = async (itemId, qty) => {
  if (!qty) {
    toast.error("Select a quantity!");
    return;
  }

  if (!token) {
    toast.error("Please log in to add items to your cart.");
    navigate("/login"); // Redirect to login page
    return;
  }

let cartdata=structuredClone(cart);
if(cartdata[itemId]){
  if(cartdata[itemId][qty]){
    cartdata[itemId][qty]+=1
  }
  else{
    cartdata[itemId][qty]=1;
  }
}
else{
  cartdata[itemId]={};
  cartdata[itemId][qty]=1;
}
setcart(cartdata);
   if(token){
  try {
    const response = await axios.post(
      `${backendUrl}/api/cart/add`,
      { itemId, qty },
      { headers: { token } }
    );
    if (response.data.success) {
      toast.success("Item added to cart");
      console.log("item added");
      
    } else {
      toast.error("Failed to add item to cart");
      console.log("item does not added")

    }
  } catch (error) {
    console.error("Error adding to cart:", error);
    toast.error("Error adding item to cart");
  }
   }
 }

const updateQuantity = async (itemId, qty,total) => {

  let cartdata=structuredClone(cart);

  cartdata[itemId][qty]=total;
  
  setcart(cartdata);
  if(token){

    try {
    const response = await axios.post(
      `${backendUrl}/api/cart/update`,
      { itemId, qty,total },
      { headers: { token } }
    );
    // if (response.data.success) {
    //   toast.success("Cart updated");
    // } else {
    //   toast.error("Failed to update cart");
    // }
  } catch (error) {
    console.error("Error updating cart:", error);
    toast.error("Error updating cart");
  }

  }
   
};




const getcartcount = () => {
    
    let totalcount = 0;
  
    for (const items in cart) { 
      for (const qty in cart[items]) {
        if (cart[items][qty] > 0) {
          totalcount += cart[items][qty];
        }
      }
      
    }
 

    return totalcount; 
  };
  
   
   


   //totalamount
   const getcartAmount=()=>{
    let totalAmount= 0;
    for(const items in cart){
      const iteminfo = Items.find((product) => String(product._id).trim() === String(items).trim());
        for(const qty in cart[items]){
          try{
            if(cart[items][qty]>0){
              totalAmount+=iteminfo.price*cart[items][qty]
              
            }
          } 
          catch(error){
            console.log(error);
          }
        }
    } 
    return totalAmount;
   }


   
   const getProductData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      console.log("Received data:", response.data);
  
      if (response.data.success) {
        
        setItems(response.data.products); 
      } else {
        toast.error(response.data.message || "Failed to fetch products.");
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
      toast.error("An error occurred while fetching product data.");
    }



  };






  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/cart/get`,
        { },
        { headers: { token } } 
      );
      if (response.data.success) {
        setcart(response.data.cartdata);
      } else {
        toast.error("Failed to fetch cart data");
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
      toast.error("Error fetching cart");
    }
  };

 
 
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      getUserCart(storedToken);
    }
  }, []);

 
  useEffect(() => {
   
      getProductData ();
    
  },[])
 

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken && !token) {
      setToken(storedToken);
      getUserCart(storedToken); 
    }
  }, [ ]);
  

 
  
  

    const value = {
        Items,delivery_fees,currency,search,setsearch,Showsearch,setshowsearch,cart,setcart,addtocard,getcartcount,updateQuantity
        ,getcartAmount,backendUrl,setToken,token
    };
    
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}
export default ShopContextProvider;

import React, { useContext, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FaCartArrowDown } from 'react-icons/fa';
import { IoPersonOutline, IoSearchOutline } from 'react-icons/io5';
import { CgMenuCheese } from 'react-icons/cg';
import { SlArrowLeft } from 'react-icons/sl';
import Badge from '@mui/material/Badge';
import { ShopContext } from '../Context/ShopContext';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';
import {Tooltip } from '@mui/material';



function NavBar() {
  const [nav, setNav] = useState(false);
  const{setshowsearch,  getcartcount,token,setToken,setcart}=useContext(ShopContext);
 const navigate=useNavigate();



 const  logout=()=>{
  navigate('/Login')
  localStorage.removeItem('token');
  setToken('')
  setcart({})
 }
 
  

  return (
    <div className='  navbar flex justify-between items-center py-5 text-xl prata-regular'style={{
      // backgroundColor: '#f7fafc', 
      color: '#2d6a4f',
      borderBottom: '2px solid #52b788', 
    }}
     >
     
      <div>
        <img  src="logo1234.webp" className='h-10 w-40'/>
      </div>
       
    
      <div>
        <ul className='hidden md:flex lg:flex gap-5 text-xl font-black '>
          <NavLink to='/'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
          </NavLink>
          <NavLink to='/Collection'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to='/about'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to='/contact'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </ul>
      </div>  

      {/* Icons for Search, Profile, and Cart */}
      <div className="flex">
        <div>
          <p className='p-5' ><IoSearchOutline size={30}  onClick={()=>setshowsearch(true)}/></p>
        </div>
        <div className='group relative'>
        <p
    onClick={() => {
     
      if (!token) {
        toast.info("Please login to access your profile.");
        navigate('/Login');
      }
    }}
    className='p-5'
  >
    <IoPersonOutline    className=' hidden sm:hidden md:flex' size={30}  />
  </p>
         {token &&  
         <div className='group-hover:block hidden    absolute right-5 pt-6  '>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-white rounded-lg text-gray-500'>
              <p  onClick={logout}  className='cursor-pointer hover:text-black'>LogOut</p>
              <p className="hidden sm:flex md:hidden cursor-pointer hover:text-black">
              <NavLink to="/Login">Login</NavLink>
             </p>

              

            </div>
          </div>}
        </div>
        
       
        <NavLink to='/cart'   size="large" aria-label="show 10 new mails" color="black " className='p-5'  >
          <Badge badgeContent= {getcartcount() } sx={{ Color: '#1e88e5' }} color='primary'>
            <FaCartArrowDown size={30} style={{ color: 'black' }} />
          </Badge>
        </NavLink>
         
      </div>

      {/* Mobile Menu Toggle Button */}
      <button onClick={() => setNav(!nav)} className='block md:hidden'>
        <CgMenuCheese size={30} className='text-black' />
      </button>
    

      <Tooltip
  title="My Orders"
  arrow
  placement="top"
  
>
      <NavLink to='/Orders' style={{ textDecoration: 'none' }} className=" ">
        <button style={{ border: 'none', background: 'transparent', padding: '0' }}>
          <img
            src='Myorder.png'
            alt='My Order'
            style={{
              height: '50px',
              width: '50px',
              marginRight: '20px',
              marginTop: '5px',
            }}
          />
        </button>
      </NavLink>
    </Tooltip>

      <NavLink to='/Login' style={{ textDecoration: 'none' }}className="hidden md:flex sm:hidden">
      <Tooltip
        title="Login"
        arrow
        placement="top" // Positions the tooltip above the button
        sx={{
          tooltip: {
            backgroundColor: 'blue', // Tooltip background color
            color: 'white', // Text color in the tooltip
            fontWeight: 'bold', // Make tooltip text bold
          },
          arrow: {
            color: 'blue', 
          },
        }}
      >
        <Button className="hidden md:flex sm:hidden"
          sx={{
            backgroundColor: 'orange',
            color: 'white',
            fontWeight: 'medium',
            padding: '10px 20px',
            borderRadius: '8px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid orange',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'darkorange',
            },
          }}
        >
          Login
        </Button>
      </Tooltip>
    </NavLink>

      {/* Mobile Navigation */}
      {nav && (
  <nav
    className="md:hidden text-center fixed top-0 right-0 bottom-0 bg-white w-80 transition-all duration-300 z-50"
    style={{
      transform: nav ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.3s ease-in-out',
    }}
  >
    <ul className="flex flex-col gap-5 p-5" onClick={() => setNav(false)}>
      {/* Back Button */}
      <div className="flex justify-start">
        <button onClick={() => setNav(false)} className="text-xl">
          <SlArrowLeft size={30} />
        </button>
      </div>

      {/* Navigation Links */}
      <NavLink
        to="/"
        className="text-xl text-gray-700 border border-gray-300 p-2 rounded"
      >
        HOME
      </NavLink>
      <NavLink
        to="/Collection"
        className="text-xl text-gray-700 border border-gray-300 p-2 rounded"
      >
        COLLECTION
      </NavLink>
      <NavLink
        to="/about"
        className="text-xl text-gray-700 border border-gray-300 p-2 rounded"
      >
        ABOUT
      </NavLink>
      <NavLink
        to="/contact"
        className="text-xl text-gray-700 border border-gray-300 p-2 rounded"
      >
        CONTACT
      </NavLink>

      {/* Login and Logout */}
      <NavLink to="/Login" style={{ textDecoration: 'none' }}>
        <Button
          sx={{
            backgroundColor: 'orange',
            color: 'white',
            fontWeight: 'medium',
            padding: '10px 20px',
            borderRadius: '8px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid orange',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'darkblue',
            },
          }}
        >
          Login
        </Button>
      </NavLink>

      <Button
        onClick={logout}
        style={{ textDecoration: 'none' }}
        sx={{
          backgroundColor: 'blue',
          color: 'white',
          fontWeight: 'medium',
          padding: '10px 20px',
          borderRadius: '8px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          border: '1px solid orange',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'darkblue',
          },
        }}
      >
        Logout
      </Button>
    </ul>
  </nav>
)}

    </div>
  );
}

export default NavBar;



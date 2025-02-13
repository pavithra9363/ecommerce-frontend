import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { RxCross2 } from "react-icons/rx";
import { IoSearchOutline } from 'react-icons/io5';
// import { useLocation } from 'react-router-dom';

function Searchbar() {
    const { search, setsearch, Showsearch, setshowsearch } = useContext(ShopContext);
//    const location=useLocation;
   
    return Showsearch ? (
        <div className='border-t border-b bg-gray-50  flex justify-center'>
            <div className='inline-flex items-center justify-center border
              border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                <input 
                    type='text' 
                    value={search} 
                    onChange={(e) => setsearch(e.target.value)} 
                    placeholder='Search' 
                    className='flex-1 outline-none bg-inherit text-sm'
                />
                <p className=' w-4'>
                    <IoSearchOutline size={30} />
                </p>
            </div >
            <div className="mt-8">
                <RxCross2 size={30} onClick={() => setshowsearch(false)} /> {/* Changed from onChange to onClick */}
                </div>
            
        </div>
    ) : null;
}

export default Searchbar;

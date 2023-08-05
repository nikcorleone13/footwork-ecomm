import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import { WishlistContext } from '../../Contexts/Wishlist/WishlistContext';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { Link } from 'react-router-dom';
import {FaArrowLeft} from "react-icons/fa6"
import { wishlist_get_API } from '../../apiServices/Wishlist';

const Wishlist = () => {
    const [wishlistData,setWishlistData] = useState([]); 
    const {wishlist,handleWishlist} = useContext(WishlistContext);
    const {userToken} = useContext(AuthContext);
    // console.log("WISHLIST data",wishlist)


    useEffect(() => {
        if (userToken) {
          wishlist_get_API(userToken)
            .then((response) => {
              console.log("Response PROVIDER", response);
              handleWishlist(response);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }, [userToken]);
      
      
    return (
        <div>
            <Navbar />
            <div className='w-full h-full'>
                {
                    wishlistData.length === 0 ? (
                        (
                            <div className='w-full h-screen text-bgPrimary text-center items-center mx-auto left-0 '>
                                <h1
                                className='text-3xl md:text-5xl mt-[150px]' 
                                >Wishlist is Empty. Add some items
                                </h1>
                                <Link to="/products"
                                ><p className='w-[70%] md:w-[20%] flex items-center justify-center font-semibold mt-8 md:mt-12 md:hover:underline underline-offset-2 md:text-lg text-lightText border-2   bg-bgPrimary px-3 py-2 mx-auto  '><span className='mr-1'><FaArrowLeft size={15} /></span>Return to products Page</p> </Link>

                            </div>
                        )
                    ) :(
                        <div>

                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Wishlist; 
import React, { useEffect, useState } from "react";
import { WishlistContext } from "./WishlistContext";
import { wishlist_get_API } from "../../apiServices/Wishlist";


const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const handleWishlist = (data) => {
    setWishlist([...data]);
  }

  return <WishlistContext.Provider value={{wishlist:wishlist, handleWishlist:handleWishlist}}>{children} </WishlistContext.Provider>;
};

export default WishlistProvider;

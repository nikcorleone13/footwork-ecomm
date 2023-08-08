import React, { useState } from 'react'
import { CartContext } from './CartContext'

const CartProvider = ({children}) => {

    const [cart,setCart] = useState([]);

    const updateCart = (data) =>{
        setCart([...data]);
    }

  return (
    <CartContext.Provider value={{updateCart: updateCart, cart:cart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider;
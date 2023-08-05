export const cart_get_API = async(encodedToken) =>{
    try {
        const res = await fetch("/api/user/cart",{
            method: "GET",
            headers: {
                'authorization': encodedToken,
              },
        })
        const resBody = await res?.json();
        console.log("Response from CART-GET", resBody); 
        return resBody.wishlist
         
    } catch (error) {
        console.error(error);
    }
}

// add item to cart

export const cart_add_API = async (item,encodedToken) =>{
    try {
        const res = await fetch("/api/user/cart",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                'authorization': encodedToken,
              },
              body: JSON.stringify({
                product: item,
              }),
        })
        const resBody = await res?.json();
        console.log("Response from CART-ADD item", resBody); 

    } catch (error) {
        console.error(error);
    }
}


// delete item from CART

export const cart_delete_API = async (productId,encodedToken) =>{
    try {
        const res = await fetch(`/api/user/cart/${productId}`,{
            method:"DELETE",
            headers: {
                'Content-Type': 'application/json',
                'authorization': encodedToken,
            }
        })
        const resBody = await res?.json();
        console.log("Response from Wishlist DELETE item", resBody); 

    } catch (error) {
        console.error(error);
    }
}


// update quantity of item in the cart

export const cart_quantity_API = async (encodedToken,itemAction,productId) =>{
    try {
         const res = await fetch(`/api/user/cart/:${productId}`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'authorization': encodedToken,
            },
            body: JSON.stringify({
                action:{
                    type: itemAction
                }
            })
         })
    } catch (error) {
        console.error(error);
    }
}
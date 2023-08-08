export const wishlist_get_API = async(encodedToken) =>{
    try {
        const res = await fetch("/api/user/wishlist",{
            method: "GET",
            headers: {
                'authorization': encodedToken,
              },
        })
        const resBody = await res?.json();
        // console.log("Response from Wishlist GET", resBody); 
        return resBody.wishlist
         
    } catch (error) {
        console.error(error);
    }
}

// add item to wishlist

export const wishlist_add_API = async (item,encodedToken) =>{
    try {
        const res = await fetch("/api/user/wishlist",{
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
        // console.log("Wishlist ADD item", resBody); 
        return resBody;

    } catch (error) {
        console.error(error);
    }
}

// delete item from wishlist

export const wishlist_delete_API = async (productId,{encodedToken}) =>{
    try {
        const res = await fetch(`/api/user/wishlist/${productId}`,{
            method:"DELETE",
            headers: {
                'Content-Type': 'application/json',
                'authorization': encodedToken,
            }
        })
        const resBody = await res?.json();
        // console.log("Response from Wishlist DELETE item", resBody); 
        return resBody.wishlist
    } catch (error) {
        console.error(error);
    }
}
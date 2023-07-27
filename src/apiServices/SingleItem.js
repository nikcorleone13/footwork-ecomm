export const get_Single_Item_API = async (productId) => {
    console.log("id for api call", productId);
    if (productId) {
        try {
            const res = await fetch(`/api/products/${productId}`);
            console.log("Response SV", res);
            const data = await res?.json();
            console.log("Single Item from api", data.product);
            return data.product;
        } catch (error) {
            console.error(error);
        }
    }
};

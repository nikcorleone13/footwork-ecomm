export const getProducts = async () => {
    try {
        const res = await fetch("/api/products");
        const data = await res?.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
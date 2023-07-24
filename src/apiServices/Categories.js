export const getCategoriesAPI = async () => {
    try {
        const res = await fetch("/api/categories");
        const data = await res?.json();
        return data.categories;
    } catch (error) {
        console.error(error);
    }
};

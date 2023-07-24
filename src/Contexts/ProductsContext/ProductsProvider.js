import React, { useEffect, useReducer, useState } from "react";
import { ProductsContext } from "./ProductsContext";
import { getProducts } from "../../apiServices/Products";
import { productReducer } from "../../Reducers/productReducer";


const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState('');

    const initialData = {
        all_Data: [],
        sneakers: false,
        running: false,
        casual: false,
        price: 0,
        sort: '',
        ratings: '',
        search: ''
    };

    // reducer hook
    const [state, dispatch] = useReducer(productReducer, initialData);

    // API call for products
    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data.products);
            const apiData = data.products;
            // console.log("Data Received form API", apiData);

            dispatch({ type: "INITIAL_API_DATA", payload: apiData })

        }).catch((error) => {
            console.error(error)
        });
    }, []);
    // console.log("reducer done", state)


    // // setting data based on filter9
    const operation_data = [...products];

    const textFiltered = state.search?.length > 0 ? [...operation_data].filter(({ type, brand, name }) => name.toLowerCase().includes(state.search.toLowerCase()) || brand.toLowerCase().includes(state.search.toLowerCase()) || type.toLowerCase().includes(state.search.toLowerCase())) : [...operation_data];

    const priceFiltered = state.price > 0 ? [...textFiltered].filter(({ price }) => price <= state.price) : [...textFiltered];

    // const sneakerCategoryFiltered = state.sneakers === true ? [...priceFiltered].filter(({ type }) => type.toLowerCase() === "sneaker") : [...priceFiltered];

    // const runningCategoryFiltered = state.running === true ? [...sneakerCategoryFiltered].filter(({ type }) => type.toLowerCase() === "running") : [...sneakerCategoryFiltered];

    // const casualCategoryFiltered = state.casual === true ? [...runningCategoryFiltered].filter(({ type }) => type.toLowerCase() === "casual") : [...runningCategoryFiltered];

    const filteredData = operation_data.filter(({ type, rating }) => {
        const isSneakerFiltered = !state.sneakers || type.toLowerCase() === "sneaker";
        const isRunningFiltered = !state.running || type.toLowerCase() === "running";
        const isCasualFiltered = !state.casual || type.toLowerCase() === "casual";
        const isRatingFiltered = !state.ratings || rating >= state.ratings;

        return (state.sneakers && state.running && state.casual) || (isSneakerFiltered && isRunningFiltered && isCasualFiltered && isRatingFiltered);
    });



    const ratingFiltered = state.ratings === true ? [...filteredData].filter(({ rating }) => rating >= state.ratings) : [...filteredData];

    const htlFiltered = state.sort.toLowerCase() === "htl" ? ([...ratingFiltered].sort((item1, item2) => item2.price - item1.price)) : [...ratingFiltered];

    const lthFiltered = state.sort.toLowerCase() === "lth" ? ([...ratingFiltered].sort((item1, item2) => item1.price - item2.price)) : [...ratingFiltered];


    console.log("FILTERS", lthFiltered);




    return <ProductsContext.Provider value={{ all_data: state, dispatch: dispatch, }}>{children}</ProductsContext.Provider>;
};

export default ProductsProvider;














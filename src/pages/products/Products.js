import React, { useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Footer';
import SearchBar from './searchBar/SearchBar';
import Listing from './listing/Listing';
import { ProductsContext } from '../../Contexts/ProductsContext/ProductsContext';

const Products = () => {
    const { final_data } = useContext(ProductsContext);
    // console.log("products context in parent", final_data);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Navbar />
            <SearchBar />
            <Listing data={final_data} />
            <Footer />
        </div>
    )
}

export default Products;
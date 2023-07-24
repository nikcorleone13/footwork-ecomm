import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Footer';
import SearchBar from './searchBar/SearchBar';
import Listing from './listing/Listing';
import { ProductsContext } from '../../Contexts/ProductsContext/ProductsContext';

const Products = () => {

    const { all_data } = useContext(ProductsContext);
    // console.log("products context in parent", all_data);
    return (
        <div>
            <Navbar />
            <SearchBar />
            <Listing data={all_data} />
            <Footer />
        </div>
    )
}

export default Products;
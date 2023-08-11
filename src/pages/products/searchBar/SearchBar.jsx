import { useContext, useState } from "react";
import React from "react";
import { ProductsContext } from "../../../Contexts/ProductsContext/ProductsContext";


const SearchBar = () => {
  const { all_data, dispatch } = useContext(ProductsContext);
  const [search, setSearch] = useState(all_data.search);
  
  
  // search function
  const handleSearchChange = (text) => {
    console.log("Search", text);
    setSearch(text);
    dispatch({ type: "SEARCH", payload: text });
  };

  return (
    <div className=" bg-white py-6 md:py-8 flex justify-center items-center border-b-2  ">
      <div className=" w-[80%] md:w-[40%] flex justify-center items-center rounded ">
        <input
          type="text"
          placeholder="Search for the Product or Brand"
          className=" w-[100%] py-1 px-2 focus:border-2 focus:border-bgPrimary  border-2 rounded-md text-bgPrimary"
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        {/* <button className="w-[10%] h-[full]  flex justify-center text-xl md:text-2xl text-bgPrimary  ">
          <FaSearch />
        </button> */}
      </div>
    </div>
  );
};

export default SearchBar;

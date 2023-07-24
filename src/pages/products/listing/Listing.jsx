import React from "react";
import FilterBar from "../filtersection/FilterBar";

const Listing = (data) => {
  // console.log("products context in component", data.data);
  return (
    <div className="h-screen bg-red-400">
      <div className="flex flex-col md:flex-row">
        <>
          {" "}
          <FilterBar />
        </>
        <div>
          <h1>dsada</h1>
        </div>
      </div>
    </div>
  );
};

export default Listing;

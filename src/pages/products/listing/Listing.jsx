import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilterBar from "../filtersection/FilterBar";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
const Listing = (data) => {
  const [showData, setShowData] = useState(data.data);
  console.log("products context in component", data.data);
  useEffect(() => {
    setShowData(data.data);
  }, [data.data]);
  return (
    <div className="h-full ">
      <div className="flex flex-col md:flex-row relative ">
        <>
          {" "}
          {/* filterbar */}
          <FilterBar className="top-0 sticky" />
        </>
        <div className="h-full w-[100%]  p-4 flex justify-center items-center">
          {/* viewing of card */}
          <div className=" h-[100%] flex justify-evenly items-center  flex-wrap  text-bgPrimary ">
            {showData.map((item) => {
              return (
                // container div
                <Link
                  to={`/products/${item._id}`}
                  key={item._id}
                  className="h-full w-[350px] flex flex-col items-center   relative m-4 border-2 border-bgPrimary rounded-lg p-1 md:hover:border-[#00ff6a]"
                >
                  {/* image */}
                  <div
                    style={{
                      backgroundImage: `url(${item.img[0]})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="w-[100%] h-[250px]"
                  >
                    <FaHeart
                      size={25}
                      className="absolute right-2 top-2 text-gray-500 hover:text-red-700 cursor-pointer "
                    />
                  </div>
                  {/* cta buttons div */}
                  <div className=" w-[100%] relative flex flex-col justify-start items-start p-2 ">
                    {" "}
                    <h1 className="font-bold text-lg">{item.name}</h1>
                    <p className="absolute right-2 top-2 flex items-center bg-yellow-400 px-2 py-1 rounded-xl">
                      {item.rating}
                      <FaStar className="ml-1" />
                    </p>
                    <p className="text-gray-700">{item.brand}</p>
                    <p className="text-xl flex items-center">
                      <FaRupeeSign />
                      <span className="font-semibold "> {item.price}</span>
                    </p>
                    <div className="w-[100%] h-[20%] py-1 bg-bgPrimary text-lightText my-1 rounded-md flex items-center justify-center cursor-pointer text-lg hover:scale-[101%] duration-200">
                      <FaCartPlus className="mx-1" />
                      Add to Cart
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;

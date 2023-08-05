import React, { useContext, useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import FilterBar from "../filtersection/FilterBar";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { AuthContext } from "../../../Contexts/AuthContext/AuthContext";

const Listing = (data) => {
  const [showData, setShowData] = useState(data.data);
  const {userToken } = useContext(AuthContext);
  const navigate = useNavigate();

  // adding item to wishlist
  const handle_Wishlist_Item = (item) => {
    
      console.log("ITEM to add", item);
      console.log("Token value", userToken);
      !userToken && navigate("/wishlist");

      console.log("Redirecting.....")
  };
 
 
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
                <div
                  key={item._id}
                  className="h-full w-[350px] flex flex-col items-center   relative m-4 border-2 border-bgPrimary rounded-lg p-1 md:hover:border-[#00ff6a]"
                >
                  <FaHeart
                    size={25}
                    className="absolute right-2 top-2 text-gray-500 hover:text-red-700 cursor-pointer "
                    onClick={() => handle_Wishlist_Item(item)}
                  />
                  {/* image */}
                  <Link
                    to={`/products/${item._id}`}
                    className="w-[100%] h-[250px]"
                  >
                    <div
                      style={{
                        backgroundImage: `url(${item.img[0]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                      }}
                      className="w-[100%] h-[250px]"
                    ></div>
                  </Link>

                  {/* cta buttons div */}
                  <div className=" w-[100%] relative flex flex-col justify-start items-start p-2 ">
                    {" "}
                    <h1 className="font-bold text-lg">{item.name}</h1>
                    <p className="absolute right-2 top-2 flex items-center bg-yellow-400 px-2 py-1 rounded-xl">
                      {item.rating}
                      <FaStar className="ml-1" />
                    </p>
                    <p className="text-gray-700">{item.brand}</p>
                    <p className="text-base  flex items-center">
                      <FaRupeeSign />
                      <span className="font-semibold "> {item.price}</span>
                    </p>
                    <div className="w-[100%] h-[20%] py-1 bg-bgPrimary text-lightText my-1 rounded-md flex items-center justify-center cursor-pointer text-lg hover:scale-[101%] duration-200">
                      <FaCartPlus className="mx-1" />
                      Add to Cart
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;

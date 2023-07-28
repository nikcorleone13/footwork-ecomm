import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../../Contexts/ProductsContext/ProductsContext";

const Categories = ({ data }) => {
  const [showData, setShowData] = useState("");
  const { dispatch } = useContext(ProductsContext);

  useEffect(() => {
    setShowData(data);
  }, [data]);
  return (
    <div className=" h-full flex justify-center text-bgPrimary   ">
      <div className=" py-12 px-4 md:w-[70%] md:p-20  ">
        <div>
          <p className="py-4 text-3xl md:text-4xl font-semibold capitalize ">
            Discover categories
          </p>
          <p className="text-lg md:text-xl my-6 tracking-wide    ">
            Discover our carefully curated categories carefully chosen by our
            team of experts just for you. Prepare yourself to discover what
            you're looking for!
          </p>
        </div>
        <div className="p-4 flex flex-col justify-center items-center ">
          {Object.values(showData).map(
            ({ _id, categoryName, description, imgDesktop, address, id }) => {
              return (
                <Link
                  onClick={() =>
                    dispatch({ type: "CATEGORY", payload: `${categoryName}` })
                  }
                  to={address}
                  key={_id}
                  className=" border-2 my-8 md:my-16 w-[100%] flex flex-col md:flex-row justify-center items-center md:hover:bg-bgPrimary md:hover:text-lightText duration-200"
                >
                  <div
                    className="w-[100%] h-[250px] md:w-[60%] md:h-[300px]"
                    style={{
                      backgroundImage: `url(${imgDesktop})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className=" w-[90%] md:w-[50%] md:h-[100%] md:flex md:flex-col justify-between md:px-4">
                    <p className="my-3 md:my-6 uppercase text-2xl md:text-4xl font-semibold">
                      {categoryName}
                    </p>
                    <p className="my-3 md:my-6 capitalize md:text-xl ">
                      {description}
                    </p>
                  </div>
                </Link>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;

import React, { useContext, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { ProductsContext } from "../../../Contexts/ProductsContext/ProductsContext";
const FilterBar = () => {
  const { all_data, dispatch } = useContext(ProductsContext);

  const [filterBar, setFilterBar] = useState(false);
  const [price, setPrice] = useState(all_data.price);
  const [htl, setHTL] = useState(false);
  const [lth, setLTH] = useState(false);
  const [oneStar, setOneStar] = useState(false);
  const [twoStar, setTwoStar] = useState(false);
  const [threeStar, setThreeStar] = useState(false);
  const [fourStar, setFourStar] = useState(false);

  // context

  //price range handle
  const handleRange = (e) => {
    console.log("PRICE", e);
    dispatch({ type: "PRICE_RANGE", payload: e });
    setPrice(e);
  };

  //   sorting handle
  const handleSorting = (type) => {
    console.log("type", type);
    if (type === "HTL") {
      setHTL(true);
      setLTH(false);
      dispatch({ type: "SORT", payload: type });
    } else if (type === "LTH") {
      setLTH(true);
      setHTL(false);
      dispatch({ type: "SORT", payload: type });
    }
  };

  //   handle ratings filter
  const handleRatingFilter = (rating) => {
    console.log("rating", rating);
    dispatch({ type: "RATING", payload: rating });

    if (rating === 1) {
      setOneStar(true);
      setTwoStar(false);
      setThreeStar(false);
      setFourStar(false);
    } else if (rating === 2) {
      setOneStar(false);
      setTwoStar(true);
      setThreeStar(false);
      setFourStar(false);
    } else if (rating === 3) {
      setOneStar(false);
      setTwoStar(false);
      setThreeStar(true);
      setFourStar(false);
    } else if (rating === 4) {
      setOneStar(false);
      setTwoStar(false);
      setThreeStar(false);
      setFourStar(true);
    }
  };
  return (
    <div className=" w-screen md:w-[25%] md:h-screen flex flex-col items-left justify-start md:p-2 text-bgPrimary  md:bg-bgPrimary md:text-lightText border-b-2 ">
      <FaFilter
        className="md:hidden pl-2 mt-2"
        onClick={() => setFilterBar(true)}
        size={30}
      />
      <div className=" w-[100%] h-[100%] p-2 md:text-md flex-col justify-evenly hidden md:block">
        <div className=" flex justify-between  ">
          <p className="flex items-center text-xl md:hidden">
            <MdClose />
          </p>
          <p
            className=" underline hover:cursor-pointer hover:text-red-500 md:mb-2"
            onClick={() =>
              dispatch({ type: "INITIAL_API_DATA", payload: all_data })
            }
          >
            Reset Filters
          </p>
        </div>
        {/* categories and reset */}
        <div className=" h-[full] p-1  flex flex-col">
          <div className=" p-1 flex flex-col justify-center">
            <p className="font-semibold ">Categories</p>
            <div className=" p-1 mt-1  flex flex-col items-center justify-center">
              <div className="mt-1 w-[40%] md:w-[50%] flex justify-between items-center  ">
                <p>Sneakers</p>
                <input
                  type="checkbox"
                  onChange={() =>
                    dispatch({ type: "CATEGORY", payload: "sneaker" })
                  }
                />
              </div>
              <div className="mt-1 w-[40%] md:w-[50%] flex justify-between items-center  ">
                <p>Running</p>
                <input
                  type="checkbox"
                  onChange={() =>
                    dispatch({ type: "CATEGORY", payload: "running" })
                  }
                />
              </div>
              <div className="mt-1 w-[40%] md:w-[50%] flex justify-between items-center  ">
                <p>Casual</p>
                <input
                  type="checkbox"
                  onChange={() =>
                    dispatch({ type: "CATEGORY", payload: "casual" })
                  }
                />
              </div>
            </div>
          </div>

          {/* filters */}

          <div className="my-3">
            <p className="font-semibold mb-1">Price</p>
            <label>
              Rs:<span className="mx-2">{price}</span>
            </label>
            <input
              value={price}
              type="range"
              min="100"
              max="30000"
              onChange={(e) => handleRange(e.target.value)}
              className="ml-2"
            />
          </div>

          {/* sort */}
          <div className="my-3 p-1 flex flex-col justify-center">
            <p className="font-semibold ">Sort by Price</p>
            <div className=" p-1 mt-2  flex flex-col items-center justify-center">
              <div className="mt-1 w-[40%] md:w-[50%] flex justify-between items-center  ">
                <p>High-to-Low</p>
                <input
                  type="checkbox"
                  checked={htl}
                  onChange={() => handleSorting("HTL")}
                />
              </div>
              <div className="mt-1 w-[40%] md:w-[50%] flex justify-between items-center  ">
                <p>Low-to-High</p>
                <input
                  type="checkbox"
                  checked={lth}
                  onChange={() => handleSorting("LTH")}
                />
              </div>
            </div>
          </div>

          {/* ratings */}
          <div className="my-3 p-1 flex flex-col justify-center">
            <p className="font-semibold ">Sort by Ratings</p>
            <div className=" p-1 mt-2  flex flex-col items-center justify-center">
              <div className="mt-1 w-[60%] flex justify-between items-center  ">
                <p>1 star & above </p>
                <input
                  type="checkbox"
                  checked={oneStar}
                  onChange={() => handleRatingFilter(1)}
                />
              </div>
              <div className="mt-1 w-[60%] flex justify-between items-center  ">
                <p>2 star & above </p>
                <input
                  type="checkbox"
                  checked={twoStar}
                  onChange={() => handleRatingFilter(2)}
                />
              </div>{" "}
              <div className="mt-1 w-[60%] flex justify-between items-center  ">
                <p>3 star & above </p>
                <input
                  type="checkbox"
                  checked={threeStar}
                  onChange={() => handleRatingFilter(3)}
                />
              </div>{" "}
              <div className="mt-1 w-[60%] flex justify-between items-center  ">
                <p>4 star & above </p>
                <input
                  type="checkbox"
                  checked={fourStar}
                  onChange={() => handleRatingFilter(4)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {filterBar && (
        <div className="z-[99999] w-[100%] h-[100%] p-2 md:text-lg flex-col justify-evenly absolute top-0 bg-bgPrimary text-lightText">
          <div className=" flex justify-between  ">
            <p className="flex items-center text-xl md:hidden">
              <MdClose onClick={() => setFilterBar(false)} size={30} />
            </p>
            <p className="font-bolder underline">Reset Filters</p>
          </div>
          {/* categories and reset */}
          <div className=" h-[full] p-1 text-xl flex flex-col justify-between">
            <div className=" p-1 flex flex-col justify-center">
              <p className="font-semibold ">Categories</p>
              <div className=" p-1 mt-2  flex flex-col items-center justify-center">
                <div className="mt-1 w-[40%] md:w-[50%] flex justify-between items-center  ">
                  <p>Sneakers</p>
                  <input
                    type="checkbox"
                    onChange={() =>
                      dispatch({ type: "CATEGORY", payload: "sneaker" })
                    }
                  />
                </div>
                <div className="mt-1 w-[40%] md:w-[50%] flex justify-between items-center  ">
                  <p>Running</p>
                  <input
                    type="checkbox"
                    onChange={() =>
                      dispatch({ type: "CATEGORY", payload: "running" })
                    }
                  />
                </div>
                <div className="mt-1 w-[40%] md:w-[50%] flex justify-between items-center  ">
                  <p>Casual</p>
                  <input
                    type="checkbox"
                    onChange={() =>
                      dispatch({ type: "CATEGORY", payload: "casual" })
                    }
                  />
                </div>
              </div>
            </div>

            {/* filters */}

            <div className=" my-6">
              <p className="font-semibold mb-1">Price</p>
              <label>
                {" "}
                Rs:<span className="mx-2">{price}</span>
              </label>
              <input
                type="range"
                value={price}
                min="100"
                max="30000"
                onChange={(e) => handleRange(e.target.value)}
                className="ml-2"
              />{" "}
            </div>

            {/* sort */}
            <div className="my-6 p-1 flex flex-col justify-center">
              <p className="font-semibold ">Sort by Price</p>
              <div className=" p-1 mt-2  flex flex-col items-center justify-center">
                <div className="mt-1 w-[40%] md:w-[50%] flex justify-between items-center  ">
                  <p>High-to-Low</p>
                  <input
                    type="checkbox"
                    checked={htl}
                    onChange={() => handleSorting("HTL")}
                  />{" "}
                </div>
                <div className="mt-1 w-[40%] md:w-[50%] flex justify-between items-center  ">
                  <p>Low-to-High</p>
                  <input
                    type="checkbox"
                    checked={lth}
                    onChange={() => handleSorting("LTH")}
                  />{" "}
                </div>
              </div>
            </div>

            {/* ratings */}
            <div className="my-6 p-1 flex flex-col justify-center">
              <p className="font-semibold ">Sort by Ratings</p>
              <div className=" p-1 mt-2  flex flex-col items-center justify-center">
                <div className="mt-1 w-[60%] flex justify-between items-center  ">
                  <p>1 star and above </p>
                  <input
                    type="checkbox"
                    checked={oneStar}
                    onChange={() => handleRatingFilter(1)}
                  />{" "}
                </div>
                <div className="mt-1 w-[60%] flex justify-between items-center  ">
                  <p>2 star and above </p>
                  <input
                    type="checkbox"
                    checked={twoStar}
                    onChange={() => handleRatingFilter(2)}
                  />{" "}
                </div>{" "}
                <div className="mt-1 w-[60%] flex justify-between items-center  ">
                  <p>3 star and above </p>
                  <input
                    type="checkbox"
                    checked={threeStar}
                    onChange={() => handleRatingFilter(3)}
                  />{" "}
                </div>{" "}
                <div className="mt-1 w-[60%] flex justify-between items-center  ">
                  <p>4 star and above </p>
                  <input
                    type="checkbox"
                    checked={fourStar}
                    onChange={() => handleRatingFilter(4)}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
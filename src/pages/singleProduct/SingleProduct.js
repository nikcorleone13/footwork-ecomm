import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { get_Single_Item_API } from "../../apiServices/SingleItem";
import { Loader } from "../../components/loadingScreen/Loader";
import { BiRupee } from "react-icons/bi";
import { FaCartPlus, FaHeart, FaStar } from "react-icons/fa";
import { wishlist_add_API } from "../../apiServices/Wishlist";
import { WishlistContext } from "../../Contexts/Wishlist/WishlistContext";
import { CartContext } from "../../Contexts/Cart/CartContext";
import { cart_add_API } from "../../apiServices/Cart";

const SingleProduct = () => {
  const [prodId, setProdId] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [showItem, setShowItem] = useState(null);
  const [loader, setLoader] = useState(false);
  const [currImg, setCurrImg] = useState();
  const [selectedValue, setSelectedValue] = useState("5");
  const { wishlist, handleWishlist } = useContext(WishlistContext);
  const { cart, updateCart } = useContext(CartContext);
  //   context and params data
  const { productId } = useParams();
  const navigate = useNavigate();

  const handleDisableButton = () => {
    setButtonDisabled(true);
    setTimeout(() => {
      setButtonDisabled(false);
    }, 2000);
  };

  useEffect(() => {
    if (!prodId) {
      localStorage.setItem("item_id", productId);
      const itemId = localStorage.getItem("item_id");
      setProdId(itemId);
  
    }

    // API Call
    const fetchSingleItem = async (productId) => {
      try {
        setLoader(true);
        const item = await get_Single_Item_API(productId);
        setShowItem(item);
        setLoader(false);
      } catch (error) {
        console.error(error);
        setLoader(false);
      }
    };

    fetchSingleItem(productId); // Use productId from state, not storedId
    if (showItem && showItem.img && showItem.img.length > 0) {
      setCurrImg(showItem.img[0]);
    }
  }, [productId]);

  // handle size change
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  // add wihslist
  const handle_Add_Wishlist_Item = (item) => {
    // console.log("WISHLIST CONTEXT", wishlist);
    const token = sessionStorage.getItem("access_token");
    // token not found
    if (!token) {
      navigate("/wishlist");
    }

    // tooken found
    else {
      const ob = wishlist.filter((obj) => obj._id === item._id);
      console.log("FOUND", ob);
      // api call to add
      if (ob.length > 0) {
        console.log("ITEM in wishlist");
      } else {
        wishlist_add_API(item, token).then((response) => {
          console.log("Wishlist item data received", response.wishlist);
          handleWishlist([...response.wishlist]);
        });
      }
    }
  };

  // add to cart

  const handle_Add_Cart_Item = (item) => {
    console.log("Item to cart", item);
    console.log("COntext", cart);

    const token = sessionStorage.getItem("access_token");
    // token not found
    if (!token) {
      navigate("/cart");
    }

    // tooken found
    else {
      const ob = cart.filter((obj) => obj._id === item._id);
      console.log("FOUND", ob);
      // api call to add
      if (ob.length > 0) {
        // console.log("ITEM in wishlist");
      } else {
        cart_add_API(item, token).then((response) => {
          console.log("Cart item data received", response.cart);
          updateCart([...response.cart]);
        });
      }
    }
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        showItem !== null ?
         (
          <>
          <Navbar />
          <div className="h-full md:h-screen w-full  flex flex-col items-center justify-center text-bgPrimary">
            {/* container div */}
            <div className=" pt-2 md:pt-0 w-[100%] md:w-[70%] h-full  md:h-[75%] flex flex-col-reverse justify-between md:flex-row md:justify-center  ">
              <>
                <div className=" p-4 md:p-1 md:w-[60%] h-[70%] md:h-[95%] flex flex-col justify-between items-center">
                  <img
                    src={currImg || showItem?.img[0]}
                    alt="main-item"
                    className="w-[100%] h-[80%] md:w-[100%] md:h-[80%]  md:hover:scale-[125%] duration-200 object-scale-down"
                  />
                  <div className="h-[25%] w-[100%] md:w-[70%]  flex justify-evenly p-1 gap-1">
                    {showItem?.img.map((item) => {
                      return (
                        <img
                          key={item.id}
                          src={item}
                          className="border-2 h-[100%] w-[25%] object-cover md:cursor-pointer  "
                          onClick={() => setCurrImg(item)}
                          alt={item.id}
                          style={
                            currImg === item
                              ? { border: "2px solid #1f2b33" }
                              : { border: "none" }
                          }
                        />
                      );
                    })}
                  </div>
                </div>

                {/* information div */}
                <div className=" md:w-[45%] p-4 md:p-1 flex flex-col justify-between">
                  {/* inital */}
                  <div className=" text-xl flex flex-col items-start justify-between gap-2  text-left  ">
                    <h1 className="text-2xl font-semibold ">
                      <span className="tracking-wider mr-2">
                        {showItem?.brand}
                      </span>
                      {showItem?.name}
                    </h1>
                    <p className=" capitalize ">Type: {showItem?.type}</p>
                    <p className="flex items-center font-bold tracking-wide  ">
                      MRP:
                      <span>
                        <BiRupee />
                      </span>
                      {showItem?.price}
                    </p>
                    <p className="flex items-center bg-yellow-400 px-2 py-1 rounded-xl">
                      {showItem?.rating}
                      <FaStar className="ml-1" />
                    </p>
                  </div>

                  <p className="hidden md:block text-left  ">
                    {showItem?.description}
                  </p>
                  <div className=" md:h-[25%]  hidden md:block ">
                    <div className="h-[100%]   flex flex-col justify-between">
                      <div className=" flex  justify-center gap-2">
                        <h3>Select Size:</h3>
                        <select
                          className="border-2 border-bgPrimary px-2 rounded-md  "
                          value={selectedValue}
                          onChange={(e) => handleChange(e)}
                        >
                          <option value="5">5 UK</option>
                          <option value="6">6 UK</option>
                          <option value="7">7 UK</option>
                          <option value="8">8 UK</option>
                          <option value="9">9 UK</option>
                          <option value="10">10 UK</option>
                          <option value="11">11 UK</option>
                          <option value="12">12 UK</option>
                          <option value="13">13 UK</option>
                        </select>
                      </div>
                      <div className=" my-4 flex justify-between uppercase">
                        <button
                          className="w-[45%] flex items-center justify-center border-2 rounded-md py-2 text-lg bg-yellow-500 text-lightText border-yellow-500 cursor-pointer"
                          onClick={() => {
                            handleDisableButton();
                            handle_Add_Wishlist_Item(showItem);
                          }}
                          disabled={isButtonDisabled}
                        >
                          Add to Wishlist <FaHeart className="ml-2" />{" "}
                        </button>
                        <button
                          className="w-[45%] flex items-center justify-center border-2 rounded-md py-2 text-lg bg-green-500 text-lightText border-green-500 cursor-pointer"
                          onClick={() => {
                            handleDisableButton();
                            handle_Add_Cart_Item(showItem);
                          }}
                          disabled={isButtonDisabled}
                        >
                          Add to Cart{" "}
                          <span className="ml-2">
                            <FaCartPlus />{" "}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </div>

            {/* cta section for mobile */}
            <div className="mt-6 md:hidden text-bgPrimary ">
              <div className=" flex flex-col">
                <div className=" p-4 text-xl flex justify-center items-center">
                  <h3>Select Size:</h3>
                  <select
                    className="ml-2 rounded-lg bg-white text-bgPrimary border-2 border-bgPrimary"
                    value={selectedValue}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="5">5 UK</option>
                    <option value="6">6 UK</option>
                    <option value="7">7 UK</option>
                    <option value="8">8 UK</option>
                    <option value="9">9 UK</option>
                    <option value="10">10 UK</option>
                    <option value="11">11 UK</option>
                    <option value="12">12 UK</option>
                    <option value="13">13 UK</option>
                  </select>
                </div>
                <div className="my-6 flex justify-evenly uppercase ">
                  <button
                    className="w-[45%] flex items-center justify-center border-2 rounded-md py-2 text-lg bg-yellow-500 text-lightText border-yellow-500 cursor-pointer"
                    onClick={() => {
                      handle_Add_Wishlist_Item(showItem);
                      handleDisableButton();
                    }}
                    disabled={isButtonDisabled}
                  >
                    Add to Wishlist{" "}
                    <span className="ml-2">
                      <FaHeart />{" "}
                    </span>
                  </button>
                  <button
                    className="w-[45%] flex items-center justify-center border-2 rounded-md py-2 text-lg bg-green-500 text-lightText border-green-500 cursor-pointer"
                    onClick={() => {
                      handle_Add_Cart_Item(showItem);
                      handleDisableButton();
                    }}
                    disabled={isButtonDisabled}
                  >
                    Add to Cart{" "}
                    <span className="ml-2">
                      <FaCartPlus />{" "}
                    </span>
                  </button>
                </div>
                <div className=" text-left p-4">
                  <p className="text-xl font-semibold">Description</p>
                  <p className="text-left   ">{showItem?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </>
        ) : 
        (
          <h1>Item Not found :( </h1>
          )

      )}
    </>
  );
};

export default SingleProduct;

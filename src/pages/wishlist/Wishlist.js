import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { WishlistContext } from "../../Contexts/Wishlist/WishlistContext";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import {
  wishlist_delete_API,
  wishlist_get_API,
} from "../../apiServices/Wishlist";
import { FaCartPlus } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { Loader } from "../../components/loadingScreen/Loader";
import { CartContext } from "../../Contexts/Cart/CartContext";
import { cart_add_API } from "../../apiServices/Cart";
import { IoClose } from "react-icons/io5";

const Wishlist = () => {
  const [loading, setLoading] = useState(false);
  const [wishlistData, setWishlistData] = useState([]);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const { wishlist, handleWishlist } = useContext(WishlistContext);
  const { userToken } = useContext(AuthContext);
  const { cart, updateCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleDisableButton = () => {
    setButtonDisabled(true);
    setTimeout(() => {
      setButtonDisabled(false);
    }, 2000);
  };

  useEffect(() => {
    setLoading(true);
    const token = sessionStorage.getItem("access_token");
    if (token) {
      // console.log("token", token);
      wishlist_get_API(token)
        .then((response) => {
          console.log("Response PROVIDER", response);
          handleWishlist(response);
          setWishlistData(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    setLoading(false);
  }, [userToken]);

  const handle_Wishlist_Remove_Item = ({ productId }) => {
    setLoading(true);
    console.log("Wish id", productId);
    // console.log("ITEM to add", item);
    const token = sessionStorage.getItem("access_token");
    // console.log("Token value", token);

    wishlist_delete_API(productId, { encodedToken: token }).then((response) => {
      console.log("WIshlist item data received", response);
      setWishlistData([...response]);
      handleWishlist(response);
      setLoading(false);
    });
  };

  const addToCart = (item) => {
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
    <div>
      <Navbar />
      <div className="w-full h-full">
        {wishlistData.length === 0 ? (
          <div className="w-full h-screen text-bgPrimary text-center items-center mx-auto left-0 ">
            <h1 className="text-3xl md:text-5xl mt-[150px]">
              Wishlist is Empty. Add some items
            </h1>
            <Link to="/products">
              <p className="w-[70%] md:w-[20%] flex items-center justify-center font-semibold mt-8 md:mt-12 md:hover:underline underline-offset-2 md:text-lg text-lightText border-2   bg-bgPrimary px-3 py-2 mx-auto  ">
                <span className="mr-1">
                  <FaArrowLeft size={15} />
                </span>
                Return to products Page
              </p>{" "}
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            {loading ? (
              <Loader />
            ) : (
              <>
                <p className="my-6 text-3xl font-bold">
                  Items in Wishlist: {wishlist.length}
                </p>
                {wishlistData.map((item) => {
                  return (
                    // container div
                    <div
                      key={item._id}
                      className="h-full w-[350px] md:w-[800px] flex flex-col md:flex-row items-center md:justify-between md:items-center  relative m-4 border-2 border-bgPrimary rounded-lg p-1 "
                    >
                      {/* image */}
                      <Link
                        to={`/products/${item._id}`}
                        className="w-[100%] md:w-[50%] h-[250px] md:h-[300px]"
                      >
                        <div
                          style={{
                            backgroundImage: `url(${item.img[0]})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                            backgroundRepeat: "no-repeat",
                          }}
                          className="w-[100%] h-[250px] md:h-[300px]"
                        ></div>
                      </Link>

                      {/* cta buttons div */}
                      <div className=" w-[100%] md:w-[40%] relative flex flex-col justify-start items-start p-2 gap-2 ">
                        {" "}
                        <h1 className="font-bold text-lg uppercase">
                          {item.name}
                        </h1>
                        <p className="text-gray-700">{item.brand}</p>
                        <p className="text-base  flex items-center">
                          <FaRupeeSign />
                          <span className="font-semibold "> {item.price}</span>
                        </p>
                        <div
                          className="w-[100%] h-[20%] py-1  text-red-500 border-red-500 border-2  my-1 rounded-md flex items-center justify-center cursor-pointer text-lg hover:text-white md:hover:bg-red-500 duration-200"
                          onClick={() =>
                            handle_Wishlist_Remove_Item({ productId: item._id })
                          }
                        >
                          <IoClose className="mx-2" />
                          Remove from Wishlist
                        </div>
                        <button
                          className="w-[100%] h-[20%] py-1 bg-bgPrimary   text-lightText my-1 rounded-md flex items-center justify-center cursor-pointer text-lg duration-200 tracking-wider"
                          onClick={() => {
                            addToCart(item);
                            handleDisableButton();
                          }}
                          disabled={isButtonDisabled}
                        >
                          <FaCartPlus className="mx-2" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;

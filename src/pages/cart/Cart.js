import React, { useContext, useState } from "react";
import Navbar from "../../components/Navbar";
import { CartContext } from "../../Contexts/Cart/CartContext";
import { Loader } from "../../components/loadingScreen/Loader";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import {
  FaRupeeSign,
  FaPlus,
  FaMinus,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { cart_delete_API, cart_quantity_API } from "../../apiServices/Cart";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const { cart, updateCart } = useContext(CartContext);
  const total = cart.reduce((sum, curr) => {
    sum += curr.price * curr.qty;
    return sum;
  }, 0);

  const navigate = useNavigate();

  // remove  from cart

  const handleCartRemove = ({ productId }) => {
    setLoading(true);
    console.log("Wish id", productId);
    // console.log("ITEM to add", item);
    const token = sessionStorage.getItem("access_token");
    console.log("Token value", token);

    cart_delete_API(productId, { encodedToken: token }).then((response) => {
      console.log("WIshlist item data received", response);
      updateCart(response);
      setLoading(false);
    });
  };

  const quantityAPI = ({ productId, itemAction }) => {
    console.log("Quantity actions", productId, itemAction);
    const token = sessionStorage.getItem("access_token");
    cart_quantity_API({ encodedToken: token }, itemAction, productId).then(
      (response) => {
        console.log("qty changed", response);
        const filter = response.filter((item) => item.qty !== 0);
        updateCart([...filter]);
      }
    );
  };

  return (
    <div>
      <Navbar />
      <div className="w-full h-full">
        {cart.length === 0 ? (
          <div className="w-full h-screen text-bgPrimary text-center items-center mx-auto left-0 ">
            <h1 className="text-3xl md:text-5xl mt-[150px]">
              Empty. Add some items
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
                <p className="mt-3 text-xl font-semibold flex justify-center items-center">
                  Items in Cart:{" "}
                  <span className="flex items-center justify-center mr-2">
                    {cart.length}
                  </span>
                </p>
                <p className="mt-1 text-xl font-semibold flex justify-center items-center">
                  Cart Total:{" "}
                  <span className="flex items-center justify-center">
                    <FaRupeeSign />
                    {total}
                  </span>
                </p>
                <div className="my-12 md:mt-16 w-[350px] md:w-[800px] flex justify-between text-sm md:text-lg">
                  <div className=" flex flex-col items-center justify-between">
                    <RiSecurePaymentFill className="text-3xl md:text-5xl text-[#b09975]  " />
                    <p className="mt-1 md:mt-2  font-semibold text-bgPrimary  ">Secure Payments</p>
                  </div>

                  <div className="hidden md:flex flex-col items-center justify-between">
                    <FaHandHoldingHeart className="text-3xl md:text-5xl text-[#b09975]  " />
                    <p className="mt-1 md:mt-2 font-semibold text-bgPrimary  ">HandPicked</p>
                  </div>

                  <div className=" flex flex-col items-center justify-between">
                    <TbTruckDelivery className="text-3xl md:text-5xl text-[#b09975]  " />
                    <p className="mt-1 md:mt-2 font-semibold text-bgPrimary  ">Fast Delivery</p>
                  </div>

                  <div className=" flex flex-col items-center justify-between">
                    <AiOutlineSafetyCertificate className="text-3xl md:text-5xl text-[#b09975]  " />
                    <p className="mt-1 md:mt-2 font-semibold text-bgPrimary  ">Genuine Products</p>
                  </div>
                </div>

                {cart.map((item) => {
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
                        <div className="flex justify-center items-center   ">
                          <p
                            className="border-2 px-1 cursor-pointer flex justify-center items-center  rounded-lg md:h-[25px]"
                            onClick={() =>
                              quantityAPI({
                                productId: item._id,
                                itemAction: "increment",
                              })
                            }
                          >
                            <FaPlus size={20} className="p-1" />
                          </p>
                          <p className="p-1 text-2xl font-bold mx-2">
                            {item.qty}
                          </p>
                          <button
                           disable={item.qty===1}
                            className="border-2 text-red-500 border-red-500  px-1 cursor-pointer flex justify-center items-center  rounded-lg md:h-[25px]"
                            onClick={() =>{
                              item.qty>=1 ? (quantityAPI({
                                productId: item._id,
                                itemAction: "decrement",
                              })) : (handleCartRemove({ productId: item._id }))}
                            }
                          >
                            <FaMinus size={20} className="p-1" />
                          </button>
                        </div>
                        <div
                          className="w-[100%] h-[20%] py-1  text-red-500 border-red-500 border-2  my-1 rounded-md flex items-center justify-center cursor-pointer text-lg md:hover:text-white md:hover:bg-red-500 duration-200"
                          onClick={() =>
                            handleCartRemove({ productId: item._id })
                          }
                        >
                          <FaCartPlus className="mx-1" />
                          Remove from Cart
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div
                  className="my-12 cursor-pointer w-[350px] md:w-[800px] p-3 bg-yellow-400 hover:bg-yellow-300 flex items-center justify-center uppercase tracking-wider text-xl rounded-xl font-semibold"
                  onClick={() => navigate("/summary")}
                >
                  Checkout
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

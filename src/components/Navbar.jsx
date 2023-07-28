import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHeart,
  FaUserAlt,
  FaShoppingCart,
  FaCompass,
} from "react-icons/fa";
import {} from "react-icons/fa";
import { GiFootprint } from "react-icons/gi";

export const Navbar = () => {
  const [nav, setNav] = useState(true);
  return (
    <div className="z-[9999] top-0 sticky flex justify-between items-center w-full h-[80px]  px-4 bg-bgPrimary  text-lightText    ">
      <div className="text-3xl md:text-5xl font-heading uppercase ">
        <Link
          to="/"
          className="flex justify-center items-center cursor-pointer tracking-wide "
        >
          Footwork
        </Link>
      </div>

      <div className="md:w-[20%] hidden md:flex justify-between md:text-3xl md:mr-8 ">
        <p className=" px-3 cursor-pointer capitalize font-bolder flex justify-center items-center hover:text-lightTextDark  ">
          <Link to="/products">
            {" "}
            <FaCompass />{" "}
          </Link>
        </p>
        <p className=" px-3 cursor-pointer capitalize font-bolder flex justify-center items-center hover:text-lightTextDark  ">
          <Link to="/wishlist">
            {" "}
            <span className="p-2">
              <FaHeart />
            </span>
          </Link>
        </p>
        <p className="px-3 cursor-pointer font-bolder flex justify-center items-center hover:text-lightTextDark">
          <Link to="/cart">
            {" "}
            <span className="p-2">
              <FaShoppingCart />
            </span>
          </Link>
        </p>
        <p className=" px-3 cursor-pointer font-bolder flex justify-center items-center hover:text-lightTextDark">
          <Link to="/profile">
            {" "}
            <span className="p-2">
              <FaUserAlt />
            </span>
          </Link>
        </p>
      </div>

      <div
        className="cursor-pointer text-xl z-[100] md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaBars size={25} /> : <FaTimes size={30} />}
      </div>

      {!nav && (
        <div className="bg-bgPrimary text-lightText w-full h-screen flex flex-col justify-center absolute top-0 left-0 items-center text-4xl font-bolder">
          <Link
            to="/products"
            className=" px-5 cursor-pointer flex justify-center items-center my-8"
          >
            Products
            <span className="px-1"></span>
          </Link>
          <Link
            to="/wishlist"
            className=" px-5 cursor-pointer flex justify-center items-center my-8"
          >
            Wishlist
            <span className="px-1"></span>
          </Link>
          <Link
            to="/cart"
            className=" px-5 cursor-pointer flex justify-center items-center my-8"
          >
            Cart
            <span className="px-2"></span>
          </Link>{" "}
          <Link
            to="/profile"
            className=" px-5 cursor-pointer  flex justify-center items-center my-8"
          >
            Profile <span className="px-1"></span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

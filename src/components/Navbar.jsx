import React, { useState } from "react";

import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoFootstepsSharp } from "react-icons/io5";

export const Navbar = () => {
  const [nav, setNav] = useState(true);
  return (
    <div className="z-[9999] top-0 sticky flex justify-between items-center w-full h-[80px]  px-4 bg-bgPrimary  text-lightText    ">
      <div className="text-3xl md:text-5xl font-heading uppercase ">
        <Link
          to="/"
          className="flex justify-center items-center cursor-pointer"
        >
          Footwork
          <span className="px-1">
            <IoFootstepsSharp />
          </span>
        </Link>
      </div>

      <div className="hidden md:flex justify-center md:text-2xl">
        <p className=" px-3 cursor-pointer capitalize font-bolder flex justify-center items-center hover:text-lightTextDark  ">
          <Link to="/products"> Products </Link>
        </p>
        <p className=" px-3 cursor-pointer capitalize font-bolder flex justify-center items-center hover:text-lightTextDark  ">
          <Link to="/wishlist"> </Link>
          <span className="p-2">
            <FaHeart size={20} />
          </span>
        </p>
        <p className="px-3 cursor-pointer font-bolder flex justify-center items-center hover:text-lightTextDark">
          <Link to="/cart"> </Link>
          <span className="p-2">
            <FaShoppingCart size={20} />
          </span>
        </p>
        <p className=" px-3 cursor-pointer font-bolder flex justify-center items-center hover:text-lightTextDark">
          <Link to="/profile"> </Link>
          <span className="p-2">
            <FaUserAlt size={20} />
          </span>
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

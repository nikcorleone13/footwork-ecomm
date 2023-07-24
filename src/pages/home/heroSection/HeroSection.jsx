import React from "react";
import "./herosection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="h-screen home-background-div flex justify-center items-center md:justify-start  text-white">
        <div className=" md:ml-[5%]">
          <p className="text-7xl md:text-7xl font-semibold leading-[80px] tracking-tight uppercase ">
            Reach the Unknown .
          </p>
          <button className="mt-16 text-2xl md:mt-12 px-6 py-2 border-2 rounded-md h md:cursor:pointer md:hover:bg-lightText md:hover:text-bgPrimary ease-in-out duration-200     ">
            <Link to="/products" className="flex items-center tracking-wide ">
              Discover Products
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

import React from "react";
import { Link } from "react-router-dom";
import { ImSad } from "react-icons/im";
import {FaArrowLeft} from "react-icons/fa6";


const Undefined = () => {
  return (
    <div className="w-screen h-screen bg-lightText  text-bgPrimary ">
      <div className="flex flex-col items-center justify-center pt-16">
        <h1 className="text-5xl font-bold ">404!!</h1>
        <h2 className=" text-2xl font-semibold my-3">UH OH! You're lost.</h2>
        <ImSad className="text-[100px] my-6" />

        <div className="w-[80%] my-6">
          <p className="text-xl">
            The page you've found does not exist.
          </p>
          <Link to="/"><p className="md:hover:text-purple-500 my-6 underline underline-offset-2 text-purple-800 flex items-center justify-center"><span className="mr-1"><FaArrowLeft /></span>Go back to home</p></Link> 
        </div>
      </div>
    </div>
  );
};

export default Undefined;

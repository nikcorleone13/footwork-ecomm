import React from "react";
import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

export const Footer = () => {
  return (
    <div className="bg-bgPrimary text-lightText  w-full flex flex-col justify-center items-center content-center bg-primaryMobile  text-textPrimaryMobile  pt-6 ">
      <div className="w-max text-2xl md:text-3xl  ">
        <p className="text-base  pt-6">
          Discover the Perfect Pair to Elevate Your Style
        </p>
        <p className="text-base  pt-3">
          Privacy PolicyTerms of Use © 2022 FootWork Inc.
        </p>
      </div>
      <div className="my-10 flex flex-coloumn justify-center w-full gap-x-10 ">
        <Link to="https://github.com/nikcorleone13" target="_blank">
          <FaGithub className="text-3xl md:text-3xl hover:text-lightTextDark  hover:scale-110   duration-200 ease-in-out  " />{" "}
        </Link>
        <Link to="https://hashnode.com/@kinikhil" target="_blank">
          <SiHashnode className="text-3xl md:text-3xl hover:text-lightTextDark  hover:scale-110  duration-200 ease-in-out  " />{" "}
        </Link>{" "}
        <Link to="https://twitter.com/kinikhil_k" target="_blank">
          <FaTwitter className="text-3xl md:text-3xl hover:text-lightTextDark  hover:scale-110  duration-200 ease-in-out  " />{" "}
        </Link>{" "}
        <Link
          to="https://www.linkedin.com/in/nikhil-kumar-4b484b198"
          target="_blank"
        >
          <SiLinkedin className="text-3xl md:text-3xl hover:text-lightTextDark  hover:scale-110  duration-200 ease-in-out  " />{" "}
        </Link>{" "}
      </div>
    </div>
  );
};

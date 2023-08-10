import React, { useState, useEffect } from "react";
import { Loader } from "../../components/loadingScreen/Loader";
import { Link, useParams } from "react-router-dom";
import { PiSealCheckFill } from "react-icons/pi";
import { FaArrowLeft,FaRegCopy } from "react-icons/fa6";

const Confirm = () => {
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const { paymentId } = useParams();

  const textToCopy = paymentId;

  const copyToClipboard = () => {
    const textField = document.createElement('textarea');
    textField.innerText = textToCopy;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();

    setCopied(true);

    // Reset the "Copied" message after a certain time
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className=" h-full mt-20 text-bgPrimary flex flex-col gap-6 justify-center items-center">
            <p className="text-3xl font-semibold">Payment Successful !!</p>
            <div className="text-green-500">
              <PiSealCheckFill className="text-[150px] md:text-[200px]" />
            </div>
            <p className="text-xl flex gap-2">
              Payment Id: <span className="font-semibold">{paymentId}</span>
              <span className="text-gray-400 text-2xl cursor-pointer"><FaRegCopy onClick={copyToClipboard} /></span>
            </p>
            {copied && <p>Payment Id copied to clipboard!</p>}

            <Link to="/" className="text-left "><p className="md:hover:text-blue-600  mt-1 mx-2 underline underline-offset-2 text-purple-800 flex items-center"><span className="mr-1"><FaArrowLeft /></span>Shop More !!</p></Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Confirm;

import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [line1, setLine1] = useState("House No.23");
  const [line2, setLine2] = useState("Sea Pearl Society");
  const [locality, setLocality] = useState("Kanjurmarg");
  const [city, setCity] = useState("Mumbai");
  const [state, setState] = useState("Maharashtra");
  const [pincode, setPincode] = useState("400034");
  const [phone,setPhone] = useState("9999900000")
  const [editAddress,setEditAddress] = useState(false);
  const {handleAddress,userAddress,setUserPhone,userPhone} = useContext(AuthContext);
  const navigate = useNavigate();

  const userData = JSON.parse(sessionStorage.getItem("user_info"));
  const first_Name = JSON.parse(sessionStorage.getItem("first_Name"));
  const last_Name = JSON.parse(sessionStorage.getItem("last_Name"));
  const address = line1 + ', ' + line2 + ', ' + locality + ', ' + city + ', ' + state + ', ' + pincode;
  handleAddress(address);
  sessionStorage.setItem("user_address",address );

  // update address
  const updateAddress = () =>{
    const address = line1 + ', ' + line2 + ', ' + locality + ', ' + city + ', ' + state + ', ' + pincode;
    handleAddress(address);
    setUserPhone(phone);
    console.log("address",userAddress,userPhone );
    
  }

  const handleLogout = () =>{
    sessionStorage.removeItem("access_token");
    navigate("/login");
    
  }
  return (
    <>
      <Navbar />
      <div className="flex justify-center text-bgPrimary relative ">
        <div className=" w-[90%] md:w-[50%] mt-12 border-2 p-4 rounded-md">
          <div className=" p-2 text-xl">
          <p className="text-left font-semibold my-1 text-2xl ">User Info</p>
            <div className=" flex justify-between">
              <div className="bg-white font-bold w-[25%] md:w-[15%] text-left">
                Name:
              </div>
              <div className="w-[75%] md:w-[85%] text-left">
              {first_Name}<span className="mx-2">{last_Name}</span>
              </div>
            </div>
            <div className=" flex justify-between">
              <div className="font-bold bg-white w-[25%] md:w-[15%] text-left">
                Email:
              </div>
              <div className="w-[75%] md:w-[85%] text-left">
              {userData.email}
              </div>
            </div>
            <div className=" flex justify-between">
              <div className="font-bold bg-white w-[25%] md:w-[15%] text-left">
                Phone:
              </div>
              <div className="w-[75%] md:w-[85%] text-left">
              +91 <span className="mx-1" >{phone}</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-left font-semibold mt-4 text-2xl ">User Address</p>

            <div className=" text-left mt-2 text-xl ">
              <p className="my-1 tracking-wide md:text-lg">{first_Name}<span className="mx-1">{last_Name}</span></p>
              <p className="my-1 tracking-wide md:text-lg">{line1}, {line2}, {locality} </p>
              <p className="my-1 tracking-wide md:text-lg">{city} {state} - {pincode}</p>
              
              <div className=" bg-white mt-8 flex  justify-between text-xl">
                <button className="bg-bgPrimary text-lightText px-3 py-1 rounded-md" onClick={() =>setEditAddress(!editAddress)}>Edit Address</button>
                <button className="bg-red-500 font-semibold  text-lightText px-3 py-1 rounded-md" onClick={() => handleLogout()}>Logout</button>
              </div>
            </div>
            {
              editAddress &&
              <div className="w-screen h-screen bg-slate-200 absolute top-[-80px] left-0 mx-auto flex justify-center items-center overflow-x:hidden">
                <div className="bg-red-400 w-[90%] md:w-[50%] flex flex-col justify-between items-center  gap-4">
                  <input className="w-[90%] md:w-[70%] p-2 rounded-md active:outline-none" value={line1} type="text" placeholder="Address Line 1. Eg:- House No" onChange={(e) => setLine1(e.target.value) } />
                  <input onChange={(e) => setLine2(e.target.value) }  className="w-[90%] md:w-[70%] p-2 rounded-md active:outline-none" value={line2} type="text" placeholder="Addresss Line 2. Eg:- Society / Area" />
                  <input onChange={(e) => setLocality(e.target.value) }  className="w-[90%] md:w-[70%] p-2 rounded-md active:outline-none" value={locality} type="text" placeholder="Locality/Area" />
                  <input onChange={(e) => setCity(e.target.value) }  className="w-[90%] md:w-[70%] p-2 rounded-md active:outline-none" value={city} type="text" placeholder="City" />
                  <input onChange={(e) => setState(e.target.value) }  className="w-[90%] md:w-[70%] p-2 rounded-md active:outline-none" value={state} type="text" placeholder="State" />
                  <input onChange={(e) => setPincode(e.target.value) }  className="w-[90%] md:w-[70%] p-2 rounded-md active:outline-none" value={pincode} type="text/number" placeholder="Pincode" />
                  <input onChange={(e) => setPhone(e.target.value) }  className="w-[90%] md:w-[70%] p-2 rounded-md active:outline-none" value={phone} type="text" placeholder="Phone Number" />

                  
                  <div className="mt-8 flex flex-col gap-2">
                  <button className="px-3 py-2  bg-green-400"onClick={() => {updateAddress();  setEditAddress(!editAddress);}}>Update Address</button>
                  <button className="px-3 py-2  bg-green-400" onClick={() => setEditAddress(!editAddress)}>Cancel</button>
                  </div>

                </div>

            </div>
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

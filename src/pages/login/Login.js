import React, { useContext, useEffect, useRef, useState } from "react";
import { GiFootprint } from "react-icons/gi";
import Typed from "typed.js";
import { loginAPI, singupAPI } from "../../apiServices/Authentication";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const [signup, setSingup] = useState(false);
  const [reset, setReset] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { changeLogin, setAuthToken, setUserData } = useContext(AuthContext);

  const el = useRef(null);

  //   LOGIN HANDLING
  const handleLogin = (email, password) => {
    console.log(loginEmail, loginPassword);
    if (
      email.toLowerCase().includes("@") &&
      email.toLowerCase().includes(".")
    ) {
      console.log(email, password);

      // resolve promise
      loginAPI(email, password)
        .then((response) => {
            const apiToken =  response.encodedToken;
            const apiUser = response.foundUser;
          console.log("TOKEN received from Login",apiToken);
          console.log("USER received from Login", apiUser);

          // storing in storage
          sessionStorage.setItem("access_token", apiToken);
          sessionStorage.setItem("user_info", JSON.stringify(apiUser));

        //    cheking localstorage

        // console.log("token storage",sessionStorage.getItem("access_token"));
        // console.log("User storage",JSON.parse(sessionStorage.getItem("user_info")));


          //   setting value to context
          setAuthToken(sessionStorage.getItem("access_token"));
          setUserData(sessionStorage.getItem("user_info"));

          changeLogin(response);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    } else {
      alert("Wrong Email Id");
      console.log("Invalid email");
    }
  };

  //   SIGN UP HANDLING

  const handleSignup = () => {
    console.log(firstName, surname, email, password);
    if (
      email.toLowerCase().includes("@") &&
      email.toLowerCase().includes(".")
    ) {
      //   sign up resolve
      singupAPI(email, password, firstName, surname)
        .then((token) => {
          console.log("TOKEN for signup,", token);
          changeLogin(true, token);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Wrong Email Id");
      console.log("Invalid email");
    }
  };

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          "Designed for You, Step by Step",
          "Go Anywhere with Our Stylish Soles.",
          "Feet First, Fashion Always.",
          "Where Fashion Meets Comfort",
          "Step into Style, Step into Comfort",
          "Walk the Extra Mile",
          "Elevating Footwear Experience",
          "Discover Your Perfect Fit",
          "Stride with Confidence",
          "Feet First, Fashion Always",
          "Unleash Your Style Potential ",
          "Innovative Shoes for Inspired Living",
          "Where Comfort and Chic Collide",
          "Step Up Your Style Game",
          "Quality Footwear, Crafted for You",
          "Fashion-forward Effortless Comfort",
          "Empowering Your Every Step",
          "The Art of Shoe Craftsmanship",
          "Feel the Difference",
          "Chase Dreams, Not Comfort",
          "Your Feet's Best Friend",
          "Step into the Future",
        ],
        typeSpeed: 65,
        backSpeed: 50,
        cursorChar: "",
        shuffle: true,
        smartBackspace: false,
        loop: true,
      });
      return () => {
        typed.destroy(); // Cleanup the Typed instance when the component unmounts
      };
    }
  }, []);

  return (
    <div className="h-screen ">
      {/* <Navbar /> */}
      <div className="h-[100%] w-[100%] bg-lightText flex flex-col md:flex-row md:justify-center md:items-center py-4">
        {/* image div */}
        <div className="  w-[100%] md:w-[40%] h-[20%] md:h-[50%] text-4xl md:text-6xl  flex flex-col justify-center items-center ">
          <p className="flex justify-center items-center tracking-wider font-semibold  uppercase">
            Footwork
            <span
              className="px-2"
              style={{
                transform: "scaleX(-1)",
              }}
            >
              <GiFootprint className="-rotate-45" />
            </span>
          </p>
          <p className="hidden md:inline-block  absolute top-[30%] left-[38%] -rotate-45  ">
            <GiFootprint />
          </p>
          <p
            className="hidden md:inline-block  absolute top-[20%] left-[41%] -rotate-45  "
            style={{ transform: "scaleX(-1)" }}
          >
            <GiFootprint className="-rotate-45" />
          </p>

          <div className="h-[10%] w-[100%] mt-4 md:mt-3 flex items-center justify-center ">
            <p ref={el} className="text-xl capitalize"></p>
          </div>
        </div>

        {/* form div */}

        {!signup ? (
          <div className="bg-lightText w-[100%] md:w-[40%] h-[50%] md:h-[60%] mt-8 md:mt-0 flex flex-col justify-center gap-3 rounded-tr-[15%]">
            <p className="text-2xl font-semibold uppercase">Sign In</p>
            <div className="flex flex-col items-center text-lg">
              <div className="w-[80%] md:w[60%] flex flex-col items-center justify-evenly my-3">
                <input
                  className="w-[100%] md:w[60%] m-2 p-2 rounded-lg focus:outline-bgPrimary bg-white text-bgPrimary "
                  type="text"
                  placeholder="Username"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />

                <input
                  className="w-[100%] md:w[60%] m-2 p-2 rounded-lg focus:outline-bgPrimary bg-white text-bgPrimary "
                  type="password"
                  placeholder="Password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>

              <div
                className="bg-bgPrimary text-lightText w-[80%] md:w[60%] my-2 p-2 cursor-pointer "
                onClick={() => handleLogin(loginEmail, loginPassword)}
              >
                Login
              </div>
              {!reset ? (
                <div
                  className="bg-bgPrimary text-lightText w-[80%] md:w[60%] my-2 p-2 cursor-pointer "
                  onClick={() => {
                    setReset(!reset);
                    setLoginEmail("wanyekest@gmail.com");
                    setLoginPassword("wanyekest");
                  }}
                >
                  Login as Guest
                </div>
              ) : (
                <div
                  className="bg-bgPrimary text-lightText w-[80%] md:w[60%] my-2 p-2 cursor-pointer "
                  onClick={() => {
                    setLoginEmail("");
                    setLoginPassword("");
                    setReset(!reset);
                  }}
                >
                  Reset Credentials
                </div>
              )}
            </div>
            <p
              onClick={() => setSingup(!signup)}
              className="cursor-pointer underline underline-offset-2 font-semibold "
            >
              Sign Up with us
            </p>
            <Link to="/products">
              <p className="mx-auto w-[80%] md:w-[60%] mt-20 p-2 bg-bgPrimary text-lightText  rounded-md ">
                Click to go back & continue browsing
              </p>
            </Link>
          </div>
        ) : (
          // signup div
          <div className="bg-lightText w-[100%] md:w-[40%] h-[60%] md:h-[70%] mt-8 md:mt-0 flex flex-col justify-center gap-6 rounded-tl-[15%]">
            {/* login div */}
            <p className="text-2xl font-semibold uppercase">Sign Up</p>

            <div className=" flex flex-col items-center text-lg ">
              {/* username */}
              <div className=" w-[80%] md:w[60%] flex flex-col items-center justify-evenly my-3">
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-[100%] md:w[60%] m-2 p-2 rounded-lg bg-white "
                  type="text"
                  placeholder="First Name"
                />
                <input
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className="w-[100%] md:w[60%] m-2 p-2 rounded-lg bg-white "
                  type="text"
                  placeholder="Last Name"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[100%] md:w[60%] m-2 p-2 rounded-lg bg-white "
                  type="email"
                  placeholder="Email Id"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-[100%] md:w[60%] m-2 p-2 rounded-lg bg-white "
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div
                className="bg-bgPrimary text-lightText w-[80%] md:w[60%] my-2 p-2 cursor-pointer "
                onClick={() => handleSignup()}
              >
                Sign Up
              </div>
            </div>

            <p
              onClick={() => setSingup(!signup)}
              className="cursor-pointer underline underline-offset-2  font-semibold "
            >
              Return to Login{" "}
            </p>
            <Link to="/products">
              <p className="mx-auto w-[80%] md:w-[60%] mt-12 p-2 bg-bgPrimary text-lightText  rounded-md ">
                Click to go back & continue browsing
              </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;

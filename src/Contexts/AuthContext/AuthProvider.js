import React, { useState } from 'react'
import { AuthContext } from './AuthContext';
import { useLocation, useNavigate } from "react-router";



const AuthProvider = ({ children }) => {
    const location = useLocation();
    const [authToken,setAuthToken] = useState('');
    const [userData,setUserData] = useState({});
    
    const navigate = useNavigate();

    // initial api data token setting
    const change_Logged_In = (response) =>{
        navigate(location?.state?.from?.pathname);
    }

    if(!authToken || !userData){
        setAuthToken(sessionStorage.getItem("access_token"));
        setUserData(sessionStorage.getItem("user_info"));
    }
        // console.log("Login token received",sessionStorage.getItem("access_token"));
        // console.log("User Info received",JSON.parse(sessionStorage.getItem("user_info")));

    return (
        <AuthContext.Provider value={{ userData:userData, userToken: authToken, changeLogin: change_Logged_In,setAuthToken:setAuthToken,setUserData:setUserData }}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;
import React, { useState } from 'react'
import { AuthContext } from './AuthContext';
import { useLocation, useNavigate } from "react-router";



const AuthProvider = ({ children }) => {
    const location = useLocation();
    const [authToken,setAuthToken] = useState('');
    const [userData,setUserData] = useState({});
    
    const navigate = useNavigate();

    // initial api data token setting
    const change_Logged_In = () =>{
        navigate(location?.state?.from?.pathname);

    }

    // if(!authToken){
    //     setAuthToken(sessionStorage.getItem("access_token"));
    //     setUserData(sessionStorage.getItem("user_info"));
    // }

    return (
        <AuthContext.Provider value={{ userData:userData, userToken: authToken, changeLogin: change_Logged_In,setAuthToken:setAuthToken,setUserData:setUserData }}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;
import React, { useState,useEffect } from 'react'
import { AuthContext } from './AuthContext';
import { useLocation, useNavigate } from "react-router";



const AuthProvider = ({ children }) => {
    const location = useLocation();
    const [authToken,setAuthToken] = useState('');
    const [userData,setUserData] = useState({});
    const [userAddress,setUserAddress] = useState('House No.23, Sea Pearl Society, Kanjurmarg, Mumbai, Maharashtra-400034');
    const [userPhone,setUserPhone] = useState('')
    
    const navigate = useNavigate();

    // initial api data token setting
    const change_Logged_In = () =>{
        navigate(location?.state?.from?.pathname);

    }

    const handleAddress = (address) =>{
        setUserAddress(address);
    }

    useEffect(() =>{

    },[])
    return (
        <AuthContext.Provider value={{ userData:userData, userToken: authToken, changeLogin: change_Logged_In,setAuthToken:setAuthToken,setUserData:setUserData,handleAddress:handleAddress,userAddress:userAddress,setUserPhone:setUserPhone, userPhone:userPhone }}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const RequiresAuth = ({ children }) => {

    let location = useLocation();
    const user_Token = sessionStorage.getItem("access_token");
    // console.log("Token found", user_Token)


    return user_Token ? (children) : (
        <Navigate to="/login" state={{ from: location }}  />
    )

}

export default RequiresAuth;
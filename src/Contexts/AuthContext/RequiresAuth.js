import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { Navigate } from 'react-router-dom';

const RequiresAuth = ({ children }) => {

    const { logged_In } = useContext(AuthContext);
    console.log("Loged in", logged_In)

    return logged_In ? (children) : (
        <Navigate to="/login" />
    )

}

export default RequiresAuth;
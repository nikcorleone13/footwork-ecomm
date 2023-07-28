import React, { useState } from 'react'
import { AuthContext } from './AuthContext'


const AuthProvider = ({ children }) => {
    const [logged_In, set_Logged_In] = useState(false)
    return (
        <AuthContext.Provider value={{ logged_In: logged_In, set_Logged_In: set_Logged_In }}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;
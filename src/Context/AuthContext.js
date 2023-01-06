import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

// The Auth Context provider consists of all the data and functions that should be globally available and should be called at the appropriate time.
// For example: User can call getToken function of this component/context to get the latest token from any component of the app

const AuthContext = createContext("")
export const useAuthContext = () => useContext(AuthContext)

const AuthProvider = (props) => {

    const [token, setToken] = useState("") // State variable used to store the token

    // if the valid token exists in the localStorage then user is authenticated else not
    const isAuthenticated = () => {
        return localStorage.getItem("token")?.length > 10 ? true : false
    }

    // When user provides with valid credentials and `getAccessToken` API returns success status then we call login function to store the token of the user to be used later in the header of the APIs
    const login = (token) => {
        setToken(token)
        localStorage.setItem("token", token)
    }

    // When user clicks logout button then reset the token of the user to make the user non-authenticated
    const logout = (data) => {
        setToken("")
        localStorage.setItem("token", "")
        window.location.reload()
    }

    // Call this function from any component/file to get the token of the loggedIn user.
    const getToken = () => {
        return localStorage.getItem("token")
    }

    const value = useMemo(() => ({
        getToken,
        login,
        logout,
        isAuthenticated
    }), [token])

    // const value = {
    //     getToken,
    //     login,
    //     isAuthenticated
    // }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

    // username: roeckelein@proflow.at
    // password: Proflow01!
    // "companyId": "63088ece10254c000184df0d"

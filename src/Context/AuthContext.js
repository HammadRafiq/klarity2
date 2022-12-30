import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext("")
export const useAuthContext = () => useContext(AuthContext)

const AuthProvider = (props) => {

    const [token, setToken] = useState("")

    // username: roeckelein@proflow.at
    // password: Proflow01!
    // "companyId": "63088ece10254c000184df0d"

    const isAuthenticated = () => {
        return localStorage.getItem("token")?.length > 10 ? true : false
    }

    const login = (token) => {
        setToken(token)
        localStorage.setItem("token", token)
    }

    const logout = (data) => {
        setToken("")
        localStorage.setItem("token", "")
        window.location.reload()
    }

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

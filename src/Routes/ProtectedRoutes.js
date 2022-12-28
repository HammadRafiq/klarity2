import React from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../Context/AuthContext'

const ProtectedRoutes = ({ routes }) => {
    const { isAuthenticated } = useAuthContext()


    return (
        <Routes>
            {routes?.map((route, index) =>
                true ? (
                    <Route key={index} path={route.path} element={<route.element />} />
                ) :
                    (
                        <Route key={index} path={route.path} element={<Navigate to="/login" />} />
                    )
            )}
        </Routes>
    )
}

export default ProtectedRoutes

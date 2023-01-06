import React from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../Context/AuthContext'

// Routes: React is a SPA (Single Page Application). Routing helps to navigate from one screen (or component) to another.
//        AppRoutes: Consists of all the routing logic and all the routes of the app
//        Protected Routes: All the routes that must only be available for a logged in user are handled here. A non logged-in user won't be able to access the protected routes


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

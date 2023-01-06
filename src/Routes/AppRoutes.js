import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../Pages/Auth/Login'
import ForgotPassword from '../Pages/Auth/ForgotPassword'
import Overview from '../Pages/Overview'
import Registration from '../Pages/Auth/Registration'
import ProtectedRoutes from './ProtectedRoutes'
import Filter from '../Pages/Filter'
import Search from '../Pages/Search'
import SearchResult from '../Pages/Search/SearchResult'

// Routes: React is a SPA (Single Page Application). Routing helps to navigate from one screen (or component) to another.
//        AppRoutes: Consists of all the routing logic and all the routes of the app
//        Protected Routes: All the routes that must only be available for a logged in user are handled here. A non logged-in user won't be able to access the protected routes

const AppRoutes = () => {

    const routes = [
        {
            path: "/overview",
            element: Overview
        },
        {
            path: "/filter/:libraryId",
            element: Filter
        },
        {
            path: "/search/:libraryId",
            element: Search
        },
        {
            path: "/search-result",
            element: SearchResult
        },
    ]

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/" element={<Login />} />
            </Routes>

            <ProtectedRoutes routes={routes} />
        </Router>
    )
}

export default AppRoutes
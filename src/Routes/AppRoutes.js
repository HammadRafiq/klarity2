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
            path: "/search",
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
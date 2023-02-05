import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../Pages/Auth/Login'
import PasswordReset from '../Pages/Auth/PasswordReset'
import NewPassword from '../Pages/Auth/NewPassword'
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
                <Route path="/password-reset" element={<PasswordReset />} />
                <Route path="/new-password" element={<NewPassword />} />
                <Route path="/" element={<Login />} />
            </Routes>

            <ProtectedRoutes routes={routes} />
        </Router>
    )
}

export default AppRoutes

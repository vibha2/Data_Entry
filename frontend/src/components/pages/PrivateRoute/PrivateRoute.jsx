// PrivateRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ roles, element }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const userRole = localStorage.getItem('userRole');

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (roles && roles.length > 0 && !roles.includes(userRole)) {
        return <Navigate to="/" />;
    }

    return <Route element={element} />;
};

export default PrivateRoute;
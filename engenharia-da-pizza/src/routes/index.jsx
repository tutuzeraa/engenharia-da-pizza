import React from 'react';
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthGoogleContext } from "../contexts/authGoogle.jsx";

export const PrivateRoutes = () => {
    const { signed } = useContext(AuthGoogleContext);
    return signed ? <Outlet /> : <Navigate to="/" />;
};
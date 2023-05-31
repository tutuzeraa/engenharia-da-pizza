import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext.jsx';
import { Navigate } from 'react-router-dom';
import { ViewHome } from './viewHome';
import './style.css'

export const Home = () => {
    const { user, logout, signed } = useContext(AuthContext);
    if (signed) {
        return (
            <div>
                <ViewHome user={user} logout={logout} />
            </div >
        );
    } else {
        return <Navigate to='/' />
    }
};




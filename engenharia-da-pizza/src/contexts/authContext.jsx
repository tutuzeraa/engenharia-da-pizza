import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import { Navigate } from 'react-router-dom';

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
    const [signed, setSigned] = useState(false)
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setSigned(true)
                setUser(user)
            } else {
                setUser(null);
            }
        })

        // * cleanup;
        return unsubscribe;
    }, [])

    function logout() {
        setSigned(false)
        return signOut(auth)
    }

    const value = { signed, setSigned, user, setUser, logout };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
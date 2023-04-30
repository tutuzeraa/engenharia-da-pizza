import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';

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

    const value = { signed, setSigned, user, setUser };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
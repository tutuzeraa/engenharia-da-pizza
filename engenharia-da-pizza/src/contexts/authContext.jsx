import React, { useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../services/firebase';

const authContext = React.createContext({
    currentUser: null,
    signInWithGoogle: () => Promise,
    login: () => Promise,
    register: () => Promise,
    logout: () => Promise,
    forgotPassword: () => Promise,
    resetPassword: () => Promise,
});

export const useAuth = () => useContext(authContext)

export const authProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user ? user : null)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    useEffect(() => {
        console.log('The user is', currentUser)
    }, [currentUser])

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function signInWithGoogle() {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    function logout() {
        return signOut(auth)
    }

    const value = {
        currentUser,
        signInWithGoogle,
        login,
        logout,
    }



    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
};
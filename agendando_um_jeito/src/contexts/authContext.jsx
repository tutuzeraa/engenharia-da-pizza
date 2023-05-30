import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../services/firebase";
import { doc, setDoc } from "firebase/firestore";

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
    const [signed, setSigned] = useState(false)
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setSigned(true)
                setUser(user)
            } else {
                setUser(null);
            }
        })
        return unsubscribe;
    }, [])

    function logout() {
        setSigned(false)
        return signOut(auth)
    }

    const Signup = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user;

            const usersCollectionRef = doc(db, 'users', user.uid);
            await setDoc(usersCollectionRef, { email, password })

            setEmail("");
            setPassword("");
        } catch (error) {
            console.log('error: ', error);
        }
    }

    const value = { signed, setSigned, user, setUser, logout, Signup, email, setEmail, password, setPassword };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
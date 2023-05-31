import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, provider, db } from "../services/firebase";
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, updateDoc} from "firebase/firestore";
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
    const [signed, setSigned] = useState(false)
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

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

    const SignIn = async (event) => {
        event.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user)
            setEmail("");
            setPassword("");
            navigate('/Home')
        } catch (error) {
            console.log("error: ", error);
        }
      };

    const SignInWithGoogle = async () => {
        try {
            const userCredential = await signInWithPopup(auth, provider)
                const user = userCredential.user
            const email = user.email;
            const usersCollectionRef = doc(db, 'users', user.uid);
            await updateDoc(usersCollectionRef, { email, googleAuth: true });
            navigate('/Home')
    
        }catch (error) {
            console.log('error: ', error);
        }
    }

    const value = { signed, setSigned, user, setUser, logout, Signup, email, setEmail, password, setPassword, SignIn, SignInWithGoogle};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
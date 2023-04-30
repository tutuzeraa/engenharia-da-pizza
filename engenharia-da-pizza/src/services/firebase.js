// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4xW6nPAPQnQBqgZFI7NlAuC5XRh09cAc",
  authDomain: "engenharia-da-pizza-f4be5.firebaseapp.com",
  projectId: "engenharia-da-pizza-f4be5",
  storageBucket: "engenharia-da-pizza-f4be5.appspot.com",
  messagingSenderId: "512466033746",
  appId: "1:512466033746:web:70922f09ad48f1e230d38b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
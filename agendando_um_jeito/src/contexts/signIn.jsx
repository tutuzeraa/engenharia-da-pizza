import { auth, provider, db } from "../services/firebase.js";
import { doc, updateDoc} from "firebase/firestore";
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';


export const SignIn = async (email, password, setEmail, setPassword) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user)
        setEmail("");
        setPassword("");
    } catch (error) {
        console.log("error: ", error);
    }
  };


  
export const SignInWithGoogle = async () => {
    try {
        const userCredential = await signInWithPopup(auth, provider)
            const user = userCredential.user
        const email = user.email;
        const usersCollectionRef = doc(db, 'users', user.uid);
        await updateDoc(usersCollectionRef, { email, googleAuth: true });

    }catch (error) {
        console.log('error: ', error);
    }
}
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../services/firebase.js";
import { doc, setDoc } from "firebase/firestore";

export const handleSignup = async (email, password, setEmail, setPassword) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const usersCollectionRef = doc(db, "users", user.uid);
    await setDoc(usersCollectionRef, { email, password });

    setEmail("");
    setPassword("");
  } catch (error) {
    console.log("error: ", error);
  }
};

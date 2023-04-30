import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth'
import AvailabilityForm from "./components/AvailabilityForm";

const firebaseConfig = {
  apiKey: "AIzaSyB4xW6nPAPQnQBqgZFI7NlAuC5XRh09cAc",
  authDomain: "engenharia-da-pizza-f4be5.firebaseapp.com",
  projectId: "engenharia-da-pizza-f4be5",
  storageBucket: "engenharia-da-pizza-f4be5.appspot.com",
  messagingSenderId: "512466033746",
  appId: "1:512466033746:web:70922f09ad48f1e230d38b"
};

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div>
      <h1>Availability Form</h1>
      <AvailabilityForm />
    </div>
  );
}

export default App;

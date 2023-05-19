
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../../assets/logo.svg"
import "./styles.css"
import { auth, db } from "../../services/firebase";
import { doc, setDoc } from "firebase/firestore";


export function Register() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Workflow logo" />
        <span>Informe seus dados de cadastro</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-Mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="***************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>


        <button onClick={Signup} className="button" >
          Cadastrar
          <img src="" alt="" />
        </button>

        <div className="footer">
          <p>Já tem conta? </p>
          <Link to="../">Faça login :)</Link>

        </div>

      </form>
    </div>
  );
}


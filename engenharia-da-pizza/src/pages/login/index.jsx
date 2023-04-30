
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import "./styles.css"
import { auth, provider, db } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from 'react'
import { signInWithPopup, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { authContext, useAuth } from "../../contexts/authContext";



export function Login() {
  // * Signin with email and password States
  const { signInWithGoogle, login } = useAuth();
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')




  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Workflow logo" />
        <span>Informe suas credenciais</span>
      </header>

      <form>
        <button type='button' className="googleButton" onClick={signInWithGoogle()}>
          <span className="googleButtonIcon">
            <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" />
          </span>
          <span className="googleButtonText">Faça login com o google</span>
        </button>
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

        <a href="">Esqueceu sua senha?</a>

        <button className="button" onClick={login(email, password)}>
          Se conectar
          <img src="" alt="" />
        </button>

        <div className="footer">
          <p>Ainda não tem conta? <Link to="/register" className="criarconta">Criar Conta</Link></p>

        </div>

      </form>
    </div>
  );

}

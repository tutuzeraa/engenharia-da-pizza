
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../../assets/logo.svg"
import "./styles.css"
import { auth } from "../../services/firebase";




export function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
] = useSignInWithEmailAndPassword(auth);

  function handleLogin(e){
  e.preventDefault();
  signInWithEmailAndPassword(email, password)
}
  if (user) {
    return console.log(user);
  }
  
  return (
  <div className="container">
    <header className = "header">
      <img src={logo} alt="Workflow logo" />
      <span>Informe suas credenciais</span>
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

      <a href="">Esqueceu sua senha?</a>

      <button className="button" onClick={handleLogin}>
        Se conectar
        <img src="" alt="" />
      </button>

      <div className="footer">
        <p>Ainda não tem conta? <Link to="/register">Criar Conta</Link></p>
        
      </div>
      
    </form>
  </div>
  );
}


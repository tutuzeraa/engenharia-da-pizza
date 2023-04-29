
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../../assets/logo.svg"
import "./styles.css"
import { auth } from "../../services/firebase";


export function Register() {
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);


  function handleRegister(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  }
  return (
  <div className="container">
    <header className = "header">
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
      

      <button onClick={handleRegister} className="button" >
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



import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import "./styles.css"
import React from 'react'


export function ViewLogin({ SignIn, SignInWithGoogle, setEmail, setPassword }) {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Workflow logo" />
        <span>Informe suas credenciais</span>
      </header>

      <form>
        <button type='button' className="googleButton" onClick={SignInWithGoogle}>
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

        <button className="button" onClick={SignIn}>
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

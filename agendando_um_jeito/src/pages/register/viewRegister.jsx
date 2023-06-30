import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/logo.svg";
import "./styles.css";

export function ViewRegister({ handleSignup, setEmail, setPassword }) {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Workflow logo" />
        <span>Informe seus dados de cadastro</span>
      </header>

      <form onSubmit={handleSignup}>
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

        <button type="submit" className="button">
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

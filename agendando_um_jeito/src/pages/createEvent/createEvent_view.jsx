import { BrowserRouter, Link, Router } from "react-router-dom";
import logo from "../../assets/logo.svg";
import React from 'react';
import './styles.css';

export function ViewCreateEvent({ SignIn, SignInWithGoogle, setEmail, setPassword }) {
  return (
    <div className="modal">
      <h1 className="tituloModal">Criar Turno</h1>
      <form>
        <div className="inputContainer">
          <label>Nome do Evento</label>
          <input
            type="text"
            name="nomeEvento"
            id="nomeEvento"
            placeholder="Insira um nome para seu evento" />
        </div>

        <div className="inputContainer">
          <label>Nome do responsável</label>
          <input
            type="text"
            name="nomeResponsavel"
            id="nomeResponsavel"
            placeholder="Insira o nome da pessoa responsável" />
        </div>

        <div className="inputContainer">
          <label>Telefone do responsável</label>
          <input
            type="text"
            name="telefone"
            id="telefone"
            placeholder="Insira o telefone da pessoa responsável" />
        </div>

        <div className="inputContainer">
          <label>Selecione o dia da Semana</label>
          <br />
          <input
            type="checkbox"
            id="segunda"
            name="segunda"
            value="segunda" />
          <label>segunda</label>

          <br />
          <input
            type="checkbox"
            id="terca"
            name="terca"
            value="terca" />
          <label>terca</label>

          <br />
          <input
            type="checkbox"
            id="quarta"
            name="quarta"
            value="quarta" />
          <label>quarta</label>

          <br />
          <input
            type="checkbox"
            id="quinta"
            name="quinta"
            value="quinta" />
          <label>quinta</label>

          <br />
          <input
            type="checkbox"
            id="sexta"
            name="sexta"
            value="sexta" />
          <label>sexta</label>
        </div>

        <button className="button">
          Continuar
          <img src="" alt="" />
        </button>

      </form>
    </div>
  );
}

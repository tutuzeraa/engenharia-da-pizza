
import { BrowserRouter, Link, Router } from "react-router-dom";
import React from 'react'


export function ViewCreateShift() {
  return (
    <div>
    <h1>Criar Turno</h1>
    <form>
        <div className="inputContainer">
            <label>Selecione o dia do turno</label>
            <br/>
            <input 
              type="checkbox"
              id="segunda"
              name="segunda" 
              value="segunda"/>
            <label>segunda</label>
      
            <input 
              type="checkbox"
              id="terca"
              name="terca" 
              value="terca"/>
            <label>terca</label>
      
            <input 
              type="checkbox"
              id="quarta"
              name="quarta" 
              value="quarta"/>
            <label>quarta</label>
        </div>
    
        <div className="inputContainer">
            <label>Nome do Turno</label>
            <input type="text"
             name="nomeEvento"
             id="nomeEvento"
             placeholder="Insira um nome ao turno"/>
        </div>
      
        <div className="inputContainer">
            <label>Máximo de pessoas:</label>
            <input type="text"
             name="nomeResponsavel"
             id="nomeResponsavel"
             placeholder="Insira o número máximo de pessoas"/>
        </div>
    
        <div className="inputContainer">
            <label>Horário de começo:</label>
            <input type="time"
             name="nomeResponsavel"
             id="nomeResponsavel"
             placeholder="Insira o horário de começo"/>
        </div>
    
        <div className="inputContainer">
            <label>Horário de término:</label>
            <input type="time"
             name="nomeResponsavel"
             id="nomeResponsavel"
             placeholder="Insira o horário de término"/>
        </div>
    
        <button className="button">
            salvar
            <img src="" alt="" />
        </button>
    
    </form>
    </div>
  );

}

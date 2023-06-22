import { Link } from "react-router-dom";
import React from 'react';
import './styles.css';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';

export function ViewCreateEvent({ handleSubmit, handleEventNameChange, handleResponsableChange, handlePhoneChange, handleDateChange, selectedDate, selectedVacancies, handleVacanciesChange }) {
  return (
    <div className="modal">
      <h1 className="tituloModal">Criar Evento</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label>Nome do Evento</label>
          <input
            type="text"
            name="nomeEvento"
            id="nomeEvento"
            placeholder="Insira um nome para seu evento" 
            onChange={handleEventNameChange}
            
            />
        </div>

        <div className="inputContainer">
          <label>Nome do responsável</label>
          <input
            type="text"
            name="nomeResponsavel"
            id="nomeResponsavel"
            placeholder="Insira o nome da pessoa responsável" 
            onChange={handleResponsableChange}
            />
        </div>

        <div className="inputContainer">
          <label>Telefone do responsável</label>
          <input
            type="text"
            name="telefone"
            id="telefone"
            placeholder="Insira o telefone da pessoa responsável" 
            onChange={handlePhoneChange}
            />
        </div>

        <div className="inputContainer">
          <label>Vagas Disponíveis</label>
          <input
            type="number"
            name="vacancies"
            id="vacancies"
            placeholder="Insira o número de vagas disponíveis"
            onChange={handleVacanciesChange}
            value={selectedVacancies}
          />
        </div>

        <div className="inputContainer">
          <label>Data e Hora do Evento</label>
          <br />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Selecione a data"
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(props) => <input {...props} />}
            />
          </LocalizationProvider>
        </div>

        <button className="button" type="submit">
          Continuar
        </button>

      </form>
      <Link to="/Home" className="button">Voltar a home </Link>
    </div>
  );
}

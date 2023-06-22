import React from 'react';
import './style.css';

const Evento = () => {
    return (
        <div className="container">
            <div className="col">
                <div className="card">
                    <h2 className="title">Nome Evento</h2>
                    <h4 className="ownerName">Nome responsável</h4>
                    <h4 className="phoneNumber">Telefone Responsável</h4>
                    <p className="date">21/06/2023</p>
                    <p className="time">08:00 até 10:00</p>
                    <p className="vacancies">3 vagas disponíveis</p>
                    <button>Voluntariar-se</button>
                </div>
            </div>
        </div>
    );
};

export default Evento;

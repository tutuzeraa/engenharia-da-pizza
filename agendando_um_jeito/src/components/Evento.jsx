import React from 'react';
import './style.css';

const Evento = ({ event }) => {
    const formattedDate = event.date.toDate().toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    return (
        <div className="container">
            <div className="col">
                <div className="card">
                    <h2 className="title">{event.title}</h2>
                    <h4 className="ownerName">Responsável: {event.ownerName}</h4>
                    <h4 className="phoneNumber">Telefone: {event.phoneNumber}</h4>
                    <p className="date">{formattedDate}</p>
                    <p className="vacancies">{event.vacancies} vagas disponíveis!</p>
                    <button>Voluntariar-se</button>
                </div>
            </div>
        </div>
    );
};

export default Evento;

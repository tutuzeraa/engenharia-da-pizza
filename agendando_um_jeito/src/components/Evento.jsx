import React from 'react';
import './style.css';

const Evento = ({ event, handleVoluntariar }) => {
    const local_event = event.data()
    const formattedDate = local_event.date.toDate().toLocaleString('en-US', {
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
                    <h2 className="title">{local_event.title}</h2>
                    <h4 className="ownerName">Responsável: {local_event.ownerName}</h4>
                    <h4 className="phoneNumber">Telefone: {local_event.phoneNumber}</h4>
                    <p className="date">{formattedDate}</p>
                    <p className="vacancies">{local_event.vacancies} vagas disponíveis!</p>
                    <button onClick={() => handleVoluntariar(event.id)}>Voluntariar-se</button>
                </div>
            </div>
        </div>
    );
};

export default Evento;

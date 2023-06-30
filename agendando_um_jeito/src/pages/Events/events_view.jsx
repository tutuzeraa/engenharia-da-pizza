import React from 'react';
import 'firebase/compat/firestore'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import './styles.css'; // Import the CSS file
import logo from '../../assets/logo.svg'
import userpic from '../../assets/userpic.svg'
import { Navigate } from 'react-router-dom';
import Evento from '../../components/Evento';


export function ViewEvents({ signed, logout, handleSubmit, startDate, setStartDate, endDate, setEndDate, user, filteredEventos, handleVoluntariar }) {
    if (signed) {
        return (
            <div>
                <div className='header'>
                    <img className='logo' src={logo} alt="logo da Agendando Um Jeito" />
                    <label className='email' htmlFor="email" placeholder=''>{user.email}</label>
                    <img className='userpic' src={userpic} alt="foto do usuário logado" />
                    <button onClick={() => logout()}> sair </button>
                </div>
                <div className='body'>
                    <h2>Filtre os eventos por data!</h2>
                    <div className='datas'>
                        <form onSubmit={handleSubmit}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Data de início"
                                    value={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    disablePast
                                    fullWidth
                                    inputFormat="dd/MM/yyyy"
                                    format="dd/MM/yyyy"
                                    style={{ zIndex: 9999 }}
                                />
                                <DatePicker
                                    label="Data de término"
                                    value={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    disablePast
                                    fullWidth
                                    inputFormat="dd/MM/yyyy"
                                    format="dd/MM/yyyy"
                                    style={{ zIndex: 9999 }}
                                />
                            </LocalizationProvider>
                        </form>
                    </div>
                    <div className='eventos-container'>
                        <div className='eventos-scroll'>
                            {filteredEventos.map((event, index) => (
                                <Evento key={index} event={event} handleVoluntariar={handleVoluntariar} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <Navigate to='/' />
    };

}

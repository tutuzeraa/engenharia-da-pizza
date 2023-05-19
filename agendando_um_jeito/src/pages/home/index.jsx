
import React, { useContext } from 'react';
import logo from '../../assets/logo.svg'
import userpic from '../../assets/userpic.svg'
import ilustracaoDisponibilidade from '../../assets/ilustraçãoDisponibilidade.svg'
import './style.css'
import { AuthContext } from '../../contexts/authContext.jsx';
import { Link, Navigate } from 'react-router-dom';

export const Home = () => {
    const { user, logout, signed } = useContext(AuthContext);
    console.log(signed)
    if (signed) {
        return (
            <div>
                <div className='header'>
                    <img className='logo' src={logo} alt="logo da Agendando Um Jeito" />
                    <label className='email' htmlFor="email" placeholder=''>{user.email}</label>
                    <img className='userpic' src={userpic} alt="foto do usuário logado" />
                    <button onClick={() => logout()}> sair </button>
                </div >

                <div className='body'>
                    <img className='ilustracao' src={ilustracaoDisponibilidade} alt="Ilustração de uma pessoa em frente a um calendário gigante" />
                    <Link to={'/AvailabilityForm'}><button className='button'>Preencha sua Disponibilidade</button></Link>
                </div>

            </div >

        );
    } else {
        return <Navigate to='/' />
    }
};
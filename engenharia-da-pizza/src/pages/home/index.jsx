
import React, { useContext } from 'react';
import logo from '../../assets/logo.svg'
import userpic from '../../assets/userpic.svg'
import ilustracaoDisponibilidade from '../../assets/ilustraçãoDisponibilidade.svg'
import './style.css'
import { AuthContext } from '../../contexts/authContext.jsx';

export const Home = () => {
    const { user, signed } = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <div className='header'>
                <img className='logo' src={logo} alt="logo da Agendando Um Jeito" />
                <label className='email' htmlFor="email" placeholder=''>{user.email}</label>
                <img className='userpic' src={userpic} alt="foto do usuário logado" />
                <button> <a href="../">sair</a> </button>
            </div>

            <div className='body'>
                <img className='ilustracao' src={ilustracaoDisponibilidade} alt="Ilustração de uma pessoa em frente a um calendário gigante" />
                <button className='button'>Preencha sua Disponibilidade</button>
            </div>

        </div>

    );
};
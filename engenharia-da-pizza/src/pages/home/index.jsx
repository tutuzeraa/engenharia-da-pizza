import { useContext } from "react";
import React from 'react';
import { AuthGoogleContext } from "../../contexts/authGoogle";

export const Home = () => {
    const { user, signOut } = useContext(AuthGoogleContext);
    let userLogado = JSON.parse(user);
    return (
        <div>
            <h1>Bem vindo: {userLogado.displayName}</h1>
            <button onClick={() => signOut()}>sair</button>
        </div>
    );
};
import logo from '../../assets/logo.svg'
import userpic from '../../assets/userpic.svg'
import ilustracaoDisponibilidade from '../../assets/ilustraçãoDisponibilidade.svg'
import './style.css'

export function App() {
    return <div>
        <div className='header'>
            <img className='logo' src={logo} alt="logo da Agendando Um Jeito" />
            <label className='email' htmlFor="email" placeholder=''>@gmail.com</label>
            <img className='userpic' src={userpic} alt="foto do usuário logado" />
        </div>

        <div className='body'>
            <img className='ilustracao' src={ilustracaoDisponibilidade} alt="Ilustração de uma pessoa em frente a um calendário gigante" />
            <button className='button'>Preencha sua Disponibilidade</button>
        </div>

    </div>;
}

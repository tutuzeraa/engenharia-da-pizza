import logo from '../../assets/logo.svg'
import userpic from '../../assets/userpic.svg'
import ilustracaoDisponibilidade from '../../assets/ilustraçãoDisponibilidade.svg'
import './style.css'
import { Link } from 'react-router-dom';

export const ViewHome = ({ user, logout }) => {

    return (
        <div>
            <div className='header'>
                <img className='logo' src={logo} alt="logo da Agendando Um Jeito" />
                <label className='email' htmlFor="email" placeholder=''>{user.email}</label>
                <img className='userpic' src={userpic} alt="foto do usuário logado" />
                <button className='logout' onClick={() => logout()}> sair </button>
            </div >

            <div className='body'>
                <img className='ilustracao' src={ilustracaoDisponibilidade} alt="Ilustração de uma pessoa em frente a um calendário gigante" />
                <Link to={'/Events'}><button className='button'>Preencha sua Disponibilidade</button></Link>
                <Link to={'/CreateEvent'}><button className='button'>Crie um novo Evento</button></Link>
            </div>


        </div >
    )
}


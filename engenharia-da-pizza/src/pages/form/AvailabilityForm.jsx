import React, { useState, useContext, useEffect } from 'react';
import 'firebase/compat/firestore'
import { db } from "../../services/firebase";
import { AuthContext } from '../../contexts/authContext.jsx';
import { Button} from '@material-ui/core';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import './AvailabilityForm.css'; // Import the CSS file

import logo from '../../assets/logo.svg'
import userpic from '../../assets/userpic.svg'
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { Navigate } from 'react-router-dom';



export const AvailabilityForm = () => {
    const [date, setDate] = useState(new Date());
    const [times, setTimes] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const { user, logout, signed } = useContext(AuthContext);
    //console.log(user.uid);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (editingIndex !== null) {
        // If editing an existing entry, update it in the array
        const updatedTimes = [...times];
        updatedTimes[editingIndex] = date.toISOString();
        setTimes(updatedTimes);
        setEditingIndex(null);
      } else {
        // If creating a new entry, add it to the end of the array
        setTimes([...times, date.toISOString()]);
      }
      setDate(new Date());
    };
  
    const handleEdit = (index) => {
      // Set the date picker to the existing date and time
      const dateTime = new Date(times[index]);
      setDate(dateTime);
      setEditingIndex(index);
    };
  
    const handleDelete = (index) => {
      const updatedTimes = [...times];
      updatedTimes.splice(index, 1);
      setTimes(updatedTimes);
    };
  
    const handleClear = () => {
      setTimes([]);
    };
  
    const handleSave = async () => {
      const currentUser = doc(db, 'users', user.uid);
      await updateDoc(currentUser, {availability:times})
      .then(() => {
        console.log("Availability saved successfully!");
      })
      .catch((error) => {
        console.error("Error saving availability: ", error);
      });
    };

    const handleLoadData = async () => {
      const currentUser = doc(db, 'users', user.uid);
      const docSnap = await getDoc(currentUser);
      const info  = docSnap.data();
      if (info.availability && info.availability.length > 0) {
        setTimes([...info.availability])
      }

    };

    const handleNotSigned = () =>{
      return <Navigate to='/' />
    }

    useEffect(() => {
      if (signed) {
        handleLoadData()
      }else{
        handleNotSigned()
      }
      
    }, []);

    if (signed)
    {return (
      <div>
        <div className='header'>
                    <img className='logo' src={logo} alt="logo da Agendando Um Jeito" />
                    <label className='email' htmlFor="email" placeholder=''>{user.email}</label>
                    <img className='userpic' src={userpic} alt="foto do usuário logado" />
                    <button onClick={() => logout()}> sair </button>
        </div >
        <div className='body'>

          <h2>Marque sua Disponibilidade</h2>
          
          <form onSubmit={handleSubmit}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker onChange={setDate} value={date} 
              label="Clique para adicionar data e horário"
              ampm={false}
              disablePast
              fullWidth
              inputFormat="dd/MM/yyyy HH:mm"
              format="dd/MM/yyyy HH:mm"
              style={{ zIndex: 9999 }}
              />
            
          </LocalizationProvider>

            
            {editingIndex !== null && (
              <Button type="button" onClick={() => setEditingIndex(null)}>
                Cancelar
              </Button>
            )}
            <Button type="submit">{editingIndex !== null ? 'Atualizar' : 'Adicionar'}</Button>
          </form>
          <h2>Disponibilidade Atual:</h2>
          <ul>
            {times.map((time, index) => (
              <li key={time}>
                {new Date(time).toLocaleString()}
                <button type="button" onClick={() => handleEdit(index)}>
                  Editar
                </button>
                <button type="button" onClick={() => handleDelete(index)}>
                  Apagar
                </button>
              </li>
            ))}
          </ul>
          {times.length > 0 && (
            <>
              <button type="button" onClick={handleClear}>
                Limpar
              </button>
              <button type="button" onClick={handleSave}>
                Salvar
              </button>
            </>
          )}
          
        </div>
      </div>
    );
  } else {
    return <Navigate to='/' />
  }
  };
  
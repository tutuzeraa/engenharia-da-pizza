import React, { useState, useContext, useEffect } from 'react';
import 'firebase/compat/firestore'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import { AuthContext } from '../../contexts/authContext.jsx';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import './styles.css'; // Import the CSS file
import logo from '../../assets/logo.svg'
import userpic from '../../assets/userpic.svg'
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { Navigate } from 'react-router-dom';
import Evento from '../../components/Evento';

export const Events = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { user, logout, signed } = useContext(AuthContext);
  const [eventos, setEventos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const availability = {
      startDate: startDate ? startDate.toISOString() : null,
      endDate: endDate ? endDate.toISOString() : null
    };
    saveAvailability(availability);
  };

  const saveAvailability = async (availability) => {
    const currentUser = doc(db, 'users', user.uid);
    await updateDoc(currentUser, { availability })
      .then(() => {
        console.log("Availability saved successfully!");
      })
      .catch((error) => {
        console.error("Error saving availability: ", error);
      });
  };

  const handleVoluntariar = async (eventId) => {
    try {
      console.log(user.email)
      const eventRef = doc(db, "eventos", eventId);
      const eventDoc = await getDoc(eventRef);
      const eventData = eventDoc.data();

      if (eventData) {
        const participants = eventData.participants || [];
        participants.push(user.email); // Assuming the user's email is available

        await updateDoc(eventRef, { participants });
        console.log("Successfully added to participants list!");
      } else {
        console.error("Event not found!");
      }
    } catch (error) {
      console.error("Error adding to participants list:", error);
    }
  };

  const handleLoadData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "eventos"));
      const eventosData = querySnapshot.docs.map((doc) => doc);
      setEventos(eventosData);
    } catch (error) {
      console.error("Error fetching eventos:", error);
    }

    try {
      const currentUser = doc(db, "users", user.uid);
      const docSnap = await getDoc(currentUser);
      const info = docSnap.data();
      if (info.availability) {
        setStartDate(info.availability.startDate?.toDate() ?? null);
        setEndDate(info.availability.endDate?.toDate() ?? null);
      }
    } catch (error) {
      console.error("Error fetching user availability:", error);
    }
  };

  const handleNotSigned = () => {
    return <Navigate to='/' />
  }



  const filteredEventos = eventos.filter((event) => {
    const formattedDate = event.data().date.toDate()
    console.log(formattedDate)
    console.log(startDate)
    console.log(endDate)
    return (
      (!startDate || formattedDate >= startDate) &&
      (!endDate || formattedDate <= endDate)
    );
  });

  useEffect(() => {
    if (signed) {
      handleLoadData()
    } else {
      handleNotSigned()
    }
  }, []);

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
  }
};

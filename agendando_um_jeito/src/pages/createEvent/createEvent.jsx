import React, { useState, useContext } from 'react';
import 'firebase/compat/firestore'
import { db } from "../../services/firebase";
import { AuthContext } from '../../contexts/authContext.jsx';

import { addDoc, collection } from "firebase/firestore";
import { Navigate } from 'react-router-dom';
import {ViewCreateEvent} from './createEvent_view'

export function CreateEvent() {
  const [eventName, setEventName] = useState(null);
  const [responsable, setResponsable] = useState(null);
  const [phone, setPhone] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [vacancies, setVacancies] = useState(null);
  const { signed } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    // Create a new document in the "evento" collection
    e.preventDefault()
    try {
      const docRef = await addDoc(collection(db, "eventos"),{
        title: eventName,
        ownerName: responsable,
        phoneNumber: phone,
        date: selectedDate,
        vacancies: vacancies,
        participants: []
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleResponsableChange = (e) => {
    setResponsable(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleDateChange = (date) => {
    const today = new Date();
    const maxDate = new Date('2099-12-31');

    if (date >= today && date <= maxDate) {
      setSelectedDate(date);
    } else {
      setErrorMessage('Vacancies must be between 0 and 200');
    }
  };

  const handleVacanciesChange = (e) => {
    const value = Number(e.target.value);

    if (value >= 0 && value <= 200){ 
      setVacancies(value);
    } else{
      setErrorMessage('Vacancies must be between 0 and 200');
    }
  };

  
  if (signed){
    return (
      <ViewCreateEvent handleSubmit = {handleSubmit} handleEventNameChange={handleEventNameChange} handlePhoneChange={handlePhoneChange} handleResponsableChange={handleResponsableChange} handleDateChange={handleDateChange} selectedDate={selectedDate} handleVacanciesChange={handleVacanciesChange} selectedVacancies={vacancies}/>
    );
  } else {
    return <Navigate to='/' />
  }
}
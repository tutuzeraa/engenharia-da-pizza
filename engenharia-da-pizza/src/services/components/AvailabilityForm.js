import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Button, TextField, Typography } from '@material-ui/core';


const AvailabilityForm = () => {
    const [date, setDate] = useState(new Date());
    const [times, setTimes] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
  
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
  
    const handleSave = () => {
      const db = firebase.firestore();
      db.collection("users").doc('ZsCAoHiByW0JKUBoUvOn').update({
        availability: times
      })
      .then(() => {
        console.log("Availability saved successfully!");
      })
      .catch((error) => {
        console.error("Error saving availability: ", error);
      });
    };
  
    return (
      <div>
        <h2>Enter your availability</h2>
        <form onSubmit={handleSubmit}>
        <Typography variant="h6">Select your availability:</Typography>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker onChange={setDate} value={date} 
            label="Date and time"
            ampm={false}
            disablePast
            fullWidth
            inputFormat="yyyy/MM/dd HH:mm"
            />
        </MuiPickersUtilsProvider>
          
          {editingIndex !== null && (
            <Button type="button" onClick={() => setEditingIndex(null)}>
              Cancel
            </Button>
          )}
          <button type="submit">{editingIndex !== null ? 'Update' : 'Add'}</button>
        </form>
        <h2>Current availability:</h2>
        <ul>
          {times.map((time, index) => (
            <li key={time}>
              {new Date(time).toLocaleString()}
              <button type="button" onClick={() => handleEdit(index)}>
                Edit
              </button>
              <button type="button" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        {times.length > 0 && (
          <>
            <button type="button" onClick={handleClear}>
              Clear All
            </button>
            <button type="button" onClick={handleSave}>
              Save
            </button>
          </>
        )}
      </div>
    );
  };
  
  export default AvailabilityForm;
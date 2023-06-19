import React, { useContext } from "react";
import { AuthContext } from '../../contexts/authContext.jsx';
//import "./styles.css"
import { ViewCreateEvent } from "./createEventForm_view.jsx";

export function CreateEventForm() {
  return (
    <ViewCreateEvent />
  );
}
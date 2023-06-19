import React, { useContext } from "react";
import { AuthContext } from '../../contexts/authContext.jsx';
//import "./styles.css"
import { ViewCreateEvent } from "./createEvent_view.jsx";

export function CreateEvent() {
  return (
    <ViewCreateEvent />
  );
}
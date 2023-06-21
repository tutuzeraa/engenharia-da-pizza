import "./styles.css"
import React, { useContext, useState } from 'react'
import { ViewCreateShift } from "./createShift_view";
import { AuthContext } from "../../contexts/authContext";


export function CreateShift() {
  return (
    <div>
      <ViewCreateShift></ViewCreateShift>
    </div>
  );
}
import React, { useContext } from "react";
import { AuthContext } from '../../contexts/authContext.jsx';
import "./styles.css"
import { ViewRegister } from "./viewRegister.jsx";

export function Register() {
  const { Signup, setEmail, setPassword } = useContext(AuthContext);
  return (
    <ViewRegister Signup={Signup} setEmail={setEmail} setPassword={setPassword} />
  );
}


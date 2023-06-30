import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext.jsx";
import { handleSignup } from "../../contexts/signUp.jsx";
import { ViewRegister } from "./viewRegister.jsx";

export function Register() {
  const {email, setEmail, password, setPassword } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(email, password, setEmail, setPassword);
  };

  return (
    <ViewRegister
      handleSignup={handleSubmit}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  );
}

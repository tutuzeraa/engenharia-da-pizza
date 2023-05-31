
import "./styles.css"
import React, { useContext, useState } from 'react'
import { ViewLogin } from "./login_view";
import { AuthContext } from "../../contexts/authContext";


export function Login() {
  const {setEmail, SignIn, setPassword, SignInWithGoogle} = useContext(AuthContext);
  return (
    <div>
      <ViewLogin setEmail={setEmail} SignIn={SignIn} setPassword={setPassword} SignInWithGoogle={SignInWithGoogle}></ViewLogin>
    </div>
  );
}


import "./styles.css"
import React, { useContext } from 'react'
import { ViewLogin } from "./login_view";
import { AuthContext } from "../../contexts/authContext";
import { SignIn, SignInWithGoogle } from "../../contexts/signIn";
import { useNavigate } from "react-router-dom";


export function Login() {
  const {email, setEmail, password, setPassword} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    SignIn(email, password, setEmail, setPassword);
    navigate('/Home')
  };

  return (
    <div>
      <ViewLogin setEmail={setEmail} SignIn={handleSubmit} setPassword={setPassword} SignInWithGoogle={() => {SignInWithGoogle().then(() => navigate('/Home'));}}></ViewLogin>
    </div>
  );
}

import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Register } from "./pages/register";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { AuthProvider } from "./contexts/authContext";
import { Events } from "./pages/Events";
import { CreateEvent } from "./pages/createEvent/createEvent";


export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Home />} />
            <Route path='/Events' element={<Events />} />
            <Route path='/CreateEvent' element={<CreateEvent />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}
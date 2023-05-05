import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Register } from "./pages/register";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { AuthProvider } from "./contexts/authContext";
import { AvailabilityForm } from "./pages/form/AvailabilityForm";

export function App() {
  return (
    <AuthProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Home />} />
            <Route path='/AvailabilityForm' element={<AvailabilityForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  )
}
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Register } from "./pages/register";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
        <Routes>
          <Route path='/register' element={<Register />} />
        </Routes>
        <Routes>
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
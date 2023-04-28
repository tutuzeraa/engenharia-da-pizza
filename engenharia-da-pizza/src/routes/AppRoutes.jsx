import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Login } from "../pages/login";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
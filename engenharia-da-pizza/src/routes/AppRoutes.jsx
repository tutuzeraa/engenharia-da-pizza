import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Home } from "../pages/home";
import { PrivateRoutes } from ".";
import { Fragment } from "react";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Home" element={<PrivateRoutes />}>
            <Route path="/Home" element={<Home />} />
          </Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}
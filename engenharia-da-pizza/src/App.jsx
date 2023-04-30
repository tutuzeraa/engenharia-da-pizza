import "./global.css";
import { AppRoutes } from "./routes/AppRoutes";
import { AuthGoogleProvider } from "./contexts/authGoogle.jsx";
import React from "react";
export function App() {
  return (
    <AuthGoogleProvider>
      <AppRoutes />
    </AuthGoogleProvider>
  )
}
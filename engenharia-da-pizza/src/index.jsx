import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { authProvider } from './contexts/authContext';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <authProvider>
      <App />
    </authProvider>
  </React.StrictMode>
);
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

const container = document.getElementById("root")
ReactDOM.render(  
<React.StrictMode>
  <authProvider>
    <App />
  </authProvider>
</React.StrictMode>, container)


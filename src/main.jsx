import React from "react";
import ReactDOM from "react-dom/client";
import { UserContextProvider } from "./contexts/UserContext";
import App from "./App";
import "./assets/sass/styles.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);

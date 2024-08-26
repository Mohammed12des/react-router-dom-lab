import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// src/main.jsx
import { BrowserRouter } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

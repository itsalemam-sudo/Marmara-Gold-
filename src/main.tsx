import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";

/* Mark JS as ready — gates the .reveal hidden state so no-JS renders visible. */
document.documentElement.classList.add("js");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

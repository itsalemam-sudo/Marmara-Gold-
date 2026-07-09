import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { ServicePage } from "./pages/ServicePage/ServicePage";
import { I18nProvider } from "./i18n/context";
import "./styles/global.css";

document.documentElement.classList.add("js");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  </StrictMode>
);

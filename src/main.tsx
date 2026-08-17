import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { I18nProvider } from "./i18n/context";
import "./styles/global.css";

/**
 * Route-level code splitting.
 *
 * The homepage (<App />) is imported eagerly because nearly every
 * visit lands there — deferring it would just add a splash-of-nothing
 * to the critical path. Everything else is `lazy()`; each secondary
 * route becomes a separate JS chunk that only downloads when the
 * visitor navigates into it. Cuts the first-load payload by more
 * than half.
 *
 * Suspense fallback is a bare Marmara-gold loading strip so route
 * transitions never flash a blank canvas.
 */
const ServicePage   = lazy(() => import("./pages/ServicePage/ServicePage").then(m => ({ default: m.ServicePage })));
const PolicyPage    = lazy(() => import("./pages/PolicyPage/PolicyPage").then(m => ({ default: m.PolicyPage })));
const ProductsPage  = lazy(() => import("./pages/ProductsPage/ProductsPage").then(m => ({ default: m.ProductsPage })));
const CorporatePage = lazy(() => import("./pages/CorporatePage/CorporatePage").then(m => ({ default: m.CorporatePage })));
const NewsPage      = lazy(() => import("./pages/NewsPage/NewsPage").then(m => ({ default: m.NewsPage })));

/** Very thin progress bar shown while a route chunk is fetched. */
function RouteFallback() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        height: 2,
        background:
          "linear-gradient(90deg, transparent, #8b734b 45%, transparent)",
        transformOrigin: "left",
        animation: "mg-route-load 1s ease-in-out infinite",
      }}
    />
  );
}

document.documentElement.classList.add("js");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider>
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<App />} />

            <Route path="/services/:slug" element={<ServicePage />} />

            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:filter" element={<ProductsPage />} />

            <Route path="/policies/:code" element={<PolicyPage />} />

            <Route path="/corporate/:section" element={<CorporatePage />} />

            <Route path="/news" element={<NewsPage />} />

            <Route path="*" element={<App />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </I18nProvider>
  </StrictMode>
);

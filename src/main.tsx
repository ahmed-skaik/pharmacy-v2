import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Router>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Router>
  </StrictMode>,
);

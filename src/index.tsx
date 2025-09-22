import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PortfolioWithForm } from "./screens/PortfolioWithForm/PortfolioWithForm";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <PortfolioWithForm />
  </StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div style={{overflow:"hidden",margin:"auto",width: "100vw"}}>
      <App />
    </div>
  </StrictMode>
);

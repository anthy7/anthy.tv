import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";

const container = document.getElementById("app") as HTMLElement;
const root = createRoot(container);
root.render(<App />);

// Enable hot reloading for development
if (import.meta && (import.meta as any).hot) {
  (import.meta as any).hot.accept();
}
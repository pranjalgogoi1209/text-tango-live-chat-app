import React from "react";
import Welcome from "./components/Welcome";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Welcome />
    </BrowserRouter>
  );
}

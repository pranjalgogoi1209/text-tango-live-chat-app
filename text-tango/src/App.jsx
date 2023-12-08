import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
export default function App() {
  return (
    <BrowserRouter>
      {/* <Welcome /> */}
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Welcome />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

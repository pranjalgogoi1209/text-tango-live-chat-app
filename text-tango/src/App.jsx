import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import ChatPage from "./components/ChatPage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/chat" element={<ChatPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

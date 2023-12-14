 import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import ChatPage from "./components/ChatPage/ChatPage";
export default function App() {
  const [userId, setUserId] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage setUserId={setUserId} />}></Route>
        <Route path="/chat" element={<ChatPage userId={userId} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Camera from "./pages/Camera";
import Chatbot from "./pages/Chatbot";
import Login from "./pages/Login";
import Analytics from "./pages/Analytics";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/login" element={<Login />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/login/login";


const Dashboard = () => {
  return <div className="Dashboard-theme"><h1>Dashboard</h1></div>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="Login-theme"><Login /></div>} />
        <Route path="/Dashboard" element={<div className="Dashboard-theme"><Dashboard /></div>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
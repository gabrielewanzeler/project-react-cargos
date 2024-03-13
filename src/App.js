import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import Login from './Login';
import logo1 from "./hand-drawn-calculator-illustration-png.png";


function App() {

return (
<Router>
  <header className="header-container">
      <div className="header-content">
        <h1 className="main-title">Calculadora de Salários</h1>
        <img src= {logo1} alt="Calculadora"/>
      </div>
  </header>

    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/homecomponent" element={<HomeComponent />} />
    </Routes>
</Router>
  );
};


export default App;

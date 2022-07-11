import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Pages/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Portfolio' element={<Portfolio/>} />
      </Routes>
  </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' elemtn={<Home/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </Router>
    <Home />
  </div>
  );
}

export default App;

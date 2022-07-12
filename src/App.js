import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Pages/Contact/Contact';

function App() {
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
  </div>
  );
}

export default App;

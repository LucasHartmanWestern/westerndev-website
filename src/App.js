import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Team from "./Pages/Team/Team";
import Toolkit from "./Components/Toolkit/toolkit";
import Events from "./Pages/Events/Events";
import Aboutus from "./Pages/AboutUs/Aboutus";
import JoinUs from "./Pages/JoinUs/joinus";

function App() {
  return (
    <div>
      <Router>
        <div className="App-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Toolkit" element={<Toolkit />} />
            <Route path="/Contact" element={<Contact></Contact>} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/AboutUs" element={<Aboutus />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Join" element={<JoinUs />} />
            <Route path="/Portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

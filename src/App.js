import React from "react"
import "./App.css"
import Home from "./Pages/Home/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Contact from "./Pages/Contact/Contact"
import Portfolio from "./Pages/Portfolio/Portfolio"
import JoinUs from "./Pages/JoinUs/joinus"
import Toolkit from "./Components/Toolkit/toolkit"
import Events from "./Pages/Events/Events"
import Aboutus from "./Pages/AboutUs/Aboutus"
import Team from "./Pages/Team/Team"

function App() {
  return (
    <div className="App-container">
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Toolkit" element={<Toolkit />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/AboutUs" element={<Aboutus />} />
            <Route path="/JoinUs" element={<JoinUs />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Team" element={<Team></Team>} />
          </Routes>

      </Router>
    </div>
  )
}

export default App

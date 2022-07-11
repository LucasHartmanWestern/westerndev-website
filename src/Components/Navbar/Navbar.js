import React from 'react'
import './Navbar.css'
import {Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar-container'>
        <div className='logo'>
          <img src='images/logo.png'></img>
        </div>
        <div className="links-container">
         <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/Contact">Contact</Link>
        </li>
        </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar-container'>
        <div className='logo'>
            <a href='/'>
            <img src='images/logo.png'></img>
            </a>
        </div>
        <div className="links-container">
         <ul>
         <li>
            <a href="/Portfolio">portfolio</a>
        </li>
         <li>
            <a href="/About">about us</a>
        </li>
         <li>
            <a href="/Contact">contact us</a>
        </li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar

import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import logo from "./logo.png"

function Navbar() {

  function toggleMobileNav() {
    let linksContainer = document.querySelector('.links-container');
    let hamburger = document.querySelector('.hamburger');
    let currentClass = linksContainer.getAttribute('class');
    if (currentClass.includes('active')) {
      linksContainer.setAttribute('class', 'links-container');
      hamburger.setAttribute('class', 'hamburger');
    } else {
      linksContainer.setAttribute('class', 'links-container active');
      hamburger.setAttribute('class', 'hamburger active');
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Dev Society Logo"></img>
          </Link>
        </div>
        <button className="hamburger" onClick={toggleMobileNav}></button>
        <div className="links-container">
          <ul>
            <li onClick={toggleMobileNav}>
              <Link to="/Contact">contact us</Link>
            </li>
            <li onClick={toggleMobileNav}>
              <Link to="/JoinUs">join us</Link>
            </li>
            <li onClick={toggleMobileNav}>
              <Link to="/AboutUs">about us</Link>
            </li>
            <li onClick={toggleMobileNav}>
              <Link to="/Events">events</Link>
            </li>
            {/**<li>
                <Link to="/Portfolio">portfolio</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

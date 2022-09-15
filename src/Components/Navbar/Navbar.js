import React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import logo from "./logo.png"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Dev Society Logo"></img>
          </Link>
        </div>
        <div className="links-container">
          <ul>
            <li>
              <Link to="/Contact">contact us</Link>
            </li>
            <li>
              <Link to="/JoinUs">join us</Link>
            </li>
            <li>
              <Link to="/AboutUs">about us</Link>
            </li>
            <li>
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

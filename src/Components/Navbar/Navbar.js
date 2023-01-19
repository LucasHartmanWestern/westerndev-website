import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  function toggleMobileNav() {
    setOpen((prev) => !prev)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Dev Society Logo"></img>
          </Link>
        </div>
        <button
          className={`hamburger ${open && "active"}`}
          onClick={toggleMobileNav}
        ></button>
        <div className={`links-container ${open && "active"}`}>
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
  );
}

export default Navbar;

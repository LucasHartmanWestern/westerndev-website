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
          <div>
            <a href="/">
            Western Developers Society
            </a>
          </div>
        </div>
        <button
          className={`hamburger ${open && "active"}`}
          onClick={toggleMobileNav}
        ></button>
        <div className={`links-container ${open && "active"}`}>
          <ul>
             <li onClick={toggleMobileNav}>
              <Link to="/AboutUs">about</Link>
            </li>
            <li onClick={toggleMobileNav}>
              <Link to="/JoinUs">join us</Link>
            </li>
            <li onClick={toggleMobileNav}>
              <Link to="/Events">events</Link>
            </li>
            <li onClick={toggleMobileNav}>
              <Link to="/Team">team</Link>
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

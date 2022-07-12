import React from 'react'
import './Navbar.css'
import {Link, useMatch, useResolvedPath } from "react-router-dom"

function Navbar() {
  
  return (
    <div className='navbar-container'>
        <div className='logo'>
            <Link href='/'>
            <img src='images/logo.png'></img>
            </Link>
        </div>
        <div className="links-container">
         <ul>
        <li>
            <a href="/Contact">contact us</a>
        </li>
         <li>
            <a href="/Contact">portfolio</a>
        </li>
         <li>
            <a href="/Contact">about us</a>
        </li>
        </ul>
        </div>
    </div>
  )
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar

import React from 'react'
import './Footer.css'
import Toolkit from "../../Components/Toolkit/toolkit";

function Footer() {
  return (
    <div>
      <section className="footer">
        <Toolkit />
        <div className="copyright">
          <small>&copy; 2023 Western Developers Society.</small>
        </div>
      </section>
    </div>
  )
}

export default Footer

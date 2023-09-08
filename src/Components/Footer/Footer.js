import React from 'react'
import './Footer.css'
import {AiFillInstagram } from 'react-icons/ai'
import {BsLinkedin}from 'react-icons/bs'
import {FaDiscord} from 'react-icons/fa'

function Footer() {
  return (
    <div>
      <section className="footer">
        <div className='socials'>
          <a href='https://www.instagram.com/westerndevsociety/' target='_blank' tag='social'> <AiFillInstagram size={25}></AiFillInstagram></a>
          <a href='https://www.linkedin.com/company/81320984/admin/' target='_blank' tag='social'><BsLinkedin size={25}></BsLinkedin></a>
          <a href='https://discord.com/invite/QWzvg3XmPz' target='_blank' tag='social' ><FaDiscord size={25}></FaDiscord></a>
        </div>
        <div className="info">
            <strong>Western Developers Society </strong><br/>
            westerndevsociety@gmail.com <br/>
            1170 Richmond St. London, ON <br/>
            &copy; 2023 Western Developers Society.
        </div>
      </section>
    </div>
  )
}

export default Footer

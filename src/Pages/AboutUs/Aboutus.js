import React from 'react'
import Membercards from "./Membercards"
import data from './data'
import './Aboutus.css'
import Fade from 'react-reveal/Fade'


export default function Aboutus(){

  //document.body.style = 'background: #D9DDF5;';

const cards = data.map(item=>{
  return (<Membercards
    key={item.id}
    item={item}
  />)
})

  return (
    <div className="aboutus">

      <div className='about-top-container'>
        <Fade>
          <div className="aboutus-title">About Us</div>
            <div className="aboutus-description">
              At Western Developers Society, we want to give students real life development experience. Join us today!
            </div>
        </Fade>
      </div>
      <div className="join-container">
        <div className="join-title">How to Join</div>
        <div className="content-container">
        <div className="subtitle">General Member</div>
        <div className="general">Anyone at western is welcome to join our community as a general member by attending our events such as hackathons, networking events, workshops etc.
        Drop by any of our social media outlets to learn more about us, keep up-to-date with our upcoming events, or to chat with our members!</div>
        <div className="subtitle">Director</div>
        <div className="director">To join as a director, there is an application process that will be open in the fall. We're currently looking for:<br />
          <div className="list">
          <br />Developers<br />
          Community Leads and 2 Tech Leads<br />
          Designers<br />
          Directors to work under VP's (Marketing, internal, external, careers and finance)</div>
        </div>
        <div className="joinus">Join the Western Developers Society to have access to a tremendous community of likeminded students and tools to get you involved in technology!</div>
      </div>
      </div>
      <div className='team-container'>
          <h1 className="team-title" >Meet the Team!</h1>
        <div className="card-container">
          {cards}
        </div>
      </div>
    </div>
  )
}

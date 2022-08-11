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
      <div className='team-container'>
          <h1 className="team-title" >Meet the Team!</h1>
        <div className="card-container">
          {cards}
        </div>
      </div>
    </div>
  )
}

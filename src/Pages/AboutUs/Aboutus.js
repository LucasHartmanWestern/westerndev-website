import React from 'react'
import Membercards from "./Membercards"
import data from './data'
import './Aboutus.css'
import Slide from 'react-reveal/Slide'


export default function Aboutus(){
  
  //Set color of bg on each page
  document.body.style = 'background: #D9DDF5;';

const cards = data.map(item=>{
  return (<Membercards
    key={item.id}
    item={item}
  />)
})

  return (
    <div className="aboutus">
      <div className='about-container'>
        <div className='headline'>Building community, one line of &lt;/code&gt; at a time.</div>
        {/**
         * <div className='headline'><Typewriter
            onInit={(typewriter) => {
              typewriter
              .typeString("Building community, one line of </code> at a time.")
              .start();
            }

            }
          /> </div>
         */}
        <div className='about-info'>
          <Slide left>
          <div className='about-left'>
          Our mission is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          </Slide>
          <Slide right>
          <div className='about-right'>
          Our services:
          </div>
          </Slide>
       </div>
      </div>

      <div className='team-container'>
          <h1 className="aboutus-title" >Meet the Team!</h1>
        <div className="card-container">
          {cards}
        </div>
      </div>
    </div>
  )
}

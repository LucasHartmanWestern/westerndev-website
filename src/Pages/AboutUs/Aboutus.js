import React from 'react'
import Membercards from "./Membercards"
import data from './data'
import './Aboutus.css'
import Slide from 'react-reveal/Slide'


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
          By creating memorable shared experiences, members will be more likely to create lasting relationships. Another key factor in creating lasting relationships will be engagement continuing outside of club activities. Initiatives such as discord engagement, study sessions, and networking events will help achieve this. 
          </div>
          </Slide>
          <Slide right>
          <div className='about-right'>
          Our services:
            <ul>&gt;  web design </ul>
            <ul> &gt; web development </ul>
            <ul> &gt; web hosting set up </ul>
            
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

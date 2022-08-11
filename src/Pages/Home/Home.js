import React from 'react'
import './Home.css'
import { Slide,Fade } from 'react-reveal';
import tech from './tech.png'

// images and styling tbd
export default function Home() {

  return (
    <div className='home-container'>
      <Fade>
      <div className='top-container'>
        <div className="home-info">
          <div className="title">
            <span className='line1' style={{color:'#9D62CC'}}>Western</span> <br />
            <span className='line2' style={{color:'#60468C'}}>Developers</span> <br />
            <span className='line3' style={{color:'#303030'}}>Society</span>
          </div>
            <div className="pic">
              <img src={tech}></img>
            </div>
        </div>
          <div className="text">
              Building community, one line of code at a time.
          </div>
      </div>
        </Fade>
        
        <div className='about-info'>
          <div className='about-title'>&gt; We are a collective of students, applying our skills to support our community</div>
          <div className='card-container'>
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
      {/**<div className='toolkit-container'>
      <Toolkit></Toolkit>
      </div>
      THIS WILL BE USED WHEN CONTENT IS FILLED */}
      
    </div>

  )
}

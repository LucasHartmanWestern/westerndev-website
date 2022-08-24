import React from 'react'
import './Home.css'
import { Slide,Fade } from 'react-reveal';
import tech from './tech.png'
import Toolkit from '../../Components/Toolkit/toolkit';

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

          <div className='about-title'>
            &gt; What is the Western Developers Society?
            <br></br>
            &gt; We are a collective of students, applying our skills to support our community
            </div>
          <div className='card-container'>
            <Slide left>
            <div className='about-left'>
            By creating memorable shared experiences, members will be more likely to create lasting relationships. Another key factor in creating lasting relationships will be engagement continuing outside of club activities. Initiatives such as discord engagement, study sessions, and networking events will help achieve this. 
            </div>
            </Slide>
            <Slide right>
            <div className='about-right'>
            <span className='card-sub-title'>OUR SERVICES:</span>
              <ul>&gt;  Web design: we can style and design websites via CSS  </ul>
              <ul> &gt; Web development: we can build websites using HTML5 via the React framework </ul>
              <ul> &gt; Web hosting set up: we can host websites on Github and via other providers  </ul>
            </div>
          </Slide>
          </div>
          <div className='toolkit-container'>
        <Toolkit></Toolkit>
      </div>
        <span className='bottom-line'>Western Dev Society 2022</span>
       </div>
    </div>

  )
}

import React from 'react'
import './Home.css'

// images and styling tbd
export default function Home() {
  document.body.style = 'background: #F5F4F4;';
  return (
    <div className='home-container'>
      <div className="content">
        <div className="info">
          <div className="title">
            <span style={{color:'#9D62CC'}}>Western</span> <br /> 
            <span style={{color:'#60468C'}}>Developers</span> <br /> 
            <span style={{color:'#303030'}}>Society</span>
          </div>
          <div className="text">
            Building community, one life of code at a time.
          </div>
        </div>

        <div className="pic">
          <img src='images/tech.png' style={{width:706,height:383}}></img>
        </div>
      
      </div>
    </div>

  )
}

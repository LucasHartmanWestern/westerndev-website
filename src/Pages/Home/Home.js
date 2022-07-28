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
            Building community, one line of code at a time.
          </div>
        </div>

        <div className="pic">
          <img src='images/tech.png' style={{width:706,height:383}}></img>
        </div>

      </div>

      <div className="sponsorships">
        <div className="partners-container">
            <div className="our-partners">Our Partners</div>
            <p className="subtext">Through our projects, we've had the honour of
            collaborating with a wide range of incredible businesses and institutions. Here are a few of them:</p>

        </div>
        <div className="elipse-container">
        <div className="elipse-1"></div>
        <div className="elipse"></div>
        <div className="elipse"></div>
        </div>

        <div className="footer">
          <div className="heading">Seeking Partnership with us?</div>
          <p className="description">
          Western dev society plans on holding both in person and online events
          for the upcoming 2022-2023 school year. Running live events for the WDS and
          Western communities comes at a very high cost. Therefore, WDS highly appreaciates and welcomes any financial or in-kind sponsorships
          <br /><br />
          There are many benefits that come with collaborating with our association!
          Partnering with WDS means that we will share and promote your organization's marketing
          material to the Western Engineering & Computer Science and greater Western community.
          You'll also have opportunities to directly engage with the student population through sending
          representatives from your company, and/or through other collaboration formats. This is great for recruitment purposes!
          </p>
        </div>
      </div>
    </div>

  )
}

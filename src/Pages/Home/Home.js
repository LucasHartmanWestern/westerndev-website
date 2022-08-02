import React from 'react'
import './Home.css'
import Membercards from "./Membercards"
import data from './data'
import './Aboutus.css'
import Slide from 'react-reveal/Slide'
import Typewriter from 'typewriter-effect';

// images and styling tbd
export default function Home() {
  document.body.style = 'background: #F5F4F4;';
  const cards = data.map(item=>{
    return (<Membercards
      key={item.id}
      item={item}
    />)
  })

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
            Building a community, one line of code at a time.
          </div>
        </div>

        <div className="pic">
          <img src='images/tech.png' style={{width:706,height:383}}></img>
        </div>

        <div className='about-container'>

          <div className='headline'><Typewriter
            onInit={(typewriter) => {
              typewriter
              .typeString("Building community, one line of </code> at a time.")
              .start();
            }

            }
          /> </div>
          <div className='about-info'>
            <Slide left>
            <div className='about-left'>
            Western Developer Society is a student run community for developers at Western University that empowers students to become better developers through competitions, tutorials and real practice.
            </div>
            </Slide>
            <Slide right>
            <div className='about-right'>
            We offer workshops to teach students technical and non technical skills, competitions to provide students the opportunity to showcase their skills, and community projects for our developer teams to get real world experience.
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
      
    </div>

  )
}

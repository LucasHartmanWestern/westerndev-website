import React from "react"
import "./Home.css"
import { Slide, Fade } from "react-reveal"
import tech from "./tech.png"
import Toolkit from "../../Components/Toolkit/toolkit"
import Typewriter from "typewriter-effect"

const WHAT_IS_WDS_POINTS = [
  "We are a community of developers, designers, consultants, and engineers",
  "We are Westerns Fastest Growing Tech Club",
  "We are club for all students interested in technology",
  "We are a collective of students, applying our skills to support our community",
]

export default function Home() {
  return (
    <div className="home-container">
      <Fade>
        <section className="hero">
          <div className="hero-container">
            <div className="home-info">
              <div className="title">
                <span className="line1" style={{ color: "#9D62CC" }}>
                  Western
                </span>
                <br />
                <span className="line2" style={{ color: "#60468C" }}>
                  Developers
                </span>
                <br />
                <span className="line3" style={{ color: "#303030" }}>
                  Society
                </span>
              </div>
            </div>
            <div className="pic">
                <img src={tech} alt="Dev society hero"></img>
              </div>
          </div>
       {/**here 
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
            <div className="text">
              Building community, one line of code at a time.
            </div>
          </div>
        </div>
        */}
      </section>
      </Fade>
      
      <section className="about">

        <div className="what-is">
         <h1 className="what-is-title">
            What is the Western Developers Society?
          </h1>
        <Typewriter
            options={{
              loop: true,
              delay: 8,
            }}
            onInit={(typewriter) => {
              typewriter.typeString('>We are a community of developers, designers, consultants, and engineers')
              .pauseFor(2500)
              .deleteAll(2)
              typewriter.typeString('>We are Westerns Fastest Growing Tech Club')
              .pauseFor(2500)
              .deleteAll(2)
              typewriter.typeString('>We are club for all students interested in technology')
              .pauseFor(2500)
              .deleteAll(2)
              typewriter.typeString('>We are a collective of students, applying our skills to support our community')
              .pauseFor(2500)
              .deleteAll(2)
              .start();
            }}
          />
        </div>
        <div className="details-container">
          <Slide left>
            <div className="details-left">
              <h3>Community First</h3>
              <p>
                Western Developers Society is a club for UWO students who are
                interested in software development and technology. WDS is the
                place for students to discuss new technologies, share knowledge,
                and work on projects together.
                <br />
                <br />
                We also host workshops, speakers, and competitions throughout
                the year to help members learn new skills and keep up with the
                latest trends in software development. Whether you're a beginner
                or a seasoned pro, there's a place for you in the club. Join us
                and help us build the future!
              </p>

{/* 
            </span>
            <br></br>
          <span className='card-bullet-points'> 
          <Typewriter
            options={{
              loop: true,
              delay: 8,
            }}
            onInit={(typewriter) => {
              typewriter.typeString('>We are a community of developers, designers, consultants, and engineers')
              .pauseFor(2500)
              .deleteAll(2)
              typewriter.typeString('>We are Westerns Fastest Growing Tech Club')
              .pauseFor(2500)
              .deleteAll(2)
              typewriter.typeString('>We are club for all students interested in technology')
              .pauseFor(2500)
              .deleteAll(2)
              typewriter.typeString('>We are a collective of students, applying our skills to support our community')
              .pauseFor(2500)
              .deleteAll(2)
              .start();
            }}
          />
            </span>
          </div>
          <div className='card-container'>
            <Slide left>
            <div className='about-left'>
            <span className='card-sub-title'>Community First</span>
            <br></br>
            Western Developers Society is a club for UWO students who are interested in software development and technology. 
            WDS is the place for students to discuss new technologies, share knowledge, and work on projects together. 
            We also host workshops, speakers, and competitions throughout the year to help members learn new skills and keep up with the latest trends in software development. 
            Whether you're a beginner or a seasoned pro, there's a place for you in the club. Join us and help us build the future!
**/}
            </div>
          </Slide>
          <Slide right>
            <div className="details-right">
              <h3>Our Services</h3>
              <p>
                Our development teams provide a comprehensive software
                development process that covers all aspects of the software
                development life cycle. This includes requirements gathering,
                design, development, testing, and deployment.
                <br />
                <br />
                From gathering and design, all the way to deployment we work
                closely with our clients to ensure that their needs are met and
                that the final product is of the highest quality.
              </p>
            </div>
          </Slide>
        </div>
      </section>

      <section className="footer">
        <Toolkit />
        <div className="copyright">
          <small>&copy; 2022 Western Developers Society.</small>
        </div>
      </section>
    </div>
  )
}

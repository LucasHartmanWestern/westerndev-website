import React from "react";
import "./Home.css";
import balance from "./balance.png";
import house from "./house (1).png"
import student from "./student.png"
import network from "./network.png"
import Footer from "../../Components/Footer/Footer";

const WHAT_IS_WDS_POINTS = [
  "We are a community of developers, designers, consultants, and engineers",
  "We are Westerns Fastest Growing Tech Club",
  "We are club for all students interested in technology",
  "We are a collective of students, applying our skills to support our community",
];

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="title">
          <div className="heading">
            Building <br/>community,<br/> one line of code<br/> at a time.
          </div>
          <div className="subheading">
            <a href='/JoinUs'>join now</a>
          </div>
        </div>
        <div className="home-pic">
          <img src={balance}></img>
        </div>
      </section>

      {/**OUR PILLARS SECTIONS */}
      <div className="home-pillars">
        <div className="pillar-container">
          <div className="pillar-img">
            <img src={house}></img>
          </div>
          <div className="pillar-title">
            Community Outreach
          </div>
          <div className="pillar-descript">
            alsdkfjlasjdflaskfjkldsjfkjaslkjflasjdlkfj;lkadsjf
          </div>
        </div>
        <div className="pillar-container">
          <div className="pillar-img">
             <img src={student}></img>
          </div>
           <div className="pillar-title">
            Student Engagement
          </div>
          <div className="pillar-descript">
            alsdkfjlasjdflaskfjkldsjfkjaslkjflasjdlkfj;lkadsjf
          </div>
        </div>
        <div className="pillar-container">
          <div className="pillar-img">
              <img src={network}></img>
          </div>
           <div className="pillar-title">
            Building Networks
          </div>
          <div className="pillar-descript">
            alsdkfjlasjdflaskfjkldsjfkjaslkjflasjdlkfj;lkadsjf
          </div>
        </div>
      </div>

      {/**MISSION SECTION*/}
      <div className="home-mission">
        <div className="mission-descript">
        <span className="mission-title">Our Mission </span>is to empower students through technology, 
      by providing them with tangible skills to succeed in their careers.
        </div> 
      </div>

      {/**EVENTS*/}

      <Footer></Footer>
    </div>
  );
}

import React from "react";
import Member from "./Membercards";
import { EXEC_MEMBERS, DEV_MEMBERS, PRESIDENTS, MARKETING, INTERNAL, EXTERNAL, FINANCE, CAREERS, DEVELOPMENT } from "./MembersData";
import "./Aboutus.css";
import DeloitteLogo from "./logos/DeloitteLogo.png";
import MckinseyLogo from "./logos/MckinseyLogo.png";
import monitor from "./monitor.png"
import settings from "./settings.png"
import unity from "./unity.png"
import leader from "./leader.png"
import event from "./calendar.png"
import site from "./coding.png"

const aboutWDS = [
  "Western dev society plans on holding both in person and online events for the upcoming 2022-2023 school year. Running live events for the WDS and Western communities comes at a very high cost. Therefore, WDS highly appreaciates and welcomes any financial or in-kind sponsorships",
  "There are many benefits that come with collaborating with our association! Partnering with WDS means that we will share and promote your organization&#x27;s marketing material to the Western Engineering &amp; Computer Science and greater Western community. You&#x27;ll also have opportunities to directly engage with the student population through sending representatives from your company, and/or through other collaboration formats. This is great for recruitment purposes!",
];

export default function Aboutus() {
  return (
    <div className="aboutus">
      <div className="about-top-container">
        <div className="about-item">
          <div>
            We believe everyone deserves equal opportunity to break into the tech world. 
          </div>
          <div className="about-img">
            <img src={monitor}></img>
          </div>
        </div>
        <div className="about-item2">
          <div className="about-img">
            <img src={settings}></img>
          </div>
          <div>
            We also believe that everyone deserves equal access to great technology.  
          </div>
        </div>
        <div className="about-item">
          <div>
            By providing students with a space to learn, network, and own their work, we empower individuals while supporting our community. 
          </div>
          <div className="about-img">
            <img src={unity}></img>
          </div>
        </div>
      </div>
      <div className="about-what-container">
        <div className="about-what-title">What We Do</div>
        <div className="about-what-item-container">
        <div className="about-what-item">
          <div className="about-what-img">
            <img src={site}></img>
          </div>
          <div className="about-what-info">
            <div >
              We build websites for our local community. 
              Providing students (of all skill levels) with real world experience, 
              and organizations with free websites! 
            </div>
            <div className="about-what-btn">
              Portfolio
            </div>
          </div>
        </div>
        <div className="about-what-item">
          <div className="about-what-img">
            <img src={event}></img>
          </div>
          <div className="about-what-info">
            <div>
              We organize hackathons and similar spaces for students to gain experience in a fun and social environment
            </div>
            <div className="about-what-btn">
              Events
            </div>
          </div>
        </div>
        <div className="about-what-item">
          <div className="about-what-img">
            <img src={leader}></img>
          </div>
          <div className="about-what-info">
            <div>
              We provide the opportunity to gain leadership experience across numerous areas within our student led club! 
            </div>
            <div className="about-what-btn">
              Join
            </div>
          </div>
        </div>
         </div>

      </div>
      

      <div className="sponsorships-container">
        
      </div>
    </div>
  );
}

{/**
<div>
            <h2 className="devs-title">Presidents</h2>
            <div className="card-container">
              {PRESIDENTS.map((item, idx) => (
                <Member key={idx + item.name} data={item} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="devs-title">Development</h2>
            <div className="card-container">
              {DEVELOPMENT.map((item, idx) => (
                <Member key={idx + item.name} data={item} />
              ))}
            </div>
          </div> */}

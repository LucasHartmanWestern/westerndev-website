import React from "react";
import Member from "./Membercards";
import Toolkit from "../../Components/Toolkit/toolkit";
import {
  EXEC_MEMBERS,
  DEV_MEMBERS,
  PRESIDENTS,
  MARKETING,
  INTERNAL,
  EXTERNAL,
  FINANCE,
  CAREERS,
  DEVELOPMENT,
} from "./MembersData";
import "./Aboutus.css";
import DeloitteLogo from "./logos/DeloitteLogo.png";

import MckinseyLogo from "./logos/mckinsey.png";
import SeniorsLogo from "./logos/seniorsinit.png"
import LondonLogo from "./logos/londonBridges.jpeg"
import monitor from "./monitor.png"
import settings from "./settings.png"
import unity from "./unity.png"
import leader from "./leader.png"
import event from "./calendar.png"
import site from "./coding.png"
import Footer from "../../Components/Footer/Footer";
import Contact from "../Contact/Contact";

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
            We believe everyone deserves equal opportunity to break into the
            tech world.
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
            We also believe that everyone deserves equal access to great
            technology.
          </div>
        </div>
        <div className="about-item">
          <div>
            By providing students with a space to learn, network, and own their
            work, we empower individuals while supporting our community.
          </div>
          <div className="about-img">
            <img src={unity}></img>
          </div>
        </div>
      </div>

      {/**------ABOUT WHAT WE DO SECTION----------*/}
      <div className="about-what-container">
        <div className="about-what-title">What We Do</div>
        <div className="about-what-item-container">
          <div className="about-what-item">
            <div className="about-what-img">
              <img src={site}></img>
            </div>
            <div className="about-what-info">
              <div>
                We build websites for our local community. Providing students
                (of all skill levels) with real world experience, and
                organizations with free websites!
              </div>
              <div className="about-what-btn">
                <a href="/Portfolio">Portfolio</a>
              </div>
            </div>
          </div>
          <div className="about-what-item">
            <div className="about-what-img">
              <img src={event}></img>
            </div>
            <div className="about-what-info">
              <div>
                We organize hackathons and similar spaces for students to gain
                experience in a fun and social environment
              </div>
              <div className="about-what-btn">
                <a href="/Events">Events</a>
              </div>
            </div>
          </div>
          <div className="about-what-item">
            <div className="about-what-img">
              <img src={leader}></img>
            </div>
            <div className="about-what-info">
              <div>
                We provide the opportunity to gain leadership experience across
                numerous areas within our student led club!
              </div>
              <div className="about-what-btn">
                <a href="/Join">Join</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**------COMPANIES SECTIONS---------- //COMMENTING OUT UNTIL HAVE ALL LOGOS
      <div className="company-container">

        <div className="company-title">
          Companies we've worked with
        </div>
        <div className="company-imgs">
          <div className="company-img-container">
            <img src={SeniorsLogo}></img>
            <div className="company-name">Seniors in IT</div>
          </div>
           <div className="company-img-container">
            <img src={LondonLogo}></img>
          </div>
        
        </div>
        <div className="company-portfolio-btn">
          <a href="/Portfolio">Portfolio</a>
        </div>

      </div>
      */}

      {/**------PARTNERS SECTIONS----------*/}
      <div className="partners-container">
        <div className="partners-title">
          Our partners
        </div>
        <div className="partners-imgs">
          <div> 
            <a href="https://www2.deloitte.com/ca/en/pages/about-deloitte/articles/home.html" target="_blank"><img src={DeloitteLogo} ></img></a>
          </div>
          <div>
            <a href="https://www.mckinsey.com/" target="_blank"><img src={MckinseyLogo}></img></a>
          </div>
        </div>
       
      </div>


      {/**------PARTNERS SECTIONS----------*/}
      <div className="become-partner-container">
        <div className="become-partner-title">
          Become a partner
        </div>
        <div className="become-partner-subtitle">
          Want to support Western’s fastest growing tech community? Reach out to learn more. 
        </div>

        <Contact></Contact>
       
      </div>
      <Toolkit></Toolkit>
      <Footer></Footer>
    </div>
  );
}

{
  /**
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
          </div> */
}

import React from "react";

import "./Team.css";

import Footer from "../../Components/Footer/Footer";

const aboutWDS = [
  "Western dev society plans on holding both in person and online events for the upcoming 2022-2023 school year. Running live events for the WDS and Western communities comes at a very high cost. Therefore, WDS highly appreaciates and welcomes any financial or in-kind sponsorships",
  "There are many benefits that come with collaborating with our association! Partnering with WDS means that we will share and promote your organization&#x27;s marketing material to the Western Engineering &amp; Computer Science and greater Western community. You&#x27;ll also have opportunities to directly engage with the student population through sending representatives from your company, and/or through other collaboration formats. This is great for recruitment purposes!",
];

export default function Team() {
  return (
    <div className="team">
      <div className="team-top-container">
        <h4>Meet The Team</h4>
      </div>

      <div className="team-images-container">
        <div className="group">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div className="group">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div className="group">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
        <div className="group">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>

      <div className="join-us">
        <h4>JOIN US</h4>
      </div>

      <Footer></Footer>
    </div>
  );
}

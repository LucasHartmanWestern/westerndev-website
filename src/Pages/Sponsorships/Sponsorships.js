import React from 'react'
import './Sponsorships.css'
import Fade from "react-reveal/Fade"

export default function Sponsorships() {
//document.body.style = 'background: #D9DDF5;';
  return (
    <div className="container-center-horizontal">
      
      <div className="sponsorships screen" >
        <Fade>
        <h1 className="title--ye" >
          Sponsorships
        </h1>
        </Fade>
        <div className="paragraph" ><p>
          Our partners empower us to host a myriad of workshops, competitions and events for the western community. Interested in partnering with us? Contact us at westerndevsociety@gmail.com to find out how you can partner with one of western's fastest growing clubs!
          </p>
        </div>
        <img
          className="divider"

          src="https://anima-uploads.s3.amazonaws.com/projects/62e7f23d5a7d66bdd412e081/releases/62e7f24a41fdb6de5bf9db78/img/divider@1x.svg"
        />

        <div className="title-2" >

          <h3>Our Partners</h3>
        </div>
        <p className="paragraph-2" >
          Through our projects, we've had the honour of collaborating with a wide range of incredible businesses and institutions. Here are a few of them:
        </p>
        <div className="company-container" >
          <div className="company3" ></div>
          <div className="company2" ></div>
          <div className="company1" ></div>
        </div>
        <div className="flex-row" >
          <div className="seeking-partnership-with-us" >
            <h3>Seeking partnership with us?</h3>
          </div>
          <p className="paragraphs-3" >
          Western dev society plans on holding both in person and online events for the upcoming 2022-2023 school year.
          Running live events for the WDS and Western communities comes at a very high cost. Therefore, WDS highly
          appreaciates and welcomes any financial or in-kind sponsorships
          <br />
          <br />
          There are many benefits that come with collaborating with our association! Partnering with WDS means that we
          will share and promote your organization&#x27;s marketing material to the Western Engineering &amp; Computer
          Science and greater Western community. You&#x27;ll also have opportunities to directly engage with the student
          population through sending representatives from your company, and/or through other collaboration formats. This
          is great for recruitment purposes!
          </p>
        </div>
      </div>
    </div>
  );




}

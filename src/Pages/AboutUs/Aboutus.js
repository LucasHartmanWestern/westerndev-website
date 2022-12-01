import React from 'react'
import Member from './Membercards'
import { EXEC_MEMBERS, DEV_MEMBERS } from './MembersData'
import './Aboutus.css'
import Fade from 'react-reveal/Fade'
import DeloitteLogo from './logos/DeloitteLogo.png'
import MckinseyLogo from './logos/MckinseyLogo.png'

const aboutWDS = [
  'Western dev society plans on holding both in person and online events for the upcoming 2022-2023 school year. Running live events for the WDS and Western communities comes at a very high cost. Therefore, WDS highly appreaciates and welcomes any financial or in-kind sponsorships',
  'There are many benefits that come with collaborating with our association! Partnering with WDS means that we will share and promote your organization&#x27;s marketing material to the Western Engineering &amp; Computer Science and greater Western community. You&#x27;ll also have opportunities to directly engage with the student population through sending representatives from your company, and/or through other collaboration formats. This is great for recruitment purposes!',
]

export default function Aboutus() {
  return (
    <div className='aboutus'>
      <div className='about-top-container'>
        <Fade>
          <div className='aboutus-title'>About Us</div>
          <div className='aboutus-description'>
            At Western Developers Society, we want to give students real life
            development experience. Join us today!
          </div>
        </Fade>
      </div>
      <div className='team-container'>
        <h1 className='team-title'>Meet the Team!</h1>
        <div>
          <div className='card-container'>
            {EXEC_MEMBERS.map((item, idx) => (
              <Member key={idx + item.name} data={item} />
            ))}
          </div>
          <div>
            <h2 className='devs-title'>Our Developers</h2>
            <div className='card-container'>
              {DEV_MEMBERS.map((item, idx) => (
                <Member key={idx + item.name} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='sponsorships-container'>
        <div className='sponsorships screen'>
          <Fade>
            <div className='partnerships'>Partnerships</div>
          </Fade>
          <div className='paragraph'>
            <p>
              Our partners empower us to host a myriad of workshops,
              competitions and events for the western community. Interested in
              partnering with us? Contact us at westerndevsociety@gmail.com to
              find out how you can partner with one of western's fastest growing
              clubs!
            </p>
          </div>
          <h3 className='title-2'>Our Partners</h3>
          <p className='paragraph-2'>
            Through our projects, we've had the honour of collaborating with a
            wide range of incredible businesses and institutions. Here are a few
            of them:
          </p>
          <div className='company-container'>
            <div className='company1'>
              <img src={DeloitteLogo} />
            </div>
            <div className='company2'>
              <img src={MckinseyLogo} />
            </div>
          </div>
          <div className='flex-row'>
            <Fade>
              <div className='seeking-partnership-with-us'>
                <h3>Seeking partnership with us?</h3>
              </div>
              <p className='paragraphs-3'>
                {aboutWDS[0]}
                <br />
                <br />
                {aboutWDS[1]}
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

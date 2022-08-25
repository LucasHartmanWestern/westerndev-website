import React from "react"
import Member from "./Membercards"
import { EXEC_MEMBERS } from "./MembersData"
import "./Aboutus.css"
import Fade from "react-reveal/Fade"

export default function Aboutus() {
  return (
    <div className="aboutus">
      <div className="about-top-container">
        <Fade>
          <div className="aboutus-title">About Us</div>
          <div className="aboutus-description">
            At Western Developers Society, we want to give students real life
            development experience. Join us today!
          </div>
        </Fade>
      </div>
      <div className="team-container">
        <h1 className="team-title">Meet the Team!</h1>
        <div className="card-container">
          {EXEC_MEMBERS.map((item, idx) => (
            <Member key={idx + item.name} data={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

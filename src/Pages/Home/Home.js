import React from "react";
import "./Home.css";
import tech from "./tech.png";
import Toolkit from "../../Components/Toolkit/toolkit";
import Typewriter from "typewriter-effect";

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
          <span className="line1" style={{ color: "#9D62CC" }}>
            Western
          </span>
          <span className="line2" style={{ color: "#60468C" }}>
            Developers
          </span>
          <span className="line3" style={{ color: "#303030" }}>
            Society
          </span>
        </div>
        <div className="pic">
          <img src={tech} alt="Dev society hero"></img>
        </div>
      </section>

      <section className="about">
        <div className="what-is">
          <h1 className="what-is-title">
            What is the Western Developers Society?
          </h1>
          <div className="what-is-body">
            <Typewriter
              options={{
                loop: true,
                delay: 8,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "We are a community of developers, designers, consultants, and engineers"
                  )
                  .pauseFor(2500)
                  .deleteAll(2);
                typewriter
                  .typeString("We are Westerns Fastest Growing Tech Club")
                  .pauseFor(2500)
                  .deleteAll(2);
                typewriter
                  .typeString(
                    "We are club for all students interested in technology"
                  )
                  .pauseFor(2500)
                  .deleteAll(2);
                typewriter
                  .typeString(
                    "We are a collective of students, applying our skills to support our community"
                  )
                  .pauseFor(2500)
                  .deleteAll(2)
                  .start();
              }}
            />
          </div>
        </div>
        <div className="details-container">
          <div className="details-left">
            <h3>Community First</h3>
            <p>
              Western Developers Society is a club for UWO students who are
              interested in software development and technology. WDS is the
              place for students to discuss new technologies, share knowledge,
              and work on projects together.
              <br />
              <br />
              We also host workshops, speakers, and competitions throughout the
              year to help members learn new skills and keep up with the latest
              trends in software development. Whether you're a beginner or a
              seasoned pro, there's a place for you in the club. Join us and
              help us build the future!
            </p>
          </div>
          <div className="details-right">
            <h3>Our Services</h3>
            <p>
              Our development teams provide a comprehensive software development
              process that covers all aspects of the software development life
              cycle. This includes requirements gathering, design, development,
              testing, and deployment.
              <br />
              <br />
              From gathering and design, all the way to deployment we work
              closely with our clients to ensure that their needs are met and
              that the final product is of the highest quality.
            </p>
          </div>
        </div>
      </section>

      <section className="footer">
        <Toolkit />
        <div className="copyright">
          <small>&copy; 2022 Western Developers Society.</small>
        </div>
      </section>
    </div>
  );
}

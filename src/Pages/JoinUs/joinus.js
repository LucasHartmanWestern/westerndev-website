import React from "react";
import "./joinus.css";

export default function JoinUs() {
  return (
    <div className="join-container">
      <div className="join-top-container">
        <div className="joinus-title">Join Us</div>
        <div className="joinus-description">
          WDS is proud to host a variety of fun and informative events for
          everyone!
        </div>
      </div>
      <div className="join-container">
        <div className="join-title">How to Join</div>
        <div className="content-container">
          <div className="gen-member">
            <div className="subtitle">General Member</div>
            <div className="general">
              Anyone at western is welcome to join our community as a general
              member by attending our events such as hackathons, networking
              events, workshops etc. Drop by any of our social media outlets to
              learn more about us, keep up-to-date with our upcoming events, or
              to chat with our members!
            </div>
          </div>
          <div className="exec-dev">
            <div className="exec">
              <div className="subtitle">Executive</div>
              <div className="director">
                Applications are now open for all Western students interested in
                joining our executive team. Directors will be hired for internal
                & external events, marketing, careers, and finance. In our
                Development portfolio we'll be hiring one community lead and 2
                tech leads.
                <br />
              </div>
            </div>
            <div className="dev">
              <div className="subtitle">Development Teams</div>
              <div className="devs">
                Applications for 4 month development teams are now open for
                students interested in building real world applications for WDS,
                other Western Clubs and local London community groups. We'll be
                hiring Team Leads, Developers, and Designers!
              </div>
            </div>
          </div>
          <div className="application">
            <a
              href="https://docs.google.com/document/d/1TXgSZM_jRahlSbkKl6KlgrWkIIl25A6WAk1_ggYnSoA/edit?usp=sharing"
              target="_blank"
            >
              <button>Click here to apply!</button>
            </a>
          </div>
          <div className="joinus-descript">
            Some perks of being a WDS member include tangible career growth
            opportunities, access to mentornship program, discounted of waived
            event ticket fee, exclusive educationals and workshops and much
            more!
          </div>
        </div>
      </div>
    </div>
  );
}

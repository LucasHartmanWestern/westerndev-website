import React from "react";
import "./joinus.css";
import Footer from "../../Components/Footer/Footer";
import { Chrono } from "react-chrono";
import { Button } from "@mui/material";

export default function JoinUs() {
  const items = [
    {
      title: "September 18th 2023",
      cardTitle: "Hiring for Development Portfolio opens",
    },
    {
      title: "End of September 2023",
      cardTitle: "Hiring completed",
    },
    {
      title: "October 2023",
      cardTitle: "Initial team and client meetings",
    },
    {
      title: "November 2023",
      cardTitle: "Site design and developer onboarding",
    },
    {
      title: "December 2023",
      cardTitle: "Exams",
    },
    {
      title: "January to Early February 2024",
      cardTitle: "Development of first website prototype",
    },
    {
      title: "Mid February to late March 2024",
      cardTitle: "Projects are completed and delivered to clients",
    },
  ];
  return (
    <div className="join-container">
      <div className="join-top-container">
        <div className="join-title"> Join Us</div>
        <div className="join-btn-div">
          <div for="join-btn">Interested in Joining?</div>
          <button id="join-btn" className="join-btn">
            Coming Soon
          </button>
        </div>
        <div className="join-top-text">
          <div className="team-header">Our Portfolios</div>
          <div>Join one of our many portfolios that best fits your skillset and interests!</div>
          <div className="team-text">
            <div className="team">Internal</div>
            <div className="team">External</div>
            <div className="team">Development</div>
            <div className="team">Marketing</div>
            <div className="team">Finance</div>
            <div className="team">Technology</div>
            <div className="team">Careers</div>
          </div>
        </div>
      </div>
      <div className="join-bottom-container">
        <div className="dev-timeline-title">Development Project Timeline</div>
        <div>
          <Chrono
            items={items}
            cardHeight={100}
            hideControls={true}
            lineWidth={5}
            theme={{
              primary: "#FAC144",
              secondary: "#FAC144",
              cardBgColor: "white",
              titleColor: "white",
              titleColorActive: "white",
            }}
            fontSizes={{
              cardTitle: "1rem",
              title: "1rem",
            }}
            mode="VERTICAL_ALTERNATING"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

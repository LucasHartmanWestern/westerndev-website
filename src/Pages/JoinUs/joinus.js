import React from "react";
import "./joinus.css";
import Footer from "../../Components/Footer/Footer";
import { Chrono } from "react-chrono";
import { Button } from "@mui/material";

export default function JoinUs() {
  const items = [
    {
      title: "Early September 2023",
      cardTitle: "hiring for development team roles opens",
    },
    {
      title: "End of September 2023",
      cardTitle: "hiring completed and development teams created",
    },
    {
      title: "October 2023",
      cardTitle: "initial team and client meetings",
    },
    {
      title: "Novemeber 2023",
      cardTitle: "site design and developer onboarding",
    },
    {
      title: "December 2023",
      cardTitle: "exams",
    },
    {
      title: "Janary to Early February 2023",
      cardTitle: "development of first website prototype",
    },
    {
      title: "Mid February to late March 2024",
      cardTitle: "projects are completed and delivered to clients",
    },
  ];
  return (
    <div className="join-container">
      <div className="join-top-container">
        <h1 className="join-title"> Join Us</h1>
        <div className="join-btn-div">
          {" "}
          <label for="join-btn">Interested in Joining</label>
          <button id="join-btn" className="join-btn">
            Coming Soon
          </button>
        </div>
        <div className="join-top-text">
          <text className="team-header">Our Teams: </text>
          <div className="team-text">
            <text className="team">Internal</text>
            <text className="team">External</text>
            <text className="team">Development</text>
            <text className="team">Marketing</text>
            <text className="team">Finance</text>
            <text className="team">Technology</text>
            <text className="team">Careers</text>
          </div>
        </div>
      </div>
      <div className="join-bottom-container">
        <h1 className="dev-timeline-title">Development Project Timeline</h1>
        <div>
          <Chrono
            items={items}
            cardHeight={100}
            hideControls={true}
            lineWidth={5}
            timelinePointShape={"square"}
            theme={{
              primary: "#FAC144",
              secondary: "#FAC144",
              cardBgColor: "white",
              titleColor: "white",
              titleColorActive: "white",
            }}
            fontSizes={{
              cardTitle: "1.5rem",
              title: "1.25rem",
            }}
            mode="VERTICAL_ALTERNATING"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

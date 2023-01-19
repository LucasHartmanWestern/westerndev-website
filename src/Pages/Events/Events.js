import React from "react";
import "./Events.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function Events() {
  // add events here
  const items = [
    {
      name: "Party Games Tournament",
      desc: "WDS is hosting a party games tournament on our discord server, come out to meet new people and have loads of fun!",
      link: "https://www.instagram.com/p/CgHXZNxpE3d/?hl=en",
      time: "July 19, 8:00-9:30PM",
    },
    {
      name: "Toronto Summer Dinner",
      desc: "Meet our Co-Presidents and VP’s, learn more about how to get involved as a general member and executive, and enjoy some FREE pizza.",
      link: "https://www.instagram.com/p/ChVFERGJy5E/?hl=en",
      time: "August 21, 6:30-9:30PM",
    },
    {
      name: "Virtual Information Night",
      desc: "Learn more about how to get involved in WDS!",
      link: "TBD",
      time: "TBD",
    },
    {
      name: "London Fall Dinner",
      desc: "Meet our Co-Presidents and VP’s, learn more about how to get involved as a general member and executive!",
      link: "TBD",
      time: "TBD",
    },
    {
      name: "Intro to HTML/CSS",
      desc: "Learn about one of fundamentals of web development.",
      link: "TBD",
      time: "TBD",
    },
    {
      name: "Intro to Javascript",
      desc: "Learn how to add interactivity to your website with Javascript!",
      link: "TBD",
      time: "TBD",
    },
    {
      name: "Overhaul: Development and Debugging Case Competition",
      desc: "A weekend dedicated to debugging, developing features and then pitching changes and improvements. A not miss event for aspiring software professionals.",
      link: "TBD",
      time: "TBD",
    },
    {
      name: "Women in Tech Summit",
      desc: "Career-driven workshops, keynotes and an interview competition to help women navigate the technology world in a safe space.",
      link: "TBD",
      time: "TBD",
    },
    {
      name: `Western Developer's League`,
      desc: "Compete against teams of developers across the country to showcase your skills, grow as a developer, and claim ultimate bragging rights.",
      link: "TBD",
      time: "TBD",
    },
  ];

  return (
    <div className="events">
      <div className="events-top-container">
        <div className="events-title">Events</div>
        <div className="events-description">
          <b className="bold-text">Empowering students</b> through professional
          development, technical and community events
        </div>
      </div>
      <div className="events-carousel">
        <Carousel className="carousel">
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

function Item(props) {
  return (
    <Paper className="paper">
      <h2 className="event-name">{props.item.name}</h2>
      <p className="event-desc">{props.item.desc}</p>
      <p className="event-time">Time: {props.item.time}</p>
      <a className="event-link" href={props.item.link}>
        Link: {props.item.link}
      </a>
    </Paper>
  );
}

export default Events;

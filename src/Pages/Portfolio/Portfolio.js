import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

import "./Portfolio.css";

function Portfolio() {
  const items = [
    {
      name: "Project 1",
      team_leads: "Lead 1, Lead 2",
      devs: "Dev 1, Dev 2, Dev 3",
      link: "https://www.instagram.com/p/CgHXZNxpE3d/?hl=en",
    },
    {
      name: "Project 2",
      team_leads: "Lead 1, Lead 2",
      devs: "Dev 1, Dev 2, Dev 3",
      link: "https://www.instagram.com/p/ChVFERGJy5E/?hl=en",
    },
  ];

  //document.body.style = 'background: #D9DDF5;';
  return (
    <div className="page">
      <h1>Scroll to View Our Portfolio</h1>
      <div className="proj-carousel">
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
      <h2 className="proj-name">{props.item.name}</h2>
      <p className="proj-team-leads">{props.item.team_leads}</p>
      <p className="proj-devs">{props.item.devs}</p>
      <a className="proj-link" href={props.item.link}>
        Link: {props.item.link}
      </a>
    </Paper>
  );
}

export default Portfolio;

import React, { useState, useEffect } from "react";
import "./Events.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Footer from "../../Components/Footer/Footer";
import UpcomingEvent from "./UpcomingEvent/UpcomingEvent";

function Events() {
  const [carouselItems, setCarouselItems] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    //REPLACE API ENDPOINT WITH WHATEVER IS NEEDED
    fetch('API_ENDPOINT_FOR_CAROUSEL_ITEMS')
      .then(response => response.json())
      .then(data => setCarouselItems(data))
      .catch(error => console.error('Error fetching carousel items:', error));

    //REPLACE API ENDPOINT WITH WHATEVER IS NEEDED
    fetch('API_ENDPOINT_FOR_UPCOMING_EVENTS')
      .then(response => response.json())
      .then(data => setUpcomingEvents(data))
      .catch(error => console.error('Error fetching upcoming events:', error));
  }, []);

  return (
    <div className="events">
      <div className="events-top-container">
      </div>
      <div className="events-carousel">
        <Carousel className="carousel">
          {carouselItems.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
      
      <div className="upcoming-events-container">
        <div className="upcoming-events">
          {upcomingEvents.map((event, i) => (
            <UpcomingEvent 
            //REPLACE IDENTIFIERS AS NEEDED
              key={i}
              name={event.name}
              date={event.date}
              descript={event.descript}
              link={event.link}
            />
          ))}
        </div>
      </div>
      <div className="past-events">
      </div>
      <Footer></Footer>
    </div>
  );
}

function Item(props) {
  return (
    <Paper className="paper">
    </Paper>
  );
}

export default Events;

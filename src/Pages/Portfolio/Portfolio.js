import React from "react";
import "./Portfolio.css";
import Footer from "../../Components/Footer/Footer";

function Portfolio() {
  return (
    <div className="port-container">
      <div className="port-title">Portfolio</div>
      <div className="grid-container">
        <div className="grid-row">
          <div className="grid-item" data-text="Info About Project">
            Project Name
          </div>
          <div className="grid-item" data-text="Info About Project">
            Project Name
          </div>
        </div>
        <div className="grid-row">
          <div className="grid-item" data-text="Info About Project">
            Project Name
          </div>
          <div className="grid-item" data-text="Info About Project">
            Project Name
          </div>
        </div>
        <div className="grid-row">
          <div className="grid-item" data-text="Info About Project">
            Project Name
          </div>
          <div className="grid-item" data-text="Info About Project">
            Project Name
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Portfolio;

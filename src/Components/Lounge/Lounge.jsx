import React from "react";

import gridImage from "../../assets/grid-image.png";

const Lounge = () => {
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={gridImage} alt="" />
        </div>
        <div className="textDiv">
          <h2>Unaccomanied Minor Lounge</h2>
          <div className="grids grid">
            <div className="singleGrid">
              <span className="gridTitle">Help through the airport</span>
              <p>
                You can also call airlines from your phone and book a flight
                tickets to one of your favourite destinations.
              </p>
            </div>
            <div className="singleGrid">
              <span className="gridTitle">Chauffeur-drive services</span>
              <p>
                You can also call airlines from your phone and book a flight
                tickets to one of your favourite destinations.
              </p>
            </div>
            <div className="singleGrid">
              <span className="gridTitle">Care on the flight</span>
              <p>
                You can also call airlines from your phone and book a flight
                tickets to one of your favourite destinations.
              </p>
            </div>
            <div className="singleGrid">
              <span className="gridTitle">Priority Boarding</span>
              <p>
                You can also call airlines from your phone and book a flight
                tickets to one of your favourite destinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;

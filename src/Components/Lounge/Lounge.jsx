import React,{useEffect} from "react";

import gridImage from "../../assets/grid-image.png";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Lounge = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div data-aos = 'fade-down' data-aos-duration = '2500' className="imgDiv">
          <img src={gridImage} alt="" />
        </div>
        <div data-aos = 'fade-right' data-aos-duration = '2500' className="textDiv">
          <h2>Unaccomanied Minor Lounge</h2>
          <div className="grids grid">
            <div data-aos = 'fade-up' data-aos-duration = '2500' className="singleGrid">
              <span className="gridTitle">Help through the airport</span>
              <p>
                You can also call airlines from your phone and book a flight
                tickets to one of your favourite destinations.
              </p>
            </div>
            <div data-aos = 'fade-down' data-aos-duration = '2500' className="singleGrid">
              <span className="gridTitle">Chauffeur-drive services</span>
              <p>
                You can also call airlines from your phone and book a flight
                tickets to one of your favourite destinations.
              </p>
            </div>
            <div data-aos = 'fade-down' data-aos-duration = '2500' className="singleGrid">
              <span className="gridTitle">Care on the flight</span>
              <p>
                You can also call airlines from your phone and book a flight
                tickets to one of your favourite destinations.
              </p>
            </div>
            <div data-aos = 'fade-down' data-aos-duration = '2500' className="singleGrid">
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

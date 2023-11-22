import React from "react";

import paris from "../../assets/paris.jpg";
import egypt from "../../assets/egypt.jpg";
import dubai from "../../assets/dubai.jpg";
import switherland from "../../assets/switherland.jpg";
import travelerOne from "../../assets/traveler-1.jpg";
import travelerTwo from "../../assets/traveler-2.jpg";
import travelerThree from "../../assets/traveler-3.jpg";
import travelerFour from "../../assets/traveler-4.jpg";

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: travelerOne,
    travelerName: "Ali Ahmed",
    socialLink: "aliahmed3",
  },
  {
    id: 2,
    destinationImage: egypt,
    travelerImage: travelerTwo,
    travelerName: "Moustafa Mohamed",
    socialLink: "moustafa8",
  },
  {
    id: 3,
    destinationImage: dubai,
    travelerImage: travelerThree,
    travelerName: "Hazem Sherif",
    socialLink: "hazemsherif",
  },
  {
    id: 4,
    destinationImage: switherland,
    travelerImage: travelerFour,
    travelerName: "Zeyad Tarek",
    socialLink: "tarekzeyad15",
  },
];

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top Travelers Of This Month!</h2>

        <div className="travelersContainer grid">
          {travelers.map((traveler) => (
            <div className="singleTraveler" key={traveler.id}>
              <img
                src={traveler.destinationImage}
                alt="destination image"
                className="destinationImage"
              />
              <div className="travelerImage">
                <img src={traveler.travelerImage} alt="Traveler image" />
              </div>
              <div className="travelerName">
                <span>{traveler.travelerName}</span>
                <p>{traveler.socialLink}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Travelers;

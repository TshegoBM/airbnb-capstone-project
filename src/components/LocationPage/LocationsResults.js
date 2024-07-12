import React from "react";
import { Link } from 'react-router-dom';
import "./LocationsResults.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const LocationsResults = ({ img, mainlocation, sublocation, description, star, price }) => {
  const [amount, perNight] = price.split(" /");

  return (
    <div className="locationsResults">
      <Link to="/locationsdetails" className="location-link">
        <img src={img} alt="Location" className="location-image" />
      </Link>
      <FavoriteBorderIcon className='searchResults_heart'/>
      <div className="locationsResults_info">
        <div className="locationsResults_infoTop">
          <p>{mainlocation}</p>
        </div>
        <div className="sub_location">
          <p>{sublocation}</p>
          <h3>{description}</h3>
        </div>
        <div className="locationsResults_infoBottom">
          <div className="locationsResults_stars">
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="locationsResults_price">
            <h2>{amount}</h2>
            <p>{perNight}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsResults;

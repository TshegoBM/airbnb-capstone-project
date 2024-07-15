import React from "react";
import "./LocationDetails.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DoorFrontOutlinedIcon from "@mui/icons-material/DoorFrontOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import { WifiOutlined } from "@mui/icons-material";

const LocationsDetails = () => {
  const accommodationType = "Private Room"; // Example accommodation type
  const starRating = 4.5; // Example star rating
  const numberOfReviews = 120; // Example number of reviews
  const imageUrl =
    "https://s3-alpha-sig.figma.com/img/33e7/8912/bbfb42ca5051f5492bcbda4a216dccc6?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PFF62WOwsIHqviChCXSdT62KWnoexOHuMkGZpzRKJ4TNDDXuNJySwoT3N~RXG3DDxZoRZEfBsnhroT4xNXIYiv43Fe30DtihkED5qRe7LQzf2jnqO68dScr~im7ksxFPaDEBw~mR0sE854dvMx-lWLYK~oeHAQLpwmjfYZxf2EdczbNtRESR8O~47a9OyUo95LKGYrwoODLyzjC1n02FSUhz-tHKPGbVlAj3bKMSj5QMf74nJPXUepVwOZDYNE-EZdl4n1LrhaATtvvIwG4wWjjZVtLeT1d9~gB8E8Xwzk4MFGhrWSgvUAvBY2DjvZDTJn4ZGeAqnOKap1pafEVR-A__";

  return (
    <div className="location-details-container">
      <div className="location-details">
        <div className="details-header">
          <h1>{accommodationType}</h1>
          <p>
            <StarRateIcon /> {starRating} ({numberOfReviews} reviews) - New York
          </p>
        </div>
        <div className="image-section-container">
          <div className="main-image">
            <img src={imageUrl} alt="Main Image" />
          </div>
          <div className="small-images">
            <div className='small-images-row'>
            <img src={imageUrl} alt="Small Image 1" />
              <img src={imageUrl} alt="Small Image 2" />
            </div>
            <div className="small-images-row">
            <img src={imageUrl} alt="Small Image 3" />
              <img src={imageUrl} alt="Small Image 4" />
            </div>
          </div>
        </div>
      </div>

      <div className="content-container">
        <div className="left-column">
          <div className="listing-highlights">
            <div className="highlight-container">
              <div className="highlight-heading">
                <p className="hosted-by"> Entire Rental Hosted by Ghazel</p>
                <p className="details">2 guests · 1 bedroom · 1 bed · 1 bath</p>
              </div>
              <div className="highlight-details-container">
                <div className="highlight">
                  <HomeOutlinedIcon className="highlight-icon" />
                  <div>
                    <h3>Entire home</h3>
                    <p>You might share the room with other people.</p>
                  </div>
                </div>

                <div className="highlight">
                  <AutoAwesomeOutlinedIcon className="highlight-icon" />
                  <div>
                    <h3>Enhanced Clean</h3>
                    <p>
                      This host is committed to Airbnb's 5-step enhanced
                      cleaning process.
                    </p>
                  </div>
                </div>
                <div className="highlight">
                  <DoorFrontOutlinedIcon className="highlight-icon" />
                  <div>
                    <h3>Self check-in</h3>
                    <p>Check yourself in with the keypad.</p>
                  </div>
                </div>
                <div className="highlight">
                  <CalendarTodayOutlinedIcon className="highlight-icon" />
                  <div>
                    <h3>Free cancellation before 3:00 PM on Jul 14</h3>
                    <p>Get a full refund if you change your mind.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="listing-overview">
            <p>
              Come and stay in this superb duplex T2, in the heart of the
              historic center of Bordeaux...
            </p>
            <p className="show-more-button">Show more</p>
          </div>

          <div className="sleeping-arrangements">
            <h2>Where you'll sleep</h2>
            <img
              src="https://s3-alpha-sig.figma.com/img/91d6/ccd9/96e5b436aa98cbfacf7fc152380f2a69?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RsCGmSkKk8UzH2rrjX~U01ZtdBdr0Wu-iczXliC94AdhK89mjc8CoxcoGfhEPMBPLfWowJLcbvjGQg1LyfTBL7isan4sGAmImP~ZBfxu6GBZI90yc8QShsNkAY8ZrDXFqGhOr-uBm8-fl30ijAo5G2oucYzdB~qsZ0Y-3zFF0N1BRxkfwFc9jRc50Wh-kwYlxNlam8V0GnGhR8GF~KeCHuZN3RcwRouiw18JKuhfTCwCjrRfGCGts3C0Y1Z8gYcn2oAvBPaL3ELhQUcblDZhj~krGZQyi9pIPZOjkAqqChyvtuU9FRPaAo4vgTKwtAQpMxm0l2XeSxH2zMWTmYCqXw__"
              alt="Bedroom"
              className="sleeping-arrangements__image"
            />
            <div className="sleeping-arrangements__details">
              <h3>Bedroom</h3>
              <p>1 queen bed</p>
            </div>
          </div>

          <div className="amenities-section">
            <h2>What this place offers</h2>
            <div className="amenities-grid-container">
              <div className="amenities-grid">
                <div className="amenity-item">
                  <LocalFloristOutlinedIcon />
                  <p>Garden view</p>
                </div>
                <div className="amenity-item">
                  <WifiOutlinedIcon />
                  <p>Free wifi</p>
                </div>
                <div className="amenity-item">
                  <AdjustOutlinedIcon />
                  <p> Free washer - in building</p>
                </div>
                <div className="amenity-item">
                  <AirOutlinedIcon />
                  <p>Central air conditioning</p>
                </div>
                <div className="amenity-item">
                  <KitchenOutlinedIcon />
                  <p>Refrigerator</p>
                </div>
              </div>
              <div className="amenities-grid">
                <div className="amenity-item">
                  <span>🍽️</span> Kitchen
                </div>
                <div className="amenity-item">
                  <span>🐶</span> Pets allowed
                </div>
                <div className="amenity-item">
                  <span>🔥</span> Dryer
                </div>
                <div className="amenity-item">
                  <span>📹</span> Security cameras on property
                </div>
                <div className="amenity-item">
                  <span>🚴‍♂️</span> Bicycles
                </div>
              </div>
            </div>
            <button className="show-all-button">Show all 37 amenities</button>
          </div>

          <div className="booking-calendar-section">
            {/* Booking Calendar Content  */}
            <h2>7 nights in New York</h2>
            <p>Feb 19, 2022 - Feb 26, 2022</p>
            <div className="booking-calendar">
              <div className="month">
                <h3>February 2022</h3>
                <div className="weekdays">
                  <span>Su</span>
                  <span>Mo</span>
                  <span>Tu</span>
                  <span>We</span>
                  <span>Th</span>
                  <span>Fr</span>
                  <span>Sa</span>
                </div>
                <div className="days">
                  {Array.from({ length: 28 }, (_, i) => (
                    <span key={i} className={i >= 10 ? "active" : ""}>
                      {i + 1}
                    </span>
                  ))}
                </div>
              </div>
              <div className="month">
                <h3>March 2022</h3>
                <div className="weekdays">
                  <span>Su</span>
                  <span>Mo</span>
                  <span>Tu</span>
                  <span>We</span>
                  <span>Th</span>
                  <span>Fr</span>
                  <span>Sa</span>
                </div>
                <div className="days">
                  {Array.from({ length: 31 }, (_, i) => (
                    <span key={i} className={i < 5 ? "active" : ""}>
                      {i + 1}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button className="clear-dates-button">Clear dates</button>
          </div>
        </div>

        <div className="right-column">
          <div className="reservation-card">
            <div className="price-info">
              <h2>$75 / night</h2>
              <p>
                <StarRateIcon /> 5.0 · 7 reviews
              </p>
            </div>
            <div className="booking-info">
              <div className="date-picker">
                <label>Check-in</label>
                <input type="date" />
                <label>Check-out</label>
                <input type="date" />
              </div>
              <div className="guests-picker">
                <label>Guests</label>
                <select>
                  <option>2 guests</option>
                </select>
              </div>
            </div>
            <button className="reserve-button">Reserve</button>
            <div className="price-breakdown">
              <p>$79 x 7 nights: $555</p>
              <p>Weekly discount: -$28</p>
              <p>Cleaning fee: $62</p>
              <p>Service fee: $83</p>
              <p>Occupancy taxes and fees: $29</p>
              <hr />
              <h3>Total: $701</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsDetails;

import React, { useState } from "react";
import "./LocationDetails.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import DiningOutlinedIcon from "@mui/icons-material/DiningOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PedalBikeOutlinedIcon from "@mui/icons-material/PedalBikeOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import DoorFrontOutlinedIcon from "@mui/icons-material/DoorFrontOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import listing from '../../assets/locationDetails/listing.png';
import WhereYoullSleep from '../../assets/locationDetails/Sleep.png'


const LocationDetails = () => {
  const accommodationType = "Private Room"; // Example accommodation type
  const starRating = 4.5; // Example star rating
  const numberOfReviews = 120; // Example number of reviews
  const imageUrl = listing;
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(2);
  const nightlyRate = 75;
  const weeklyDiscount = 28;
  const discount = 28;
  const cleaningFee = 62;
  const serviceFee = 83;
  const taxesAndFees = 29;

  const calculateTotalPrice = () => {
    const nights =
      (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24);
    if (isNaN(nights) || nights <= 0) {
      return 0;
    }
    const total =
      nightlyRate * nights - discount + cleaningFee + serviceFee + taxesAndFees;
    return total;
  };

  const totalPrice = calculateTotalPrice();

  const handleReserve = () => {
    if (checkInDate && checkOutDate && guests) {
      alert(
        `Reservation made from ${checkInDate} to ${checkOutDate} for ${guests} guests.`
      );
    } else {
      alert("Please fill in all fields to make a reservation.");
    }
  };

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
            <div className="small-images-row">
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
              src={WhereYoullSleep}
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
                  <DiningOutlinedIcon />
                  <p>Kitchen</p>
                </div>
                <div className="amenity-item">
                  <PetsOutlinedIcon />
                  <p>Pets allowed</p>
                </div>
                <div className="amenity-item">
                  <LocalLaundryServiceOutlinedIcon />
                  <p>Dryer</p>
                </div>
                <div className="amenity-item">
                  <SecurityOutlinedIcon />
                  <p>Security cameras on property</p>
                </div>
                <div className="amenity-item">
                  <PedalBikeOutlinedIcon />
                  <p>Bicycles</p>
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
              <h2>${nightlyRate} / night</h2>
              <p>
                <StarRateIcon /> {starRating} · {numberOfReviews} reviews
              </p>
            </div>
            <div className="booking-info">
              <div className="date-picker">
                <label>Check-in</label>
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
                <label>Check-out</label>
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                />
              </div>
              <div className="guests-picker">
                <label>Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                >
                  <option>1 guest</option>
                  <option>2 guests</option>
                  <option>3 guests</option>
                  <option>4 guests</option>
                </select>
              </div>
            </div>
            <button className="reserve-button" onClick={handleReserve}>
              Reserve
            </button>
            <div className="price-breakdown">
              <div class="fees">
                <p>
                  <span class="rate">${nightlyRate} x 
                    {(new Date(checkOutDate) - new Date(checkInDate)) /
                      (1000 * 60 * 60 * 24) || 0}{" "}
                    nights
                  </span>
                  <span class="total">
                    $
                    {nightlyRate *
                      ((new Date(checkOutDate) - new Date(checkInDate)) /
                        (1000 * 60 * 60 * 24)) || 0}
                  </span>
                </p>

                <p>
                  <span class="label">Weekly discount:</span>{" "}
                  <span class="amount">-${weeklyDiscount}</span>
                </p>
                <p>
                  <span class="label">Cleaning fee:</span>{" "}
                  <span class="amount">${cleaningFee}</span>
                </p>
                <p>
                  <span class="label">Service fee:</span>{" "}
                  <span class="amount">${serviceFee}</span>
                </p>
                <p>
                  <span class="label">Occupancy taxes and fees:</span>{" "}
                  <span class="amount">${taxesAndFees}</span>
                </p>
              </div>

              <hr />
              <h3>Total: ${totalPrice}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;

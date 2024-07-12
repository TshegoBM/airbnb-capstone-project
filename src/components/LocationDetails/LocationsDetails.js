import React from "react";
import "./LocationsDetails.css";
import Footer from "../HomePage/Footer";
import StarRateIcon from '@mui/icons-material/StarRate';

const LocationsDetails = () => {
  const accommodationType = "Private Room"; // Example accommodation type
  const starRating = 4.5; // Example star rating
  const numberOfReviews = 120; // Example number of reviews
  const imageUrl =
    "https://s3-alpha-sig.figma.com/img/33e7/8912/bbfb42ca5051f5492bcbda4a216dccc6?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PFF62WOwsIHqviChCXSdT62KWnoexOHuMkGZpzRKJ4TNDDXuNJySwoT3N~RXG3DDxZoRZEfBsnhroT4xNXIYiv43Fe30DtihkED5qRe7LQzf2jnqO68dScr~im7ksxFPaDEBw~mR0sE854dvMx-lWLYK~oeHAQLpwmjfYZxf2EdczbNtRESR8O~47a9OyUo95LKGYrwoODLyzjC1n02FSUhz-tHKPGbVlAj3bKMSj5QMf74nJPXUepVwOZDYNE-EZdl4n1LrhaATtvvIwG4wWjjZVtLeT1d9~gB8E8Xwzk4MFGhrWSgvUAvBY2DjvZDTJn4ZGeAqnOKap1pafEVR-A__";

  return (
    <div className="locations-details">
      <div className="details-header">
        <h1>{accommodationType}</h1>
      </div>
      <div className="ratings-reviews">
        <p>
          <StarRateIcon /> {starRating} ({numberOfReviews} reviews) - New York
        </p>
      </div>
      <div className="image-section-container">
        <div className="main-image">
          <img src={imageUrl} alt="Main Image" />
        </div>
        <div className="small-images">
          <div className="small-images-top">
            <img src={imageUrl} alt="Small Image 1" />
            <img src={imageUrl} alt="Small Image 2" />
          </div>
          <div className="small-images-bottom">
            <img src={imageUrl} alt="Small Image 3" />
            <img src={imageUrl} alt="Small Image 4" />
          </div>
        </div>
      </div>
      <div className="listing-highlights">
        <div className="highlight">
          <h3>
          <span className="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentColor" }}>
                <path d="m17.98 1.57.14.14 13.59 13.58-1.42 1.42L29 15.4V28a2 2 0 0 1-1.85 2H5a2 2 0 0 1-2-1.85V15.4l-1.3 1.3-1.4-1.42L13.87 1.71a3 3 0 0 1 4.1-.14zM11 17.93a2 2 0 0 0-1 3.73v2.35A6 6 0 0 0 5.32 28h11.36A6 6 0 0 0 12 24.01v-2.35a2 2 0 0 0-1-3.73zm10 0a2 2 0 0 0-1 3.73v2.35c-.95.16-1.84.55-2.6 1.12.63.84 1.1 1.82 1.37 2.87h7.91A6 6 0 0 0 22 24.01v-2.35a2 2 0 0 0-1-3.73zm-4.94-15.1h-.12a1 1 0 0 0-.55.2l-.1.1L5 13.4v11.23a8.02 8.02 0 0 1 2.96-2.11 4 4 0 1 1 6.08 0A8 8 0 0 1 16 23.68c.6-.47 1.25-.86 1.96-1.15a4 4 0 1 1 6.08 0 8.02 8.02 0 0 1 2.96 2.1V13.43L16.7 3.12a1 1 0 0 0-.64-.29z"></path>
              </svg>
            </span>
            Shared room</h3>
          <p>You might share the room with other people.</p>
        </div>
        <div className="highlight">
          <h3>
          <span className="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentColor" }}>
                <path d="M18.78 6.15c.27.27.49.59.63.93a3 3 0 0 1 4.1 4.1 3 3 0 0 1 .78.49l.15.13a3 3 0 0 1 .13 4.1l-.13.15-.13.12c.19.08.36.2.53.32l.16.13.14.13a3 3 0 0 1 .14 4.1l-.14.15-7.42 7.42-.05.04-.05.04-.08.06-.1.09a10 10 0 0 1-13.07-.17l-.22-.2-.22-.21a9.99 9.99 0 0 1-2.8-8.71l.03-.16v-.08L1.2 19l.58-2.48L4.4 8.74a3 3 0 0 1 5.84 1.39l-.04.17-.07.26 4.4-4.41a3 3 0 0 1 4.25 0zm-2.74 1.33-.09.08-6.33 6.33a7 7 0 0 1-.78 8.55l-.17.18-1.41-1.42a5 5 0 0 0 .62-6.32l-.75-.95 1.14-4.15a1 1 0 0 0-.71-1.23 1 1 0 0 0-1.2.65l-2.67 7.87-.52 2.24-.02.12a8 8 0 0 0 12.97 7.71l.21-.18.08-.06 7.32-7.32a1 1 0 0 0 .15-1.22l-.07-.1-.08-.1a1 1 0 0 0-1.32-.07l-.1.08-3.53 3.53-1.42-1.41 5.66-5.66a1 1 0 0 0 .08-1.32l-.08-.1-.1-.08a1 1 0 0 0-1.22 0l-.1.09-5.65 5.66-1.41-1.42 7.07-7.07a1 1 0 0 0-1.32-1.5zM31 11v2h-4v-2h4zm-3.64-7.78 1.42 1.42-2.83 2.82-1.41-1.41 2.82-2.83zM21 1v4h-2V1h2z"></path>
              </svg>
            </span>
            Shared common spaces</h3>
          <p>You'll share parts of the home.</p>
        </div>
        <div className="highlight">
          <h3>
          <span className="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentColor" }}>
                <path d="M7 1a3 3 0 0 0-3 2.82V31h2V4a1 1 0 0 1 .88-1H18a1 1 0 0 1 1 .88V5h-5a1 1 0 0 0-1 .88V9h-3v2h19V9h-2V6a1 1 0 0 0-.88-1H21V4a3 3 0 0 0-2.82-3H7zm13 28a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM15 7h10v2H15V7z"></path>
              </svg>
            </span>
            Shared bathroom</h3>
          <p>You’ll share the bathroom with others.</p>
        </div>
        <div className="highlight">
          <h3>
          <span className="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "24px", width: "24px", fill: "currentColor" }}>
                <path d="M11.67 0v1.67h8.66V0h2v1.67h6a2 2 0 0 1 2 1.85v16.07a2 2 0 0 1-.46 1.28l-.12.13L21 29.75a2 2 0 0 1-1.24.58H6.67a5 5 0 0 1-5-4.78V3.67a2 2 0 0 1 1.85-2h6.15V0zm16.66 11.67H3.67v13.66a3 3 0 0 0 2.82 3h11.18v-5.66a5 5 0 0 1 4.78-5h5.88zm-.08 8h-5.58a3 3 0 0 0-3 2.82v5.76zm-18.58-16h-6v6h24.66v-6h-6v1.66h-2V3.67h-8.66v1.66h-2z"></path>
              </svg>
            </span>
            Free cancellation before 3:00 PM on Jul 14</h3>
          <p>Get a full refund if you change your mind.</p>
        </div>
      </div>
      <Footer />
      <div>
        <path d="m17.98 1.57.14.14 13.59 13.58-1.42 1.42L29 15.4V28a2 2 0 0 1-1.85 2H5a2 2 0 0 1-2-1.85V15.4l-1.3 1.3-1.4-1.42L13.87 1.71a3 3 0 0 1 4.1-.14zM11 17.93a2 2 0 0 0-1 3.73v2.35A6 6 0 0 0 5.32 28h11.36A6 6 0 0 0 12 24.01v-2.35a2 2 0 0 0-1-3.73zm10 0a2 2 0 0 0-1 3.73v2.35c-.95.16-1.84.55-2.6 1.12.63.84 1.1 1.82 1.37 2.87h7.91A6 6 0 0 0 22 24.01v-2.35a2 2 0 0 0-1-3.73zm-4.94-15.1h-.12a1 1 0 0 0-.55.2l-.1.1L5 13.4v11.23a8.02 8.02 0 0 1 2.96-2.11 4 4 0 1 1 6.08 0A8 8 0 0 1 16 23.68c.6-.47 1.25-.86 1.96-1.15a4 4 0 1 1 6.08 0 8.02 8.02 0 0 1 2.96 2.1V13.43L16.7 3.12a1 1 0 0 0-.64-.29z"></path>
      </div>
    </div>
  );
};

export default LocationsDetails;

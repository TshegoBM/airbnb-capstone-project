import React from "react";
import "./Inspiration.css";

const Inspiration = () => {
  return (
    <div className="inspiration-container">
      {/* Cards Section */}
      <div className="cards-section">
        <h2>Inspiration for your next trip</h2>
        <div className="cards-row">
          <div className="city-card radisson-blu-hotel">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/427349706.jpg?k=c84fd64d2b29656c5122ae2a3081399cee39580b55ad553156aaacfdef6ecaec&o=&hp=1"
              alt="Radisson Blu Hotel"
            />
            <div className="card-info">
              <h3>Radisson Blu Hotel</h3>
              <p>53 km away</p>
            </div>
          </div>
          <div className="city-card houghton-hotel">
            <img
              src="https://saltosystems.com/sites/default/files/styles/breakpoint_1920/public/images/case-studies/hospitality-case-houghton-00.jpg?itok=_gynbb4Z"
              alt="The Houghton Hotel"
            />
            <div className="card-info">
              <h3>The Houghton Hotel</h3>
              <p>168 km away</p>
            </div>
          </div>
          <div className="city-card mpumalanga">
            <img
              src="https://s3-alpha-sig.figma.com/img/d5c1/6cba/8bc1958720a3d767d19d62a93cd1ff30?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0Lyb4aos8pjrvvRGGzlY~MCbvauii1fp4jtdKLH~WH8FmLZlVs25us7d9AzOnVtaxmGTDAkXmCx1fS-CQzn5sXFBw~EdWDjp6J61G9gkurNMqM5LjhqKdPjB6wmkDscfp-5H8MHCrhnFV68I61IZWGSAP1a27H62nl291wSgxkgzIKAVhI5xBYdkmRnNTIHqQ13zRYoldV-87pPmetQQtRG6NeWO3KfURxRlbWrfLsqYyzb4CC7DGDcVR-qJveugU4oiYgZIRtFCqDClhBddzElphLgTgY1hqW3sWbhzxcJ~HChStJr4VIX4YKlYIHybnwAqw9GVza-mzFlTp0yzw__"
              alt="Woodmead Hotel"
            />
            <div className="card-info">
              <h3>Mpumalanga</h3>
              <p>30 miles away</p>
            </div>
          </div>
          <div className="city-card palace-of-the-lost-city">
            <img
              src="https://tripstore-assets.s3.ap-south-1.amazonaws.com/itinerary-images/62d26b0351b73.jpg"
              alt="Palace of the Lost City"
            />
            <div className="card-info">
              <h3>Palace of the Lost City Hotel</h3>
              <p>34 km away</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
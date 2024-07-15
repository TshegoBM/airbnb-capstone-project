import React from "react";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <div className="banner-container">
      <div className="banner">
        <img
          className="banner-image"
          src="https://s3-alpha-sig.figma.com/img/8021/96a6/83d8b4f496c94cf0a33728d8f6e90e4b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BGwcCQFp0BIlQUpz4tpEzIBUUxrJQQsryRv6Ol53HIZtdvMGvVJzCYaMsXM4kZRKZdYEo2BYTaKRFfytg2WClYsfY-nuccyc26hWVDFae4h5asTqZRvw5sQ9k38ZoTwZzZpslVZQ3ouafOxuvJ~wrERZnAVZoiyYO895R149g0VjD5FHC1IfoacYxtj0qd26zPQ8AkczKhA0s10pKTwXP9QG7ehio9qsTIkKoTk2FkanLPbv6zenC1nMC7zNJbnAY1rA~t2hiKtSFgeHdpmjcTC1zwexlj2N7g2UF5wnVSl4rSEFfHhwyFXHoVgWhznvO4gpCANbyzxMs0LiFWBE1g__"
          alt="AirBnB Banner"
        />
        <div className="banner-text-container">
          <h1 className="banner-text">Not sure where to go? Perfect.</h1>
          <button className="banner-text-button">I'm flexible</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
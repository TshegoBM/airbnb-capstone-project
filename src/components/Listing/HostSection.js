import React from "react";
import "./HostSection.css";

const HostSection = () => {
  return (
    <div className="about-host-container">
      <div className="host-details">
        <img src="https://s3-alpha-sig.figma.com/img/a615/f544/bf4d532059a9b5a4735809663411f54b?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nQEoXTkiCBgFaQikgc4aCRq1IcjjeXqbLAV~yxTqQHJEdwlcMt-DmTo6d0IHUpg4hVdsq9vY038AjTZ64QhSiDaLr1mrLjjhLNW2-BRoGXT0yjvG6kGMbJKnQ9aQ6lA77TqRBnlylkRSAqMulqNhEhqVA4rsI2HM~0HiFv9sG1t3pVWh~amt1J0GfSJ0MPwFm4UYVM9OwpDWrf6l17grf9rYfTfVdwV9ANUdGBOclBCG2h5YKb100-cyCZR6V0tPkfx7ahxGDQodDFSUpqqH8uFApzO0G5XDT-TpnklB8vatCQTRcg-EaclOJpTxhpNyWeH87uxFRagChPvmlK8DbQ__" alt="Host" className="host-image" />
        <div className="host-info">
          <h2>Hosted by Ghazal</h2>
          <p>Joined May 2021</p>
          <p>
            <span>⭐</span> 12 Reviews <span>✔️</span> Identity verified <span>🌟</span> Superhost
          </p>
          <p>Ghazal is a Superhost</p>
          <p>
            Superhosts are experienced, highly rated hosts who are committed to
            providing great stays for guests.
          </p>
          <p>Response rate: 100%</p>
          <p>Response time: within an hour</p>
          <button className="contact-host-button">Contact Host</button>
          <p className="disclaimer">
            To protect your payment, never transfer money or communicate outside of
            the Airbnb website or app.
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default HostSection;
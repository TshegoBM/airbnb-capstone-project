import React from "react";
import "./DiscoverExperiences.css";

const DiscoverExperiences = () => {
  return (
    < div className="experiences-container">
      <h2>Discover Airbnb Experiences</h2>
      <div className="experiences-row">
        <div className="experiences-column">
          <img
            src="https://s3-alpha-sig.figma.com/img/3679/a298/196b41cd98272a64e19b9681beb746f0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=USUFt7RFGCxZFzXT7ak8kw8iybjikbgLauotqnRCfOdbgGJnAeY8QOK-mV-4DWVV1K9pGt0JZLm~EOdlzeOKdj~T1yymUoFt4I-umCNVfPgDXJHqIO6LC19-9nxFx260ATiTtFNUr1x6-ySktziWnQRF~9di6GfHF7aLhibnBMhvH7DWO0bkbkKnKIHJROUOFe0g7UuAvkmrO5CL4fgHuveSyJ-SK3bbWvq2fEIA7kRPDuXPmrTeH7Brv0HcW5N0v5xe~17nT~Ux6TwZRp8hlwJ06LPx6woPEf0vWgsEPY1xwtsdbhCPqQZAWdsACjGoiwC68uvevcwiu9Dh3zi6lg__"
            alt="Things to do on your trip"
          />
          <div className="experiences-info">
            <h3>Things to do on your trip</h3>
            <button className="experiences-btn">Experiences</button>
          </div>
        </div>
        <div className="experiences-column">
          <img
            src="https://s3-alpha-sig.figma.com/img/7894/1428/a63173a16c7efe522cab3d32fa5975ee?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pKhjL-1O5pYP57kZfG0Z0rid-eOxj-oOD8-AiPRKdEPQYdbxidSUP9Zhj7KRGU~vKYj0f7fVinz~VN8Liifk5W-3jUyeIT4pe5e1Vt6~pW78nCwyPDkijpqS6F6zo~3I-~YGWAwRTw2S4lylrsrYY8KHLWvrw6ICpn7C-X2kUCKlAugTPO2NZzv1-8FC3PIXeO3jdkkeSXCMmV0REOpL8Lo08cOkXRA9VPtNc1YOU9ItsnUuLAkHVEuLhdTZToKjKejCn9GhMbkaX6GepNNkYzq03Oz7C9v3fGCClTQguS9fP-XlSp76r9JUZLoDOQaJrSY2bhk3CWuw-Q4QrsrwKg__"
            alt="Things to do from home"
          />
          <div className="experiences-info">
            <h3>Things to do from home</h3>
            <button className="online-experiences-btn">
              Online Experiences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverExperiences;

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './LocationsPage.css';

const LocationsPage = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('http://localhost:3001/locations');
        setLocations(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching locations');
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  const handleCardClick = (locationName) => {
    history.push(`/listings?locationName=${encodeURIComponent(locationName)}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="locations-page">
      <div className='locations-header'>
        <p>5 Stays in all locations</p>
      </div>
      {locations.map((location) => (
        <div 
          key={location._id} 
          className="locations-cards" 
          onClick={() => handleCardClick(location.locationName)}
          style={{ cursor: 'pointer' }}
        >
          <img src={location.img} alt={location.locationName} />
          <div className="location-info-container">
            <div className="location-info">
              <h2 className='location-name'>{location.locationName}</h2>
              <h3 className="description">{location.locationDescription}</h3>
              <p>{location.highlights}</p>
            </div>
            <div className="locationsResults_infoBottom">
              <p>{location.numberOfStays}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationsPage;

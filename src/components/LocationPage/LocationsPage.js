import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import axios from 'axios';
import './LocationsPage.css';

const LocationsPage = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/locations');
        setListings(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (location) => {
    if (location.locationName === 'Gauteng') {
      history.push(`/listings?location=${encodeURIComponent(location.locationName)}`);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="locations-page">
      <div className='locations-header'>
        <p>5 Stays in all locations</p>
      </div>
      {listings.map((listing) => (
        <div 
          key={listing._id} 
          className="locations-cards" 
          onClick={() => handleCardClick(listing)}
          style={{ cursor: 'pointer' }}
        >
          <img src={listing.img} alt="Listing" />
          <div className="location-info-container">
            <div className="location-info">
              <h2 className='location-name'>{listing.locationName}</h2>
              <h3 className="description">{listing.locationDescription}</h3>
              <p>{listing.highlights}</p>
            </div>
            <div className="locationsResults_infoBottom">
              <div className="number-of-stays">
                <HomeOutlinedIcon style={{ marginRight: '8px' }} />
                <p>{listing.numberOfStays}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationsPage;

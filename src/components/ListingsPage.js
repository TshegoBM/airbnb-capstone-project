import React, { useEffect, useState } from 'react';
import { useLocation, useHistory} from 'react-router-dom';
import axios from 'axios';
import './ListingsPage.css';

const ListingsPage = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search);
  const locationName = query.get('locationName');
  
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/listings?locationName=${encodeURIComponent(locationName)}`);
        setListings(response.data);
        console.log('Im here', response.data)
        setLoading(false);
      } catch (error) {
        setError('Error fetching listings');
        setLoading(false);
      }
    };

    if (locationName) {
      fetchListings();
    } else {
      setError('Location name is required');
      setLoading(false);
    }
  }, [locationName]);

  const handleCardClick = (id) => {
    console.log("my id", id)
    history.push(`/listing/${id}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="listings-page">
      <h1 className="listings-header">{listings.length} Stays in {locationName}</h1>
      <div className="listings-container">
        {listings.map((listing) => (
          <div 
            key={listing._id} 
            className="listing-card"
            onClick={() => handleCardClick(listing._id)}
            style={{ cursor: 'pointer' }}
          >
            <img src={listing.img} alt={listing.title} className="listing-image" />
            <div className="listing-info">
              <h2 className="listing-title">{listing.title}</h2>
              <p className="listing-description">{listing.description}</p>
              <p className="listing-rooms">{listing.rooms}</p>
              <p className="listing-amenities">{listing.amenities}</p>
              <div className="rating-and-price">
                <p className="listing-rating">{listing.rating}</p>
                <p className="listing-price"><span className='price-value'>{listing.price}</span> /night</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingsPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get URL parameters
import axios from 'axios';
import './ListingsPage.css'; // Ensure this file exists and is correctly styled

const ListingsPage = () => {
  const { locationName } = useParams(); // Get locationName from URL
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/listings?location=${encodeURIComponent(locationName)}`);
        setListings(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching listings:', error);
        setError('Error fetching listings');
        setLoading(false);
      }
    };

    fetchListings();
  }, [locationName]); // Fetch data when locationName changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="listings-page">
      <h1 className="listings-header">Listings in {locationName}</h1>
      <div className="listings-container">
        {listings.map((listing) => (
          <div key={listing._id} className="listing-card">
            <img src={listing.img} alt={listing.title} className="listing-image" />
            <div className="listing-info">
              <h2 className="listing-title">{listing.title}</h2>
              <p className="listing-description">{listing.description}</p>
              <p className="listing-rooms">{listing.rooms}</p>
              <p className="listing-amenities">{listing.amenities}</p>
              <p className="listing-rating">Rating: {listing.rating}</p>
              <p className="listing-price">{listing.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingsPage;

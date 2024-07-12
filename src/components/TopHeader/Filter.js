import React, { useContext } from 'react';
import './Filter.css';
import { useLocation } from 'react-router-dom'; 
import SearchIcon from "@mui/icons-material/Search";


const Filter = () => {
  const location = useLocation(); 

  const filterBackground = location.pathname === '/locations' ? 'white' : 'black';


  const handleChange = (e) => {
    const { name, value } = e.target;
  };

  const handleSearch = () => {
    // Handle the search logic here
  };

  return (
    <div className="filter-container" style={{ backgroundColor: filterBackground }}>
      <div className="search-bar">
        <div className="search-section">
          <label>Hotels</label>
          <select
            name="location"
            // value={filters.location}
            onChange={handleChange}
          >
            <option value="">Select Hotel</option>
            <option value="local">Local</option>
            <option value="all">All locations</option>
          </select>
        </div>
        <div className="search-section">
          <label>Check in</label>
          <input
            type="text"
            name="checkInDate"
            placeholder="Add dates"
            onChange={handleChange}
          />
        </div>
        <div className="search-section">
          <label>Check out</label>
          <input
            type="text"
            name="checkOutDate"
            placeholder='Add dates'
            onChange={handleChange}
          />
        </div>
        <div className="search-section">
          <label>Guests</label>
          <input
            type="text"
            name="guests"
            placeholder="Add guests"
            onChange={handleChange}
          />
        </div>
        <div className='search_button' onClick={handleSearch}>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

export default Filter;

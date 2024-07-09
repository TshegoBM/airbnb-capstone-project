import React, {useState} from 'react';
import './Filter.css';
import SearchIcon from "@mui/icons-material/Search";


const Filter = () => {
    const [filters, setFilters] = useState({
        location: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
          ...prevFilters,
          [name]: value
        }));
      };
    
      const handleSearch = () => {
        // Handle the search logic here
        console.log('Searching with filters:', filters);
      };
  return (
    <div className="filter-container">
      <div className="search-bar">
        <div className="search-section">
          <label>Hotels</label>
          <select
            name="location"
            value={filters.location}
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
          />
        </div>
        <div className="search-section">
          <label>Check out</label>
          <input
            type="text"
            name="checkOutDate"
            placeholder='Add dates'
          />
        </div>
        <div className="search-section">
          <label>Guests</label>
          <input
            type="text"
            name="guests"
            placeholder="Add guests"
          />
        </div>
        <div className='search_button' onClick={handleSearch}>
          <SearchIcon />
        </div>
      </div>
    </div>
  )
}

export default Filter

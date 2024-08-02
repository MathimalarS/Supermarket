import React, { useState } from 'react';
import '../assets/css/CitySearchPopup.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

const CitySearchPopup = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);

  const cities = [
    "Chennai, Tamil Nadu",
    "Coimbatore, Tamil Nadu",
    "Madurai, Tamil Nadu",
    "Tiruchirappalli, Tamil Nadu",
    "Salem, Tamil Nadu",
    "Erode, Tamil Nadu",
    "Tiruppur, Tamil Nadu",
    "Vellore, Tamil Nadu",
    "Thoothukudi, Tamil Nadu",
    "Nagercoil, Tamil Nadu",
    "Thanjavur, Tamil Nadu",
  ];

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term) {
      const results = cities.filter(city => city.toLowerCase().includes(term.toLowerCase()));
      setFilteredCities(results);
    } else {
      setFilteredCities([]);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <div className="popup-header">
          <h3>Change Location</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="popup-content">
          <button className="detect-location-button">Detect my location</button>
          <span className="or">OR</span>
          <input
            type="text"
            placeholder="search delivery location"
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
        <div className="search-results">
          {filteredCities.map((city, index) => (
            <div key={index} className="search-result-item">
              <FaMapMarkerAlt className="location-icon" />
              {city}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CitySearchPopup;

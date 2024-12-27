import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/UserPopup.css';

const UserPopup = ({ onClose, onLogout }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="user-popup">
      <button className="close-button" onClick={onClose}>×</button>
      <ul>
        <li><Link to="/userdash" onClick={handleLinkClick}>My Account</Link></li>
        <li><Link to="/signup" onClick={handleLinkClick}>Add Account</Link></li>
        <li onClick={() => { onLogout(); onClose(); }}>Logout</li>
      </ul>
    </div>
  );
};

export default UserPopup;

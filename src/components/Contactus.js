import React from 'react';
import '../assets/css/Contactus.css';

const Contactus = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact <span className="highlight">Us</span></h1>
        <p>We value your opinions, suggestions, even your complaints! Because we’d be more than happy to help make every shopping experience of yours a truly world-class one!</p>
        <div className="contact-details">
          <p>Customer Care Number: <strong>+91 98327 37283</strong> | Customer Care Email: <strong>contactus@ecomart.com</strong></p>
          <p>Timings: <strong>9:30 am to 6:30 pm – (Mon-Sun)</strong></p>
          <p>Media Enquiries: <strong>ecomart@gmail.com</strong></p>
        </div>
      </div>
      <div className="contact-image">
        <img src={require('../assets/img/hdImage.jpg')} alt="Contact Us" />
      </div>
    </div>
  );
};

export default Contactus;

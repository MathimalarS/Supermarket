import React from 'react';
import '../assets/css/PromotionalBanner.css';
import pharmacyImg from '../assets/img/medicine.jpg';
import petCareImg from '../assets/img/pet.jpg';
import babyCareImg from '../assets/img/baby.jpg';
import chocolate from '../assets/img/chocolate.jpg';

const PromotionalBanner = () => {
  return (
    <div className="promotional-banner-container">
      <div className="banner-row">
        <div className="banner-item">
          <div className="banner-image">
            <img src={pharmacyImg} alt="Pharmacy" />
            <div className="banner-content">
              <h3>Pharmacy at your doorstep!</h3>
              <p>Cough syrups, pain relief<br/> sprays & more</p>
              <button className="order-now-button">Order Now</button>
            </div>
          </div>
        </div>
        <div className="banner-item">
          <div className="banner-image">
            <img src={petCareImg} alt="Pet Care" />
            <div className="banner-content">
              <h3>Pet Care supplies in minutes</h3>
              <p>Food, treats, toys & more</p>
              <button className="order-now-button">Order Now</button>
            </div>
          </div>
        </div>
        <div className="banner-item">
          <div className="banner-image">
            <img src={babyCareImg} alt="Baby Care" />
            <div className="banner-content">
              <h3>No time for a diaper run?</h3>
              <p>Get baby care essentials in minutes</p>
              <button className="order-now-button">Order Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-item-landscape">
        <div className="banner-image">
          <img src={chocolate} alt="chocolate" />
          <div className="banner-content-landscape">
            <h3 className='choco'>Craving for Chocolates?</h3>
            <p className='chocol'>Get delicious chocolates delivered in minutes</p>
            <button className="order-now-button">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;

import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Payment.css'; // Import CSS file for styling
import logo from '../assets/img/Eco.jpg'; // Make sure to replace with the actual logo path
import visa from '../assets/img/visa.png'; // Replace with the actual path
import mastercard from '../assets/img/mastercard.png'; // Replace with the actual path
import amex from '../assets/img/amex.png'; // Replace with the actual path

const Payment = () => {
  return (
    <div className="payment-page">
      <header className="payment-header">
        <img src={logo} alt="Eco Mart Logo" className="logo" />
      </header>
      <div className="payment-container">
        <div className="card-logos">
          <img src={visa} alt="Visa" />
          <img src={mastercard} alt="MasterCard" />
          <img src={amex} alt="American Express" />
        </div>
        <div className="payment-details">
          <h2>Payment Details</h2>
          {/* Add your payment details form here */}
          <form>
            <label htmlFor="card-holder">Card Holder Name</label>
            <input type="text" id="card-holder" placeholder="Enter name" />
            
            <label htmlFor="card-number">Card Number</label>
            <input type="text" id="card-number" placeholder="Enter card number" />

            <label htmlFor="expiry-date">Expiry Date</label>
            <input type="text" id="expiry-date" placeholder="MM/YY" />

            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" placeholder="Enter CVV" />


            <button type="submit">Pay Now</button>
          </form>
        </div>
      </div>
      <footer className="payment-footer">
        <Link to="/">Back to Home</Link>
      </footer>
    </div>
  );
};

export default Payment;

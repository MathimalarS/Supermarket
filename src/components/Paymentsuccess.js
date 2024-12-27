import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Paymentsuccess.css'; // Import CSS file for styling
import successImage from '../assets/img/success.gif'; // Add a success image in your project

const PaymentSuccess = () => {
  return (
    <div className="payment-success-container">
      <div className="success-message">
        <img src={successImage} alt="Payment Success" className="success-image" />
        <h1>Payment Successful!</h1>
        <p>Thank you for your purchase. Your order has been placed successfully.</p>
        <Link to= "/feedback">Share your shopping experience!</Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;

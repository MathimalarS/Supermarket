import React from 'react';
import '../assets/css/Contactus.css';


function Contactus() {
  return (
    <div className='cu'>
    <div className="contact-us">
      <h2>We would love to hear from you!</h2>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="assistance">How can we help you?</label>
            <select id="assistance" name="assistance" required>
              <option value="" disabled selected>How can we help you?</option>
              <option value="order_assistance">I need assistance with my order</option>
              <option value="refund_payment">I need assistance with refund/payment/overcharge/promo code</option>
              <option value="account_assistance">I need assistance with my account</option>
              <option value="order_issue">I am unable to place an order</option>
              <option value="partnership">I am interested in partnering with Eco Mart</option>
              <option value="feedback">I have feedback and suggestions</option>
              <option value="invoice_assistance">I need assistance with invoice</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required className='em'/>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Enter the details</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          {/* <h3>Address</h3> */}
          <p>145,Race Course Road,Coimbatore.</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          {/* <h3>Phone</h3> */}
          <p>+91 98327 37283</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          {/* <h3>Email</h3> */}
          <p>contact@ecomart.com</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-clock"></i>
          {/* <h3>Working Hours</h3> */}
          <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          <p>Sat - Sun: 10:00 AM - 4:00 PM</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contactus;

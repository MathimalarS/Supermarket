import React from 'react';
import '../assets/css/Summary.css';

const Summary = () => {
    return (
        <div className="summary">
            <div className="summary-item">
                <div className="summary-title">Total Orders</div>
                <div className="summary-value">72</div>
            </div>
            <div className="summary-item">
                <div className="summary-title">Total Customers</div>
                <div className="summary-value">113</div>
            </div>
            <div className="summary-item">
                <div className="summary-title">Total Branches</div>
                <div className="summary-value">1</div>
            </div>
            <div className="summary-item">
                <div className="summary-title">Total Turnover</div>
                <div className="summary-value">₹5,59,423</div>
            </div>
        </div>
    );
};

export default Summary;

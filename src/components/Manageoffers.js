import React, { useState } from 'react';
import '../assets/css/Manageoffers.css';

const Manageoffers = () => {
  const [offers, setOffers] = useState([
    { id: 1, title: 'Discount on Fruits', description: 'Get 10% off on all fruits' },
    { id: 2, title: 'Vegetables Sale', description: 'Buy 1 get 1 free on selected vegetables' },
  ]);

  const handleDelete = (id) => {
    setOffers(offers.filter(offer => offer.id !== id));
  };

  return (
    <div className="manage-offers">
      <h1>Manage Offers</h1>
      <ul>
        {offers.map(offer => (
          <li key={offer.id}>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <button onClick={() => handleDelete(offer.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {/* Add form to add new offers */}
    </div>
  );
};

export default Manageoffers;

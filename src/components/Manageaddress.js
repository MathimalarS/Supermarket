import React, { useState } from 'react';
import '../assets/css/Manageaddress.css';

const Manageaddress = () => {
  const [addresses, setAddresses] = useState([
    { id: 1, address: '123 Main St, City, Country' },
    { id: 2, address: '456 Elm St, City, Country' },
  ]);

  const handleDelete = (id) => {
    setAddresses(addresses.filter(address => address.id !== id));
  };

  return (
    <div className="manage-address">
      <h1>Manage Address</h1>
      <ul>
        {addresses.map(address => (
          <li key={address.id}>
            {address.address}
            <button onClick={() => handleDelete(address.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {/* Add form to add new addresses */}
    </div>
  );
};

export default Manageaddress;

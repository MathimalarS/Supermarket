import React, { useState } from 'react';
import '../assets/css/Managevendors.css';

const Managevendors = () => {
  const [vendors, setVendors] = useState([
    { id: 1, name: 'Vendor A' },
    { id: 2, name: 'Vendor B' },
  ]);

  const handleDelete = (id) => {
    setVendors(vendors.filter(vendor => vendor.id !== id));
  };

  return (
    <div className="manage-vendors">
      <h1>Manage Vendors</h1>
      <ul>
        {vendors.map(vendor => (
          <li key={vendor.id}>
            {vendor.name}
            <button onClick={() => handleDelete(vendor.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {/* Add form to add new vendors */}
    </div>
  );
};

export default Managevendors;

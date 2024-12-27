import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/Manageaddress.css'; // Make sure your CSS file is correctly imported
import { Link } from 'react-router-dom';

const ManageAddress = () => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/orders');
        setAddresses(response.data);
      } catch (error) {
        console.error('Error fetching addresses', error);
      }
    };

    fetchAddresses();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/orders/${id}`);
      if (response.status === 204) {
        setAddresses(prevAddresses => prevAddresses.filter(address => address.id !== id));
      } else {
        console.error('Unexpected response status:', response.status);
        alert('Failed to delete address. Unexpected response status.');
      }
    } catch (error) {
      console.error('Error deleting address:', error.response ? error.response.data : error.message);
      alert('Failed to delete address. Please try again.');
    }
  };

  return (
    <div className="manage-address">
      <Link to="/admin" className="bl">Back</Link>
      <h1>Manage Orders</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map(address => (
            <tr key={address.id}>
              <td>{address.id}</td>
              <td>{address.name}</td>
              <td>{address.email}</td>
              <td>{address.address}</td>
              <td>{address.mobile}</td>
              <td>
                <button onClick={() => handleDelete(address.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAddress;

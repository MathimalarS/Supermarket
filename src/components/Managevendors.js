import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import useHistory for navigation
import '../assets/css/Managevendors.css';

const ManageVendors = () => {
  const [vendors, setVendors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/userauth');
        const vendorsData = response.data;

        const updatedVendors = vendorsData.map(vendor => ({
          ...vendor,
          active: vendor.active ? 'Active' : 'Inactive'
        }));

        setVendors(updatedVendors);
      } catch (error) {
        console.error('Error fetching vendors', error);
      }
    };

    fetchVendors();
  }, []);

  const handleDelete = async (id) => {
    try {
      // Delete from the UserAuth table
      await axios.delete(`http://localhost:8080/api/userauth/${id}`);

      // Update the vendors state to remove the deleted user
      setVendors(vendors.filter(vendor => vendor.id !== id));
    } catch (error) {
      console.error('Error deleting vendor', error);
    }
  };

  const filteredVendors = vendors.filter(vendor =>
    vendor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="manage-vendors">
      <Link to="/admin" className="back-link">Back</Link>
      <h1>Manage Users</h1>
      <input
        type="text"
        placeholder="Search by email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Active</th>
            <th>Delete User</th>
          </tr>
        </thead>
        <tbody>
          {filteredVendors.map(vendor => (
            <tr key={vendor.id}>
              <td>{vendor.id}</td>
              <td>{vendor.email}</td>
              <td>{vendor.active}</td>
              <td>
                <button onClick={() => handleDelete(vendor.id) }className="vendor-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageVendors;

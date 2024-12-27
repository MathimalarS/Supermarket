import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/ManageFeeback.css'; // Ensure the CSS file is correctly imported
import { Link } from 'react-router-dom';

const ManageFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/feedbacks');
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks', error);
        alert('Failed to fetch feedbacks. Please try again.');
      }
    };

    fetchFeedbacks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/feedbacks/${id}`);
      setFeedbacks(prevFeedbacks => prevFeedbacks.filter(feedback => feedback.id !== id));
    } catch (error) {
      console.error('Error deleting feedback:', error.response ? error.response.data : error.message);
      alert('Failed to delete feedback. Please try again.');
    }
  };

  return (
    <div className="manage-feedback">
      <Link to="/admin" className="bal" >Back</Link>
      <h1>Manage Feedbacks</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Rating</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map(feedback => (
            <tr key={feedback.id}>
              <td>{feedback.id}</td>
              <td>{feedback.name}</td>
              <td>{feedback.email}</td>
              <td>{feedback.rating}</td>
              <td>{feedback.comments}</td>
              <td>
                <button onClick={() => handleDelete(feedback.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageFeedback;

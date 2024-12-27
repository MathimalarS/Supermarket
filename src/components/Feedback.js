import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/Feedback.css';

const Feedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rating, setRating] = useState(0);
    const [comments, setComments] = useState('');
    const [userId, setUserId] = useState(0); // Example user ID, replace with actual ID

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userId = 0; // Fetch the correct user ID from context or authentication state
            const response = await axios.post('http://127.0.0.1:8080/api/feedbacks', {
                name: name,
                email: email,
                rating: rating,
                comments: comments,
                user: {
                    id: userId
                }   
            });
    
            console.log('Response:', response); // Log the response for debugging
    
            if (response.status === 201) {
                setSuccessMessage('Feedback submitted successfully!');
                setName('');
                setEmail('');
                setRating(0);
                setComments('');
            } else {
                setErrorMessage('Unexpected status code: ' + response.status);
            }
        } catch (error) {
            console.error('Error:', error); // Log the error for debugging
            if (error.response && error.response.data) {
                setErrorMessage('Server error: ' + error.response.data.message || error.response.data);
            } else {
                setErrorMessage('Something went wrong while submitting the feedback.');
            }
        }
    };
    
    return (
        <div className='bo'>
            <div className="feedback-container">
                <h1>Feedback</h1>
                {successMessage && <div className="success">{successMessage}</div>}
                {errorMessage && <div className="error">{errorMessage}</div>}
                <form onSubmit={handleSubmit} className="feedback-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rating">Rating:</label>
                        <div className="star-rating">
                            {[...Array(5)].map((star, index) => {
                                const ratingValue = index + 1;
                                return (
                                    <label key={index}>
                                        <input
                                            type="radio"
                                            name="rating"
                                            value={ratingValue}
                                            onClick={() => setRating(ratingValue)}
                                        />
                                        <svg
                                            className="star"
                                            width="25"
                                            height="25"
                                            viewBox="0 0 24 24"
                                            fill={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M12 2l2.917 8.829L22 9.75l-6.585 4.771L17.833 22 12 17.904 6.167 22l2.418-7.479L2 9.75l7.083-.921L12 2z"/>
                                        </svg>
                                    </label>
                                );
                            })}
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comments">Comments:</label>
                        <textarea
                            id="comments"
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Submit Feedback</button>
                </form>
            </div>
        </div>
    );
};

export default Feedback;

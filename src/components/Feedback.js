import React, { useState } from 'react';
import '../assets/css/Feedback.css';

const Feedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rating, setRating] = useState(0);
    const [comments, setComments] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle feedback submission, e.g., send to an API
        console.log({ name, email, rating, comments });
        alert('Feedback submitted successfully!');
        // Reset form fields
        setName('');
        setEmail('');
        setRating(0);
        setComments('');
    };

    return (
        <div className="feedback-container">
            <h1>Feedback</h1>
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
    );
};

export default Feedback;

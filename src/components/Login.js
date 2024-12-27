import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure axios is imported if you're using it
import '../assets/css/Login.css';

const Login = ({ onClose, onSignupClick, onLoginSuccess }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let emailError = "";
        let passwordError = "";
        if (!formData.email.includes("@")) emailError = "Invalid email address";
        if (formData.password.length < 6) passwordError = "Password must be at least 6 characters";
        if (emailError || passwordError) {
            setErrors({ email: emailError, password: passwordError });
            return false;
        }
        return true;
    };

    const handleForgotPassword = () => {
        alert('An email has been sent to your registered email ID.');
    };

    const handleSignupClick = () => {
        onSignupClick();
        onClose();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = validate();
        if (isValid) {
            try {
                const response = await axios.post(
                    "http://localhost:8080/api/auth/authenticate",
                    {
                        email: formData.email,
                        password: formData.password,
                    }
                );
    
                // Assuming your backend returns a userId and a token
                const { userId, token, role } = response.data;
    
                localStorage.setItem("token", token);
                localStorage.setItem("role", role);
    
                // Store the login state in localStorage
                localStorage.setItem("isLoggedIn", role !== "ROLE_ADMIN");
    
                onLoginSuccess(role !== "ROLE_ADMIN");
    
                // Store UserAuth data after successful login
                await axios.post("http://localhost:8080/api/userauth/login", {
                    email: formData.email,
                    userId: userId, // Assuming response contains userId
                });
    
                if (role === "ROLE_ADMIN") {
                    navigate("/admin");
                } else {
                    alert("Login successful");
                    navigate('/');
                    window.location.reload();
                }
    
            } catch (error) {
                console.error('Login failed:', error);
                if (error.response) {
                    console.error('Error Response:', error.response.data);
                    if (error.response.status === 403) {
                        setErrors({ email: "Access forbidden: Incorrect credentials or insufficient permissions." });
                    } else {
                        setErrors({ email: "Login failed. Please check your credentials and try again." });
                    }
                } else {
                    setErrors({ email: "An unexpected error occurred. Please try again later." });
                }
            }
        }
    };
    return (
        <div className="login-container" onClick={onClose}>
            <div className="login-popup" onClick={(e) => e.stopPropagation()}>
                <button className="custom-close-button" onClick={onClose}>×</button>
                <h1>Login</h1>
                <div className="detail">
                    <form onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <div className="error-message">{errors.email}</div>}
                        {errors.password && <div className="error-message">{errors.password}</div>}
                        <p className='divq'>
                            <div className='fp' onClick={handleForgotPassword}>
                                Forgot Password?
                            </div>
                        </p>
                        <button type="submit" className="submit-button">Login</button>
                        <p className="signup-message">
                            Don't have an account? <span onClick={handleSignupClick} className="signup-link">Sign up</span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

import React, { useState } from 'react';
import '../assets/css/Signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = ({ onClose, onLoginclick, onUserCreated }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isFormVisible, setFormVisible] = useState(true);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let usernameError = "";
    let emailError = "";
    let passwordError = "";

    if (!formData.username) {
      usernameError = "Username is required";
    }

    if (!formData.email.includes("@")) {
      emailError = "Invalid email address";
    }

    if (formData.password.length < 8) {
      passwordError = "Password must be at least 8 characters";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formData.password)) {
      passwordError = "Password must contain at least one uppercase letter, one lowercase letter, and one number.";
    }

    if (usernameError || emailError || passwordError) {
      setErrors({ username: usernameError, email: emailError, password: passwordError });
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      try {
        const response = await axios.post("http://127.0.0.1:8080/users", {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          roles: "USER",
        });

        if (response.status === 201) {
          setSuccessMessage("User created successfully");

          // Notify Managevendors to update the list
          if (onUserCreated) {
            onUserCreated();
          }

          setTimeout(() => {
            navigate('/login'); // Redirect to login page after successful signup
          }, 2000);
        } else {
          setErrorMessage("Unexpected status code: " + response.status);
        }
      } catch (error) {
        if (error.response && error.response.data) {
          setErrorMessage("Server error: " + error.response.data.message || error.response.data);
        } else {
          setErrorMessage("Something went wrong while creating the user.");
        }
      }
    }
  };

  return (
    <div className="signup-container" onClick={onClose}>
      <div className={`signup-popup ${isFormVisible ? '' : 'hidden'}`} onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={() => setFormVisible(false)}>×</button>
        <h1>Sign Up</h1>
        {successMessage && <div className="success">{successMessage}</div>}
        {errorMessage && <div className="error">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <button type="submit" className="submit-button">Sign Up</button>
          <p className="login-message">
            Already have an account? <span onClick={onLoginclick} className="login-link">Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

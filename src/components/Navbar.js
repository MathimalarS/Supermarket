import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Navbar.css';
import logo from '../assets/img/Eco.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from './Login';
import Signup from './Signup';
import CitySearchPopup from './CitySearchPopup';
import Cart from './Cart';
import UserPopup from './UserPopup'; // Import the UserPopup component

const Navbar = ({ cart, setCart, isLoggedIn, setIsLoggedIn }) => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [showCitySearchPopup, setShowCitySearchPopup] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false); // State for user popup
  const [searchPlaceholder, setSearchPlaceholder] = useState("Search \"chips\"");
  const [transitionClass, setTransitionClass] = useState('');

  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowLoginPopup(true);
    setShowSignupPopup(false);
  };

  const handleSignupClick = () => {
    setShowSignupPopup(true);
    setShowLoginPopup(false);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  const closeSignupPopup = () => {
    setShowSignupPopup(false);
  };

  const handleLoginSuccess = () => {
    setShowLoginPopup(false);
    setIsLoggedIn(true);
    navigate('/');
  };

  const handleCartClick = () => {
    setShowCartPopup(true);
  };

  const closeCartPopup = () => {
    setShowCartPopup(false);
  };

  const getTotalItems = () => {
    if (!Array.isArray(cart)) {
      return 0;
    }
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCitySearchClick = () => {
    setShowCitySearchPopup(true);
  };

  const closeCitySearchPopup = () => {
    setShowCitySearchPopup(false);
  };

  const handleUserIconClick = () => {
    setShowUserPopup(!showUserPopup);
  };

  const closeUserPopup = () => {
    setShowUserPopup(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  useEffect(() => {
    const placeholders = ["Search \"chips\"", "Search \"fruits\"", "Search \"vegetables\"", "Search \"milk\""];
    let index = 0;
    const interval = setInterval(() => {
      setTransitionClass('fade-out');
      setTimeout(() => {
        index = (index + 1) % placeholders.length;
        setSearchPlaceholder(placeholders[index]);
        setTransitionClass('fade-in');
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="navbar-logo">
            <Link to="/">
              <img src={logo} alt="Supermarket Logo" className="logo" />
            </Link>
          </div>
          <div className="title">
            <h1 className="eco">Eco <span className="mart">Mart</span></h1>
          </div>
        </div>
        <div className="navbar-center">
          <div className="delivery-text" onClick={handleCitySearchClick}>
            Your Location <span className="down-arrow">▼</span>
          </div>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="" />
          <span className={`search-placeholder ${transitionClass}`}>
            {searchPlaceholder}
          </span>
        </div>
        <div className="navbar-right">
          {isLoggedIn ? (
            <div className="user-icon" onClick={handleUserIconClick}>
              <i className="fas fa-user"></i>
            </div>
          ) : (
            <button className="login-button" onClick={handleLoginClick}>Login</button>
          )}
          <div className="cart-icon" onClick={handleCartClick}>
            <i className="fas fa-shopping-cart"></i>
            {getTotalItems() > 0 && <span className="cart-count">{getTotalItems()}</span>}
          </div>
        </div>
      </nav>
      {showLoginPopup && (
        <Login
          onClose={closeLoginPopup}
          onSignupClick={handleSignupClick}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
      {showSignupPopup && <Signup onClose={closeSignupPopup} />}
      {showCitySearchPopup && <CitySearchPopup onClose={closeCitySearchPopup} />}
      {showCartPopup && (
        <div className="cart-popup">
          <button className="close-button" onClick={closeCartPopup}>×</button>
          <Cart cart={cart} setCart={setCart} isLoggedIn={isLoggedIn} />
        </div>
      )}
      {showUserPopup && (
        <UserPopup onClose={closeUserPopup} onLogout={handleLogout} />
      )}
    </>
  );
};

export default Navbar;

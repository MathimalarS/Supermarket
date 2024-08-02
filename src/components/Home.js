import React, { useState } from 'react';
import Navbar from './Navbar';
import Offer from './Offer';
import '../assets/css/Home.css';
import Footer from './Footer';
import PromotionalBanner from './PromotionalBanner';
import Category from './Category';
import Admin from './Admin';

function Home() {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [cart, setCart] = useState([]);

    const handleLoginOpen = () => {
        setShowLogin(true);
        setShowSignup(false);
    };

    const handleSignupOpen = () => {
        setShowSignup(true);
        setShowLogin(false);
    };

    const handleLoginClose = () => {
        setShowLogin(false);
    };

    const handleSignupClose = () => {
        setShowSignup(false);
    };

    const handleLoginSuccess = () => {
        setShowLogin(false);
        setShowSignup(false);
    };

    const updateCartItem = (updatedCart) => {
        setCart(updatedCart);
    };
    

    return (
        <div>
            {/* <Navbar cart={cart} setCart={setCart} /> */}
            <div className="home-container">
                <div className="landing-page">
                    <img src={require('../assets/img/home.jpg')} alt="Landing" className="landing-image" />
                </div>
                <PromotionalBanner />
                <Offer />
                <Category />
                
            </div>
                <Footer />
        </div>
    );
}

export default Home;

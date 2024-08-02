import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Sidebar.css';
import home from '../assets/img/Eco.jpg';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img
                    src={home}
                    alt="Home"
                    className="home-icon"
                    onClick={() => navigate('/')}
                />
            </div>
            <ul className="sidebar-menu">
                <li><a href="/admin" onClick={() => navigate('/dashboard')}>Dashboard</a></li>
                <li><a href="/manageaddress" onClick={() => navigate('/manage-address')}>Manage Address</a></li>
                <li><a href="/managecategories" onClick={() => navigate('/manage-categories')}>Manage Categories</a></li>
                <li><a href="/managevendors" onClick={() => navigate('/manage-vendors')}>Manage Vendors</a></li>
                <li><a href="/manageoffers" onClick={() => navigate('/manage-offers')}>Manage Offers</a></li>
            </ul>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Sidebar;

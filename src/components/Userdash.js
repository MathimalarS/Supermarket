import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/Userdash.css';

const UserDash = () => {
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState('/path/to/default/profile/picture.jpg');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [editing, setEditing] = useState(false);
  const [newProfilePicture, setNewProfilePicture] = useState(null);
  const [activeSection, setActiveSection] = useState('profile');
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  useEffect(() => {
    // Fetch user details when component mounts
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user/details'); // Adjust the endpoint as needed
        const { profilePicture, username, email, address, pincode } = response.data;
        setProfilePicture(profilePicture || '/path/to/default/profile/picture.jpg');
        setUsername(username);
        setEmail(email);
        setAddress(address);
        setPincode(pincode);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleBack = () => {
    navigate('/'); // Redirect to the homepage when the back button is clicked
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewProfilePicture(URL.createObjectURL(file));
    }
  };

  const saveProfilePicture = () => {
    if (newProfilePicture) {
      setProfilePicture(newProfilePicture);
      setNewProfilePicture(null);
    }
  };

  const handleSaveClick = async () => {
    try {
      await axios.put('/api/user/update', {
        username,
        email,
        address,
        pincode,
        profilePicture,
      });
      setEditing(false); // Exit editing mode
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleLogout = () => {
    // Clear user data from state or local storage
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <img src={profilePicture} alt="Profile" className="sidebar-profile-picture" />
        <h2>{username}</h2>
        <ul>
          <li><a href="#profile" onClick={() => handleSectionChange('profile')}>Profile</a></li>
          <li><a href="#orders" onClick={() => handleSectionChange('orders')}>Orders</a></li>
          <li><a href="#cart" onClick={() => handleSectionChange('cart')}>Cart</a></li>
          <li><a href="#settings" onClick={() => handleSectionChange('settings')}>Settings</a></li>
          <li><button className="back-button" onClick={handleBack}>Back</button></li>
          <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
        </ul>
      </aside>
      <main className="content">
        {activeSection === 'profile' && (
          <section id="profile" className="profile">
            <h2>Profile</h2>
            {editing ? (
              <div className="profile-form">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                />
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Pincode"
                />
                <input
                  type="file"
                  onChange={handleProfilePictureChange}
                  accept="image/*"
                />
                <button className="edit-picture" onClick={saveProfilePicture}>
                  Save Picture
                </button>
                <button className="edit-profile" onClick={handleSaveClick}>
                  Save Profile
                </button>
              </div>
            ) : (
              <div>
                <p><strong>Username:</strong> {username}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Address:</strong> {address}</p>
                <p><strong>Pincode:</strong> {pincode}</p>
                <button className="edit-profile" onClick={handleEditClick}>
                  Edit Profile
                </button>
              </div>
            )}
          </section>
        )}
        {activeSection === 'orders' && (
          <section id="orders" className="orders">
            <h2>Orders</h2>
            <ul>
              {orders.map(order => (
                <li key={order.id}>{order.quantity} x {order.name} - ₹{order.price}</li>
              ))}
            </ul>
          </section>
        )}
        {activeSection === 'cart' && (
          <section id="cart" className="cart">
            <h2>Cart</h2>
            <ul>
              {cart.map(item => (
                <li key={item.id}>{item.quantity} x {item.name} - ₹{item.price}</li>
              ))}
            </ul>
          </section>
        )}
        {activeSection === 'settings' && (
          <section id="settings" className="settings">
            <h2>Settings</h2>
            <label>
              <input type="checkbox" checked={notificationsEnabled} onChange={toggleNotifications} />
              Enable Notifications
            </label>
          </section>
        )}
      </main>
    </div>
  );
};

export default UserDash;

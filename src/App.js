import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Fruitsveg from './components/Fruitsveg';
import Aboutus from './components/About';
import Contactus from './components/Contactus';
import FAQ from './components/FAQ';
import Offer from './components/Offer';
import Payment from './components/Payment';
import Admin from './components/Admin';
import Feedback from './components/Feedback';
import Manageaddress from './components/Manageaddress';
import Managecategories from './components/Managecategories';
import Managevendors from './components/Managevendors';
import Manageoffers from './components/Manageoffers';

function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {location.pathname !== '/admin' && (
        <Navbar cart={cart} setCart={setCart} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/fruitveg" element={<Fruitsveg cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} isLoggedIn={isLoggedIn} />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/manageaddress" element={<Manageaddress />} />
        <Route path="/managecategories" element={<Managecategories />} />
        <Route path="/managevendors" element={<Managevendors />} />
        <Route path="/manageoffers" element={<Manageoffers />} />
      </Routes>
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;

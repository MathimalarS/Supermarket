import React from 'react';
import '../assets/css/Cart.css';
import cartempty from '../assets/img/cartempty.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, setCart, isLoggedIn }) => {
  const navigate = useNavigate();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
    } else {
      const updatedCart = cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      setCart(updatedCart);
      toast.success('Item quantity updated');
    }
  };

  const handleRemoveItem = (productId) => {
    const removedItem = cart.find((item) => item.id === productId);
    if (removedItem) {
      toast.info(`${removedItem.name} removed from cart`);
    }
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const handleCheckoutRedirect = () => {
    navigate('/checkout');
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.quantity * parseFloat(item.price.replace('₹', '')), 0);
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <img src={cartempty} alt="Empty Cart" className="empty-cart-image" />
          <p><b>Your cart is empty</b></p>
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">{item.price} / {item.unit}</p>
                <div className="cart-item-quantity-controls">
                  <button onClick={() => handleQuantityChange(item.id, Math.max(0, item.quantity - 1))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className="remove-item-button" onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total Price: ₹{calculateTotalPrice().toFixed(2)}</h3>
            {isLoggedIn ? (
              <button className="checkout-button" onClick={handleCheckoutRedirect}>
                Proceed to Checkout
              </button>
            ) : (
              <button className="checkout-button" onClick={handleLoginRedirect}>
                Login to Proceed
              </button>
            )}
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Cart;

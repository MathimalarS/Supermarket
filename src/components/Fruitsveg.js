import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/Fruitsveg.css';
import Apple from '../assets/img/Apple.jpg';
import Banana from '../assets/img/Banana.jpg';
import Orange from '../assets/img/orange.jpg';
import Grapes from '../assets/img/grapes.jpg';
import Watermelon from '../assets/img/watermelon.jpg';
import Pineapple from '../assets/img/pineapple.jpg';
import Mango from '../assets/img/mango.jpg';
import Blueberry from '../assets/img/blueberry.jpg';
import Peach from '../assets/img/peach.jpg';
import Carrot from '../assets/img/carrot.jpg';
import Broccoli from '../assets/img/brocoli.jpg';
import Tomato from '../assets/img/tomato.jpg';
import Spinach from '../assets/img/spinach.jpg';
import Potato from '../assets/img/potato.jpg';
import Onion from '../assets/img/onion.jpg';
import Strawberry from '../assets/img/strawberry.jpg';

const products = [
  { id: 1, name: 'Apple', price: '₹150', unit: 'kg', image: Apple, description: 'Fresh and juicy apples.' },
  { id: 2, name: 'Banana', price: '₹50', unit: 'kg', image: Banana, description: 'Sweet and ripe bananas.' },
  { id: 3, name: 'Orange', price: '₹160', unit: 'kg', image: Orange, description: 'Citrusy and tangy oranges.' },
  { id: 4, name: 'Strawberry', price: '₹300', unit: 'kg', image: Strawberry, description: 'Fresh and sweet strawberries.' },
  { id: 5, name: 'Grapes', price: '₹320', unit: 'kg', image: Grapes, description: 'Juicy and sweet grapes.' },
  { id: 6, name: 'Watermelon', price: '₹200', unit: 'kg', image: Watermelon, description: 'Refreshing and sweet watermelon.' },
  { id: 7, name: 'Pineapple', price: '₹180', unit: 'kg', image: Pineapple, description: 'Tropical and juicy pineapple.' },
  { id: 8, name: 'Mango', price: '₹250', unit: 'kg', image: Mango, description: 'Sweet and ripe mangoes.' },
  { id: 9, name: 'Blueberry', price: '₹400', unit: 'kg', image: Blueberry, description: 'Fresh and tangy blueberries.' },
  { id: 10, name: 'Peach', price: '₹350', unit: 'kg', image: Peach, description: 'Juicy and sweet peaches.' },
  { id: 11, name: 'Carrot', price: '₹95', unit: 'kg', image: Carrot, description: 'Fresh and crunchy carrots.' },
  { id: 12, name: 'Broccoli', price: '₹130', unit: 'kg', image: Broccoli, description: 'Fresh and healthy broccoli.' },
  { id: 13, name: 'Tomato', price: '₹270', unit: 'kg', image: Tomato, description: 'Juicy and ripe tomatoes.' },
  { id: 14, name: 'Spinach', price: '₹100', unit: 'kg', image: Spinach, description: 'Fresh and healthy spinach.' },
  { id: 15, name: 'Potato', price: '₹200', unit: 'kg', image: Potato, description: 'Fresh and starchy potatoes.' },
  { id: 16, name: 'Onion', price: '₹140', unit: 'kg', image: Onion, description: 'Fresh and pungent onions.' },
];

const Fruitsveg = ({ cart, setCart }) => {
  const [quantities, setQuantities] = useState(Array(products.length).fill(0));
  const navigate = useNavigate();

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(0, value); // Ensure quantity is non-negative
    setQuantities(newQuantities);
  };

  const addToCart = (product, quantity) => {
    if (quantity > 0) {
      const updatedCart = [...cart];
      const existingProductIndex = updatedCart.findIndex((item) => item.id === product.id);

      if (existingProductIndex >= 0) {
        updatedCart[existingProductIndex].quantity += quantity;
      } else {
        updatedCart.push({ ...product, quantity });
      }

      setCart(updatedCart);
      toast.success(`${product.name} added to cart!`);
    }
  };

  return (
    <div className="fruits-veg-page">
      <ToastContainer />
      <h1 className="page-title">Fruits and Vegetables</h1>
      <div className="products-container">
        {products.map((product, index) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-price">{product.price} / {product.unit}</div>
            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(index, quantities[index] - 1)}>-</button>
              <input
                type="number"
                value={quantities[index]}
                onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                min="0"
              />
              <button onClick={() => handleQuantityChange(index, quantities[index] + 1)}>+</button>
            </div>
            <button className="add-to-cart-button" onClick={() => addToCart(product, quantities[index])}>
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fruitsveg;

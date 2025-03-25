import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import '../assets/css/Products.css';
import appleImage from '../assets/img/Apple.jpg'; 
import bananaImage from '../assets/img/Banana.jpg';
import carrotImage from '../assets/img/carrot.jpg';
import broccoliImage from '../assets/img/brocoli.jpg';
import chickenImage from '../assets/img/chicken.jpg';
import salmonImage from '../assets/img/fish.jpeg';
import almondMilkImage from '../assets/img/almondmilk.jpg';
import cheddarImage from '../assets/img/cheese.jpg';
import breadImage from '../assets/img/bread.jpeg';
import cakeImage from '../assets/img/cake.jpeg';

function Products({ cart, setCart }) {
    const [filter, setFilter] = useState('');
    const [quantities, setQuantities] = useState({});

    // Product data
    const productData = [
        { id: 1, name: 'Apple', category: 'Fruits', price: 150, image: appleImage },
        { id: 2, name: 'Banana', category: 'Fruits', price: 40, image: bananaImage },
        { id: 3, name: 'Carrot', category: 'Vegetables', price: 140, image: carrotImage },
        { id: 4, name: 'Broccoli', category: 'Vegetables', price: 100, image: broccoliImage },
        { id: 5, name: 'Chicken Breast', category: 'Meat', price: 350, image: chickenImage },
        { id: 6, name: 'Salmon Fillet', category: 'Seafood', price: 500, image: salmonImage },
        { id: 7, name: 'Almond Milk', category: 'Dairy', price: 70, image: almondMilkImage },
        { id: 8, name: 'Cheddar Cheese', category: 'Dairy', price: 180, image: cheddarImage },
        { id: 9, name: 'Whole Wheat Bread', category: 'Bakery', price: 40, image: breadImage },
        { id: 10, name: 'Chocolate Cake', category: 'Bakery', price: 550, image: cakeImage },
    ];

    // Handle quantity change
    const handleQuantityChange = (productId, amount) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productId]: Math.max(0, (prevQuantities[productId] || 0) + amount),
        }));
    };

    // Add to cart
    const addToCart = (product) => {
        if (!product || !product.id || !product.name || !product.price) {
            console.error('Invalid product attempted to be added to the cart:', product);
            return;
        }

        const quantity = quantities[product.id] || 1;
        const productInCart = cart.find((item) => item.id === product.id);

        if (productInCart) {
            // Update the quantity of the product in the cart
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                )
            );
        } else {
            // Add a new product to the cart
            setCart([...cart, { ...product, quantity }]);
        }

        // Show a toast notification
        toast.success(`${product.name} added to cart!`);
    };

    // Handle filter input change
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    // Filtered products based on category
    const filteredProducts = productData.filter((product) =>
        product.category.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <div className="products-page">
                {/* Filter Input */}
                <div className="filter-container">
                    <input
                        type="text"
                        placeholder="Filter by category..."
                        value={filter}
                        onChange={handleFilterChange}
                        className="filter-input"
                    />
                </div>
                {/* Products List */}
                <div className="products-container">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h2 className="product-name">{product.name}</h2>
                            <p className="product-price">₹{product.price.toFixed(2)}</p>
                            <div className="quantity-controls">
                                <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                                <span>{quantities[product.id] || 1}</span>
                                <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                            </div>
                            <button onClick={() => addToCart(product)} className="add-to-cart-button">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <ToastContainer autoClose={3000} />
        </div>
    );
}

export default Products;

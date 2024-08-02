import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Category.css';
import dairy from '../assets/img/dairy.avif';
import fruits from '../assets/img/fruits.jpeg';
import juice from '../assets/img/juice.jpeg';
import snacks from '../assets/img/snacks.jpeg';
import instantfood from '../assets/img/instantfood.png';
import sweet from '../assets/img/sweet.jpeg';
import biscuits from '../assets/img/biscuits.webp';
import tea from '../assets/img/tea.jpg';
import rice from '../assets/img/rice.jpeg';
import masala from '../assets/img/masalsa.avif';
import spread from '../assets/img/spread.jpeg';
import fish from '../assets/img/fish.jpeg';
import baby from '../assets/img/babycare.jpg';
import medicineph from '../assets/img/medicineph.jpeg';
import clean from '../assets/img/clean.jpeg';
import office from '../assets/img/office.jpeg';
import beauty from '../assets/img/beauty.webp';
import petcare from '../assets/img/petcare.jpeg';

const Category = () => {
  const categories = [
    { name: "Dairy, Bread & Eggs", image: dairy, path: "/"},
    { name: "Fruits & Vegetables", image: fruits, path:"/fruitveg" },
    { name: "Cold Drinks & Juices", image: juice, path: "/" },
    { name: "Snacks & Munchies", image: snacks, path: "/" },
    { name: "Breakfast & Instant Food", image: instantfood, path: "/" },
    { name: "Sweet Tooth", image:sweet, path: "/" },
    { name: "Bakery & Biscuits", image: biscuits, path: "/" },
    { name: "Tea, Coffee & Health Drink", image: tea, path: "/" },
    { name: "Atta, Rice & Dal", image: rice, path: "/" },
    { name: "Masala, Oil & More", image: masala, path: "/" },
    { name: "Sauces & Spreads", image:spread, path: "/" },
    { name: "Chicken, Meat & Fish", image: fish, path: "/" },
    { name: "Baby Care", image: baby, path: "/" },
    { name: "Pharma & Wellness", image: medicineph, path: "/" },
    { name: "Cleaning Essentials", image:clean, path: "/" },
    { name: "Home & Office", image:office, path: "/" },
    { name: "Personal Care", image:beauty, path: "/" },
    { name: "Pet Care", image:petcare, path: "/" }
  ];

  return (
    <div className="category-section">
      <div className="category-row">
        {categories.slice(0, 9).map((category, index) => (
          <div key={index} className="category-item">
            <Link to={category.path}>
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="category-row">
        {categories.slice(9).map((category, index) => (
          <div key={index} className="category-item">
            <Link to={category.path}>
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;

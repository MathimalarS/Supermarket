import React, { useState } from 'react';
import '../assets/css/Managecategories.css';

const Managecategories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Fruits' },
    { id: 2, name: 'Vegetables' },
  ]);

  const handleDelete = (id) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  return (
    <div className="manage-categories">
      <h1>Manage Categories</h1>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            {category.name}
            <button onClick={() => handleDelete(category.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {/* Add form to add new categories */}
    </div>
  );
};

export default Managecategories;

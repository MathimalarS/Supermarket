import React, { useState, useEffect } from 'react';
import Products from './Products';
 // Adjust the import according to your project structure

const Searchresult = ({ query }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the products from the "fruitsveg" source
    const fetchProducts = async () => {
      try {
        const response = await fetch('../components/Fruitsveg.js'); // Replace with your actual path
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on the search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-results">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <Products key={product.id} product={product} />
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default Searchresult;

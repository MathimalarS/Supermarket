import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../assets/css/ProductManage.css';

const ProductManage = () => {
  const [products, setProducts] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    productName: '', description: '', price: '', unit: '', image: ''
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const [editForm, setEditForm] = useState({
    productName: '', description: '', price: '', unit: '', image: ''
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
  }, []);

  const handleFileUpload = (e, callback) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result.split(',')[1]); // Get Base64 string without data URL prefix
    };
    reader.readAsDataURL(file);
  };

  const addProduct = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/products', {
        ...newProduct,
        price: parseFloat(newProduct.price)
      });
      setProducts([...products, response.data]);
      setNewProduct({
        productName: '', description: '', price: '', unit: '', image: ''
      });
      setShowAddModal(false);
    } catch (error) {
      console.error('Error adding product', error);
    }
  };

  const updateProduct = async () => {
    try {
      await axios.put(`http://localhost:8080/api/products/${editingProduct.productId}`, {
        ...editForm,
        price: parseFloat(editForm.price)
      });
      setProducts(products.map(product => (product.productId === editingProduct.productId ? { ...product, ...editForm } : product)));
      setEditingProduct(null);
      setEditForm({
        productName: '', description: '', price: '', unit: '', image: ''
      });
      setShowEditModal(false);
    } catch (error) {
      console.error('Error updating product', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:8080/api/products/${productId}`);
      setProducts(products.filter(product => product.productId !== productId));
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };

  return (
    <div className="turf-mana">
      <div className="turf-management">
        <div className="back-link-container">
          <Link to="/admin" className="back-blink">
            <i className="fas fa-arrow-left"></i> Back
          </Link>
        </div>
        <h1>Manage Products</h1>
        <button onClick={() => setShowAddModal(true)} className="book-action-button">Add Product</button>

        {/* Table View */}
        <table className="book-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Unit</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(products) && products.map(product => (
              <tr key={product.productId}>
                <td>{product.productId}</td>
                <td>{product.productName}</td>
                <td>{product.description}</td>
                <td>₹{product.price}</td>
                <td>{product.unit}</td>
                <td>
                  {product.image && <img src={`data:image/jpeg;base64,${product.image}`} alt={product.productName} className="book-image" />}
                </td>
                <td>
                  <button onClick={() => {
                    setEditingProduct(product);
                    setEditForm({
                      productName: product.productName,
                      description: product.description,
                      price: product.price,
                      unit: product.unit,
                      image: product.image
                    });
                    setShowEditModal(true);
                  }} className="book-edit-button">Edit</button>
                  <button onClick={() => deleteProduct(product.productId)} className="book-delete-button">
                    <i className="fas fa-trash-alt"></i> {/* FontAwesome trash icon */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add Product Modal */}
        {showAddModal && (
          <div className="book-modal-overlay" onClick={() => setShowAddModal(false)}>
            <div className="book-modal-content" onClick={e => e.stopPropagation()}>
              <h2>Add Product</h2>
              <div className="book-modal-grid">
                <input
                  type="text"
                  placeholder="Name"
                  value={newProduct.productName}
                  onChange={(e) => setNewProduct({ ...newProduct, productName: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Unit"
                  value={newProduct.unit}
                  onChange={(e) => setNewProduct({ ...newProduct, unit: e.target.value })}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, (base64) => setNewProduct({ ...newProduct, image: base64 }))}
                />
              </div>
              <button onClick={addProduct} className="book-action-button">Add Product</button>
            </div>
          </div>
        )}

        {/* Edit Product Modal */}
        {showEditModal && (
          <div className="book-modal-overlay" onClick={() => setShowEditModal(false)}>
            <div className="book-modal-content" onClick={e => e.stopPropagation()}>
              <h2>Edit Product</h2>
              <div className="book-modal-grid">
                <input
                  type="text"
                  placeholder="Name"
                  value={editForm.productName}
                  onChange={(e) => setEditForm({ ...editForm, productName: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={editForm.description}
                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="Price"
                  value={editForm.price}
                  onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Unit"
                  value={editForm.unit}
                  onChange={(e) => setEditForm({ ...editForm, unit: e.target.value })}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, (base64) => setEditForm({ ...editForm, image: base64 }))}
                />
              </div>
              <button onClick={updateProduct} className="book-action-button">Save Changes</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductManage;

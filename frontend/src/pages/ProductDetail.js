import React, { useState, useEffect } from 'react';
import '../index.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      {products.map(product => (
        <div key={product._id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;

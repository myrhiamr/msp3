import React from 'react';

const ProductCard = ({ product }) => {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item._id === product._id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  };

  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{product.author}</h6>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Price: ${product.price}</p>
        <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
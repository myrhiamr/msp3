import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage or state management solution
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item._id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2 className="mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item._id} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Price: ${item.price}</p>
                <p className="card-text">Quantity: {item.quantity}</p>
                <button className="btn btn-danger" onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <h4>Total: ${totalPrice.toFixed(2)}</h4>
            <button className="btn btn-primary">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/Header.css';

const Header = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="navbar">
      <h1 className="brand">Serene Home</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/cart" className="cart">
          🛒 <span>{cartItems.length}</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;

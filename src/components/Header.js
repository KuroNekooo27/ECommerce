import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

import '../styles/HomePage.css';


const Header = () => {
    
    const { cartItems } = useContext(CartContext);
    
    return(
    <div className='homepage'>
        <header className="navbar">
            <h1 className="brand">Serene Home</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href='/cart' className="cart">🛒 {cartItems.length}</a>
            </nav>
        </header>
    </div>
    )
}

export default Header;
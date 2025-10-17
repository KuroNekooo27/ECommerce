import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    console.log('Cart updated:', cartItems);
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(p => p.id === item.id && p.color === item.color);
      if (existing) {
        return prev.map(p =>
          p.id === item.id && p.color === item.color
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        );
      }
      return [...prev, item];
    });
  };

  const updateQuantity = (id, color, newQty) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.color === color
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const removeItem = (id, color) => {
    setCartItems(prev =>
      prev.filter(item => !(item.id === id && item.color === color))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart, // ✅ Now exposed to consumers
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

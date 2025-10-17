import React, { useState, useContext } from 'react';
import '../styles/ProductModal.css';
import { CartContext } from '../context/CartContext';

const ProductModal = ({ isOpen, onClose, product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(product.color || 'Gold');
  const { addToCart } = useContext(CartContext);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product.name}(s) to cart. \nColor ${color}`)
    addToCart({ ...product, quantity: parseInt(quantity), color });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} className="product-image" />
        <p className="product-description">{product.description || 'No description available.'}</p>
        {product.price && <p className="product-price">${product.price}</p>}

        <div className="product-options">
          <label>
            Color:
            <select value={color} onChange={(e) => setColor(e.target.value)}>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
              <option value="Black">Black</option>
            </select>
          </label>

          <label>
            Quantity:
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>
        </div>

        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductModal;

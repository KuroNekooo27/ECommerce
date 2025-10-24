import React, { useState } from "react";
import "../styles/ProductModal.css";

const ProductModal = ({ product, onClose, onAddToCart }) => {
  
  // Track selected quantity and color
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("Gold");
  if (!product) return null;

  const handleAddToCart = () => {
    const productWithDetails = {
      ...product,
      quantity: parseInt(quantity, 10),
      color,
    };

    onAddToCart(productWithDetails);
    alert(`${quantity} × ${product.name} (${color}) added to your cart!`);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        <div className="modal-body">
          <img
            src={product.image}
            alt={product.name}
            className="modal-product-image"
          />

          <div className="modal-details">
            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-description">{product.description}</p>
            <p className="modal-price">${product.price}</p>

            <div className="modal-options">
              <label>
                Color:
                <select
                  className="modal-select"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                >
                  <option value="Gold">Gold</option>
                  <option value="Gray">Gray</option>
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
                  className="modal-quantity"
                />
              </label>
            </div>

            <button className="modal-add-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

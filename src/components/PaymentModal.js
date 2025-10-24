import React, { useContext } from 'react';
import '../styles/PaymentModal.css';
import { CartContext } from '../context/CartContext';

const PaymentModal = ({ total, onClose }) => {
  const { clearCart } = useContext(CartContext);

  const handleCheckout = (e) => {
    e.preventDefault();
    clearCart();
    alert('Thank you for your purchase!');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="payment-modal">
        <button className="close-button" onClick={onClose}>✕</button>
        <h2>Checkout</h2>

        <form onSubmit={handleCheckout}>
          <label>Cardholder Name</label>
          <input type="text" placeholder="John Doe" required />

          <label>Card Number</label>
          <input type="text" placeholder="1234 5678 9012 3456" required />

          <div className="card-details">
            <div>
              <label>Expiry</label>
              <input type="text" placeholder="MM/YY" required />
            </div>
            <div>
              <label>CVV</label>
              <input type="text" placeholder="123" required />
            </div>
          </div>

          <div className="total-section">
            <span>Total:</span>
            <strong>${total.toFixed(2)}</strong>
          </div>

          <button type="submit" className="buy-button">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;

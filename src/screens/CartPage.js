import React, { useContext, useState } from 'react';
import '../styles/CartPage.css';
import Header from '../components/Header';
import { CartContext } from '../context/CartContext';
import PaymentModal from '../components/PaymentModal';

const CartPage = () => {
  const { cartItems, updateQuantity, removeItem } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <Header />
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={`${item.id}-${item.color}`} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Color: {item.color}</p>
                <p>Price: ${item.price}</p>
                <label>
                  Quantity:
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, item.color, parseInt(e.target.value))
                    }
                  />
                </label>
                <button onClick={() => removeItem(item.id, item.color)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-summary">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button
          onClick={() => {
            if (totalPrice > 0) {
              setShowModal(true);
            } else {
              alert('Cart is empty');
            }
          }}
          className="checkout-button"
        >
          Proceed to Checkout
        </button>
      </div>

      {showModal && (
        <PaymentModal total={totalPrice} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default CartPage;

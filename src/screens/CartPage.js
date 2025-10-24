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
      <div className="cart-container">
        <h2 className="cart-title">🛒 Your Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <img src="/empty-cart.svg" alt="Empty Cart" className="empty-image" />
            <h3>Your cart is empty!</h3>
            <p>Start shopping to add items to your cart.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={`${item.id}-${item.color}`} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="item-details">
                    <div className="item-header">
                      <h3>{item.name}</h3>
                      <button
                        className="remove-btn"
                        onClick={() => removeItem(item.id, item.color)}
                      >
                        ✕
                      </button>
                    </div>
                    <p className="item-color">Color: {item.color}</p>
                    <p className="item-price">${item.price.toFixed(2)}</p>

                    <div className="quantity-control">
                      <label>Qty:</label>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, item.color, parseInt(e.target.value))
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Subtotal:</h3>
              <h2>${totalPrice.toFixed(2)}</h2>
              <button
                onClick={() => {
                  if (totalPrice > 0) {
                    setShowModal(true);
                  } else {
                    alert('Your cart is empty.');
                  }
                }}
                className="checkout-button"
              >
                Proceed to Checkout →
              </button>
            </div>
          </>
        )}
      </div>

      {showModal && (
        <PaymentModal total={totalPrice} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default CartPage;

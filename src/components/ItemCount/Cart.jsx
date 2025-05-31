import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';
import Swal from 'sweetalert2';

const Cart = () => {
  const { cart, removeItem, clearCart, toggleCart } = useContext(CartContext);

  const handleClearCart = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Esto vaciará todo el carrito",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, vaciar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire('Carrito vaciado', '', 'success');
      }
    });
  };

  const handleCheckout = () => {
    Swal.fire('Compra finalizada', 'Gracias por tu compra', 'success');
    clearCart();
    toggleCart();
  };

  return (
    <div className="cart-modal">
      <h2>Tu Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div>
          {cart.map(product => (
            <div key={product.id} className="cart-item">
              <span>{product.name} - ${product.price} x {product.quantity}</span>
              <button onClick={() => removeItem(product.id)}>Eliminar</button>
            </div>
          ))}
          <div className="cart-actions">
            <button onClick={handleClearCart}>Vaciar carrito</button>
            <button onClick={handleCheckout}>Finalizar compra</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

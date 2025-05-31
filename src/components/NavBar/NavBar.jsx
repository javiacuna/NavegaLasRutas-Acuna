import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import './Navbar.css';
import Swal from 'sweetalert2';
import logo from '../../assets/logo-planeta-cel.png';
import instagramIcon from '../../assets/instagram-icon.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleClearCart = () => {
    clearCart();
    Swal.fire({
      title: 'Carrito vaciado',
      icon: 'info',
      timer: 2000,
      toast: true,
      position: 'bottom-right',
      showConfirmButton: false,
    });
  };

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <div className="navbar-ad">
        <img src={instagramIcon} alt="Instagram" className="instagram-icon" />
        <p className="ad-text">
        Explora nuestros productos</p>
      </div>
      
      <nav className="navbar">
        <div className="nav-center">
          <Link className="link" to="/">Inicio</Link>
          <Link className="link" to="/marca/Samsung">Samsung</Link>
          <Link className="link" to="/marca/Apple">Apple</Link>
          <Link className="link" to="/marca/Xiaomi">Xiaomi</Link>
          <Link className="link" to="/marca/Motorola">Motorola</Link>
        </div>
        <div className="img-container">
          <img src={logo} alt="Planeta Celular" className="logo" />
        </div>

        <div className="cart-container">
          <button onClick={handleCartClick} className="cart-icon">
          🛒
          <span className="cart-counter">{totalItemsInCart}</span> 
        </button>
          {isCartOpen && (
            <div className="cart-details">
              {cart.length === 0 ? (
                <p>Tu carrito está vacío</p>
              ) : (
                <ul>
                  {cart.map((item, index) => (
                    <li key={index}>
                      {item.name} - ${item.unit_price} x {item.quantity} 
                    </li>
                  ))}
                </ul>
              )}
              <button onClick={handleClearCart}>Vaciar Carrito</button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

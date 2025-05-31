import React from 'react'
import './CardProducts.css'

const CardProducts = ({ producto }) => {
  return (
    <div className="productos">
      <div className="producto-card">
        <h2>{producto.name}</h2>
        <p>{producto.description}</p>
        <div className="producto-image">
          <img src={producto.img} alt="" />
        </div>
        <p className='producto-price'>Precio: ${producto.unit_price}</p>
        <button className='details-button' onClick={() => onAddToCart(producto)}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default CardProducts;

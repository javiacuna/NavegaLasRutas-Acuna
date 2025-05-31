import React, { useEffect, useState, useContext } from 'react';
import './ItemListContainer.css';
import CardProducts from '../CardProducts/CardProducts';
import { CartContext } from '../../context/CartContext';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('../../../products.json');
        const data = await response.json();
        if (data){
          setProductos(data);
        }
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductos();
  }, []);



  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="item-list-container">
      <div className="contenedorProducts">
        {productos.map((producto) => (
          <CardProducts
            key={producto.id}
            producto={producto}
            onAddToCart={() => addToCart(producto)}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;

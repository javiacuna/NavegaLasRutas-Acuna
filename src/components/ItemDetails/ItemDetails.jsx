import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/Cart';


const ItemDetails = () => {
  const { productId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(`/products/${productId}.json`);
        if (!response.ok) {
          throw new Error('Error al cargar el producto');
        }
        const data = await response.json();
        setProducto(data);
      } catch (error) {
        console.error('Error al cargar el producto:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [productId]);

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className="item-detail">
      <h1>{producto.name}</h1>
      <p>{producto.description}</p>
      <p>Price: ${producto.price}</p>
      <ItemCount productId={producto.id} />
    </div>
  );
};

export default ItemDetails;

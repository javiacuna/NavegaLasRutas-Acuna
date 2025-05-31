import React, { useEffect, useState, useContext } from 'react';
import CardProducts from '../CardProducts/CardProducts';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

const ItemFilterContainer = () => {
  const { marcaId } = useParams(); 
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('../../../products.json');
        const data = await response.json();
        if (data){
            const filtrado = []
            data.forEach(element => {
                if(element.marca === marcaId){
                    filtrado.push(element)
                }
            });
          setProductos(filtrado);
        }
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductos();
  }, [marcaId]);

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

export default ItemFilterContainer;

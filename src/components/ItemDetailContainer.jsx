import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../mock/AsyncService";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId).then(setProduct);
  }, [itemId]);

  return (
    <div className="container mt-5">
      {product ? <ItemDetail product={product} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;
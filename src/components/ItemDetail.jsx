import ItemCount from "./ItemCount";
import { useState } from "react";

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const onAdd = (quantity) => {
    setQuantityAdded(quantity);
  };

  return (
    <div className="card m-3" style={{ maxWidth: "600px", margin: "auto" }}>
      <img
        src={product.img}
        className="card-img-top"
        alt={product.name}
        style={{ objectFit: "cover", maxHeight: "300px" }}
      />
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="card-text">{product.description}</p>
        <p className="card-text fw-bold">${product.unit_price}</p>
        <p className="card-text">Stock disponible: {product.stock}</p>

        {quantityAdded > 0 ? (
          <p className="alert alert-success">
            Agregaste {quantityAdded} al carrito.
          </p>
        ) : (
          <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;

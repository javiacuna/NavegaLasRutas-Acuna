import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <img src={product.img} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.unit_price}</p>
        <Link to={`/item/${product.id}`} className="btn btn-primary">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;

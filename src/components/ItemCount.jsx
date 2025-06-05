import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div>
      <div className="btn-group my-3">
        <button className="btn btn-secondary" onClick={handleSubtract}>-</button>
        <span className="btn btn-light">{count}</span>
        <button className="btn btn-secondary" onClick={handleAdd}>+</button>
      </div>
      <button className="btn btn-success" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
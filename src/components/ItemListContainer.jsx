import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByBrand } from "../mock/AsyncService";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { brandId } = useParams();

  useEffect(() => {
    const fetch = brandId ? getProductsByBrand : getProducts;
    fetch(brandId).then(setItems);
  }, [brandId]);

  return (
    <div className="container mt-5">
      <h2>{greeting}</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
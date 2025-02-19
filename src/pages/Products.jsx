import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/productSlice";
import { Link } from "react-router";

function Products() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status == "loading") return <p>yükleniyor</p>;
  if (status == "failed") return <p>hata oluştu: {error}</p>;
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <p >{item.title}</p>
          <Link to={`/products/${item.id}`}> ürüne git</Link>
        </div>
      ))}
    </div>
  );
}

export default Products;

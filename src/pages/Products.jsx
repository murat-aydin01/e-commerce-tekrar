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
    <div className="grid grid-cols-auto-fit gap-6 ">
      {items.map((item) => (
        <div key={item.id} className="border grid grid-rows-subgrid row-span-3 place-items-center" >
          <img src={item.image} className="max-h-80 " />
          <p >{item.title}</p>
          <Link to={`/products/${item.id}`}> ürüne git</Link>
        </div>
      ))}
    </div>
  );
}

export default Products;

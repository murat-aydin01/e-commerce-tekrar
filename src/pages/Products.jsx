import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/productSlice";
import { Link } from "react-router";

function Products() {
  const dispatch = useDispatch();
  const { products, selectedCategories, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const filteredProducts = selectedCategories.length > 0 ? products.filter((product)=>selectedCategories.includes(product.category)) : products

  if (status == "loading") return <p>yükleniyor</p>;
  if (status == "failed") return <p>hata oluştu: {error}</p>;
  if(filteredProducts < 1) return <p>gösterilecek ürün bulunamadı</p>
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]  gap-16">
      {filteredProducts.map((item) => (
        <div key={item.id} className="border grid grid-rows-subgrid row-span-3 place-items-center gap-3" >
          <img src={item.image} className="max-h-80 " />
          <p >{item.title}</p>
          <Link to={`/products/${item.id}`}> ürüne git</Link>
        </div>
      ))}
    </div>
  );
}

export default Products;

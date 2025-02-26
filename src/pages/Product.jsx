import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchProductById } from "../store/slices/productSlice";
import { addToCart } from "../store/slices/cartSlice";

function Product() {
  const dispatch = useDispatch();
  const { currentProduct, status, error } = useSelector((state) => state.products);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, []);

  if (status == "loading") return <p>yükleniyor</p>;
  if (error) return <p>bir hata oluştu: {error}</p>;
  return <div className="flex flex-col place-items-center gap-6">
    <img src={currentProduct.image} className="max-h-72 aspect-auto"/>
    <h1>{currentProduct.title}</h1>
    <p>{currentProduct.description}</p>
    <p>{currentProduct.price}</p>
    <p>{currentProduct.category}</p>
    <button onClick={()=>{dispatch(addToCart(currentProduct))}}>sepete ekle</button>
    

  </div>;
}

export default Product;

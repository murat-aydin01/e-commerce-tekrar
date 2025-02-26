import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchProductById } from "../store/slices/productSlice";

function Product() {
  const dispatch = useDispatch();
  const { currentProduct, status, error } = useSelector((state) => state.products);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, []);

  if (status == "loading") return <p>yükleniyor</p>;
  if (error) return <p>bir hata oluştu: {error}</p>;
  if (!currentProduct) return <p>Ürün bilgisi bulunamadı</p>;
  return <div>{currentProduct.title}</div>;
}

export default Product;

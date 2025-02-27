import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchProductById } from "../store/slices/productSlice";
import { addToCart } from "../store/slices/cartSlice";

function Product() {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { currentProduct, status, error } = useSelector((state) => state.products);
  const cart = useSelector((state)=> state.cart)
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, []);

  const handleClick = () => {
    dispatch(addToCart({ ...currentProduct, quantity: quantity }));
  };

  const handleChange = (e) => {
    if (e.target.value > 0) {
      setQuantity(Number(e.target.value));
    }
  };

  if (status == "loading") return <p>yükleniyor</p>;
  if (error) return <p>bir hata oluştu: {error}</p>;
  return (
    <div className="flex flex-col place-items-center gap-6">
      <img src={currentProduct.image} className="max-h-72 aspect-auto" />
      <h1>{currentProduct.title}</h1>
      <p>{currentProduct.description}</p>
      <p>{currentProduct.price}</p>
      <p>{currentProduct.category}</p>
      {cart.some((item)=>item.id==currentProduct.id) ? ("ürün sepete eklendi") : (<div className="flex gap-2">
        <button onClick={handleClick}>sepete ekle</button>
        <input
          type="number"
          value={quantity}
          onChange={handleChange}
          className="border rounded-md"
        />
      </div>)}
    </div>
  );
}

export default Product;

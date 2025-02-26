import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../store/slices/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (cart.length < 1) return <p>sepet boş</p>;
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]  gap-16">
      {cart.map((item, index) => {
        return (
          <div
            key={index}
            className="border grid grid-rows-subgrid row-span-3 place-items-center gap-3"
          >
            <img src={item.image} className="max-h-80 " />
            <p>{item.title}</p>
            <button onClick={() => {dispatch(deleteProduct(item.id))}}>
              sil
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;

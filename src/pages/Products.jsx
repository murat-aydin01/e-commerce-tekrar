import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../store/slices/productSlice";

function Products() {
    const dispatch = useDispatch();
    const {items, status, error} = useSelector(state=>state.products)

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    if(status == "loading") return <p>yükleniyor</p>
    if(status == "failed") return <p>hata oluştu: {error}</p>
  return (
    <div>
        {items.map((item)=>( <p key={item.id}>{item.title}</p> ))}
    </div>
  )
}

export default Products
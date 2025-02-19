import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

function Product() {
    const [product, setProduct] = useState(null)
    const {id} = useParams()
    useEffect(()=>{
       axios.get(`https://fakestoreapi.com/products/${id}`).then(res=>{setProduct(res.data)})
    },[])
    if(!product) return <p>yükleniyor</p>
  return (
    <div>{product.title}</div>
  )
}

export default Product
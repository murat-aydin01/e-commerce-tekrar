import { useDispatch, useSelector } from "react-redux"
import { toggleCategory } from "../store/slices/productSlice";

function SideBar() {
  const {categories, selectedCategories} = useSelector(state=>state.products)
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-2">
      {categories.map((category)=>{
        return (
          <label key={category} ><input type="checkbox" checked={selectedCategories.includes(category)} onChange={()=>{dispatch(toggleCategory(category))}}  />{category}</label>
        )
      })}
    </div>
  )
}

export default SideBar
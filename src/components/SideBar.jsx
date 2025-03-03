import { useDispatch, useSelector } from "react-redux";
import { toggleCategory } from "../store/slices/productSlice";

function SideBar() {
  const { categories, selectedCategories,  } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="font-bold">Kategoriler</p>
        {categories.map((category) => {
          return (
            <label key={category}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => {
                  dispatch(toggleCategory(category));
                }}
              />
              {category}
            </label>
          );
        })}
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold">Sırala</p>
        <label ><input type="radio" checked={false} value={"default"}/>Varsayılan</label>
        <label ><input type="radio" checked={false} value={"price_asc"}/>Fiyata göre artan</label>
        <label ><input type="radio" checked={false} value={"price_desc"}/>Fiyata göre azalan</label>
        <label ><input type="radio" checked={false} value={"rating"}/>Puana göre</label>
      </div>
    </div>
  );
}

export default SideBar;

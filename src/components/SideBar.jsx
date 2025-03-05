import { useDispatch, useSelector } from "react-redux";
import { setSortOption, toggleCategory } from "../store/slices/productSlice";

function SideBar() {
  const { categories, selectedCategories, sortOptions, selectedSortOption } = useSelector((state) => state.products);
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
        {Object.entries(sortOptions).map(([key, value])=>{return (
          <label key={key}><input type="radio" checked={key===selectedSortOption} value={key} onChange={()=>{dispatch(setSortOption(key))}}/>{value}</label>
        )})}
      </div>
    </div>
  );
}

export default SideBar;

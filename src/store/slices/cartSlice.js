import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
        const exists = state.some((item)=>item.id==action.payload.id)
        if(!exists) {
            state.push({ ...action.payload })
        }
    },
    deleteProduct: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
        const product = state.find((item) => item.id == action.payload.id);
        if(product) {
            product.quantity = action.payload.quantity
        }
    }
  },
});

export default cartSlice.reducer;
export const { addToCart, deleteProduct, updateQuantity } = cartSlice.actions;

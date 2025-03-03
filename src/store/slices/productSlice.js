import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data ||
          error.message ||
          "Ürünler getirilirken bilinmeyen bir hata oluştu"
      );
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id, thunkAPI) => {
    const product = thunkAPI
      .getState()
      .products.products.find((product) => product.id == id);
    if (product) return product;
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data ||
          error.message ||
          "Ürün detayı getirilirken bilinmeyen bir hata oluştu."
      );
    }
  }
);

const initialState = {
  products: [],
  currentProduct: {},
  categories: [],
  selectedCategories: [],
  status: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleCategory: (state, action) => {
      if (state.selectedCategories.includes(action.payload)) {
        state.selectedCategories = state.selectedCategories.filter(
          (c) => c !== action.payload
        );
      } else {
        state.selectedCategories.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        action.payload.forEach((product) => {
          if (!state.categories.includes(product.category)) {
            state.categories.push(product.category);
          }
        });
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      //id ile ürün getirme

      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })

      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
        state.status = "succeeded";
        const exists = state.products.some(
          (product) => product.id == action.payload.id
        );
        if (!exists) {
          state.products.push(action.payload);
        }
      })

      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
export const { toggleCategory } = productSlice.actions;

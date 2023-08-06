/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "../../services/productService";

type InitialState = {
  data: ProductState;
};

export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  color: string;
  price: number;
  make: string;
  model: string;
  imgUrl: string;
  no_items_available: number;
  user_id: number;
};

type ProductState = {
  products: Array<Product>;
  fetchedProduct: Product;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: "";
};

const initialState = {
  data: {
    products: [],
    fetchedProduct: <Product>{},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  } as ProductState,
} as InitialState;

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (data, thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (error) {
      const message: string = "hello some error";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id: any, thunkAPI) => {
    try {
      return await productService.getProductById(id);
    } catch (error) {
      const message: string = "hello some error";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const product = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.data.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data.isLoading = false;
        state.data.isSuccess = true;
        state.data.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.data.isLoading = false;
        state.data.isError = true;
        state.data.products = [];
        //state.data.message = action.payload;
      });

    builder
      .addCase(getProductById.pending, (state) => {
        state.data.isLoading = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.data.isLoading = false;
        state.data.isSuccess = true;
        state.data.fetchedProduct = action.payload;
        // state.data.products = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.data.isLoading = false;
        state.data.isError = true;
        //state.data.message = action.payload;
      });
  },
});

// export const { logIn, logOut } = auth.actions;
export default product.reducer;

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "../../services/orderService";

type InitialState = {
  data: OrderState;
};

type Order = {
  id: number;
  user_id: string;
  date_and_time: string;
  status: string;
  total_amount: number;
  userOrderItems: Array<{
    name: string;
    description: string;
    color: string;
    price: number;
    imgUrl: string;
    quantity: number;
  }>;
};

type OrderState = {
  order: Array<Order>;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  errorObj: any;
  message: "";
};

const initialState = {
  data: {
    order: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    errorObj: <{ statusCode: number; error: string; message: string }>{},
  } as OrderState,
} as InitialState;

export const getUserOrders = createAsyncThunk(
  "user/getUserOrders",
  async (id: any, thunkAPI) => {
    try {
      return await orderService.getUserOrders(id);
    } catch (error) {
      const message: string = "hello some error";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async (orderDetails: any, thunkAPI) => {
    try {
      return await orderService.placeOrder(orderDetails);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const order = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserOrders.pending, (state) => {
        state.data.isLoading = true;
      })
      .addCase(getUserOrders.fulfilled, (state, action) => {
        state.data.isLoading = false;
        state.data.isSuccess = true;
        state.data.order = action.payload;
      })
      .addCase(getUserOrders.rejected, (state, action) => {
        state.data.isLoading = false;
        state.data.isError = true;
        state.data.order = [];
        //state.data.message = action.payload;
      });

    builder
      .addCase(placeOrder.pending, (state) => {
        state.data.isLoading = true;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.data.isLoading = false;
        state.data.isSuccess = true;
        // state.data.products = action.payload;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.data.isLoading = false;
        state.data.isError = true;
        state.data.errorObj = action.payload;
        //state.data.message = action.payload;
      });
  },
});

export default order.reducer;

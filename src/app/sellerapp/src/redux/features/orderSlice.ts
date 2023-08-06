import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "@/services/orderService";

type InitialState = {
  data: OrderState;
};

type Order = {
  id: number;
  user_id: string;
  date_and_time: string;
  status: string;
  total_amount: number;
};

type OrderState = {
  order: Array<Order>;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: "";
};

const initialState = {
  data: {
    order: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
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
  },
});

export default order.reducer;

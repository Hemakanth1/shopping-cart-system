/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../../services/userService";

type InitialState = {
  data: UserState;
};

type User = {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
};

type UserState = {
  user: User;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: "";
};

const initialState = {
  data: {
    user: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  } as UserState,
} as InitialState;

export const getUser = createAsyncThunk(
  "user/getUser",
  async (data, thunkAPI) => {
    try {
      return await userService.getUser();
    } catch (error) {
      const message: string = "hello some error";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.data.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.data.isLoading = false;
        state.data.isSuccess = true;
        state.data.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.data.isLoading = false;
        state.data.isError = true;
        state.data.user = <User>{};
        //state.data.message = action.payload;
      });
  },
});

export default user.reducer;

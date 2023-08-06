/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./productSlice";

export type Cart = {
  item: Product;
  quantity: number;
};

type InitialState = Array<Cart>;

const initialState = [] as InitialState;

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
    addItem: (state: InitialState, action: PayloadAction<Cart>) => {
      return [...state, action.payload];
    },
    deleteItem: (state: InitialState, action: PayloadAction<number>) => {
      const oldState: Cart[] = JSON.parse(JSON.stringify(state));
      const newState = oldState.filter(
        (cartItem) => cartItem.item.id !== action.payload
      );
      return newState;
    },
    increaseQuantityByOne: (
      state: InitialState,
      action: PayloadAction<Number>
    ) => {
      const newState: Cart[] = JSON.parse(JSON.stringify(state));
      newState.forEach((cartItem) => {
        if (cartItem.item.id == action.payload) {
          cartItem.quantity++;
        }
      });
      return newState;
    },
    decreaseQuantityByOne: (
      state: InitialState,
      action: PayloadAction<Number>
    ) => {
      const newState: Cart[] = JSON.parse(JSON.stringify(state));
      newState.forEach((cartItem) => {
        if (cartItem.item.id == action.payload) {
          cartItem.quantity--;
        }
      });
      return newState;
    },
  },
});

export const {
  reset,
  addItem,
  increaseQuantityByOne,
  decreaseQuantityByOne,
  deleteItem,
} = cart.actions;
export default cart.reducer;

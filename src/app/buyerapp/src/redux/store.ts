import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import cartReducer from "./features/cartSlice";
import userReducer from "./features/userSlice";
import orderReducer from "./features/orderSlice";
import { useSelector, TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {
    productReducer,
    cartReducer,
    userReducer,
    orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

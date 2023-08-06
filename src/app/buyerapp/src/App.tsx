/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "./App.css";
import "./components/Footer";
import Home from "./pages/home";
import Buyer from "./pages/buyer";
import Orders from "./pages/orders";
import Profile from "./pages/profile";
import ItemDetails from "./pages/items_details";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="item/:id" element={<ItemDetails />} />
        <Route path="buyer">
          <Route index element={<Buyer />} />
          <Route path="orders" element={<Orders />} />
          <Route path="profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Route>
    </React.Fragment>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

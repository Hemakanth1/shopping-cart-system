"use client";

import { useState } from "react";
import { logIn, logOut } from "@/redux/features/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useSelector } from "react-redux";
import { getProducts } from "@/redux/features/productSlice";

export default function LogIn() {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const user = useAppSelector((state) => state.authReducer.value.username);

  const products = useAppSelector(
    (state) => state.productReducer.data.products
  );

  const isLoading = useAppSelector(
    (state) => state.productReducer.data.isLoading
  );

  const onClickLogIn = () => {
    dispatch(logIn(username));
  };
  const onSubmit = () => {
    dispatch(getProducts());
    console.log(products);
  };

  const onClickToggle = () => {};
  const onClickLogOut = () => {};

  return (
    <div>
      {/* <h1>Username:{user}</h1>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <br />
      <br />
      <button onClick={onClickLogIn}>LogIn</button> */}
      {products
        ? products.map((product, index) => <p key={index}>{product.name}</p>)
        : ""}
      <h2>isLoading:{isLoading ? "loading" : "not"}</h2>
      <button onClick={onSubmit}>GetData</button>
    </div>
  );
}

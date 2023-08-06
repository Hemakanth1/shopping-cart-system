/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ReduxProvider } from "./redux/provider.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);

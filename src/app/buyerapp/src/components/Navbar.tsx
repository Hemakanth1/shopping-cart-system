/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter, Link } from "react-router-dom";
import { addItem } from "../redux/features/cartSlice";
import { useAppSelector } from "../redux/store";

export default function Navbar() {
  const cartItems = useAppSelector((state) => state.cartReducer);
  const no_of_items = cartItems.reduce(
    (total, currentItem) => total + currentItem.quantity,
    0
  );

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#000", color: "#fff" }}
    >
      <div className="container-fluid">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          LOGO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-5" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item  mx-5">
              <a className="nav-link active text-light" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light " href="/about">
                About
              </a>
            </li>
            <li className="nav-item mx-5">
              <a className="nav-link text-light" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <Link to="/buyer/cart">
            {cartItems.length > 0 ? (
              <div>
                <div className="wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-cart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  <span className="text-light dot text-center">
                    {no_of_items}
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
          </Link>

          <Link to="/buyer">
            {" "}
            <div className="mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                className="bi bi-person-fill border rounded-circle"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

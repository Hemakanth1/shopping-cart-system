/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import BuyerLayout from "../components/BuyerLayout";
import {
  reset,
  addItem,
  increaseQuantityByOne,
  decreaseQuantityByOne,
  deleteItem,
} from "../redux/features/cartSlice";
import item from "../assets/samsung.jpg";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../redux/store";
import { Link } from "react-router-dom";
import { useState } from "react";
import RootLayout from "../components/RootLayout";

export default function cart() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useAppSelector((state) => state.cartReducer);
  //   const cartData = cartState.map((cartItem) => ({ ...cartItem, isError: "" }));

  const [error, setError] = useState<{ [key: string]: any }>({
    0: { maxQuantityReached: false, minQuantityReached: false },
  });
  //   const [cartItems, setCartItem] = useState([...cartState]);

  function deleteItemFromCart(productId: number) {
    dispatch(deleteItem(productId));
  }

  function increaseQuantity(
    productId: number,
    currentQuantity: number,
    availableItems: number
  ) {
    if (currentQuantity < availableItems) {
      dispatch(increaseQuantityByOne(productId));
      setError({
        ...error,
        [productId.toString()]: {
          maxQuantityReached: false,
          minQuantityReached: false,
        },
      });
    } else {
      const err = {
        ...error,
        [productId.toString()]: {
          maxQuantityReached: true,
          minQuantityReached: false,
        },
      };
      setError(err);
    }
  }

  function decreaseQuantity(
    productId: number,
    currentQuantity: number,
    availableItems: number
  ) {
    if (currentQuantity > 1) {
      dispatch(decreaseQuantityByOne(productId));
      setError({
        ...error,
        [productId.toString()]: {
          maxQuantityReached: false,
          minQuantityReached: false,
        },
      });
    } else {
      setError({
        ...error,
        [productId.toString()]: {
          maxQuantityReached: false,
          minQuantityReached: true,
        },
      });
    }
  }

  return (
    <RootLayout>
      <BuyerLayout>
        <div className="col-md-9 col-lg-10" style={{ backgroundColor: "#fff" }}>
          <div className="row d-flex justify-content-center p-5 ">
            <div className="container mt-5">
              <h2>Shopping Cart</h2>
              {cartItems.length ? (
                <div>
                  <table className="table text-center">
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    {cartItems.map((cartItem, index) => (
                      <tbody
                        key={index}
                        className="text-center align-items-center"
                      >
                        <tr>
                          <td className="align-middle">
                            <div className="row d-flex justify-content-start">
                              <div className="col-4 d-flex justify-content-start align-items-center align-middle">
                                <img
                                  src={cartItem.item.imgUrl}
                                  className=""
                                  width={100}
                                  height={100}
                                  alt="Product Image 1"
                                />
                              </div>
                              <div className="col-6 d-block align-items-center align-middle">
                                <h4
                                  style={{
                                    fontFamily: "Franklin Gothic Medium",
                                  }}
                                >
                                  {cartItem.item.name}
                                </h4>
                                <h6 className="text-muted">
                                  {cartItem.item.description}
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle font-weight-bold">
                            ${cartItem.item.price}
                          </td>
                          <td className="align-middle">
                            <div className="d-flex justify-content-center align-items-center">
                              <button
                                onClick={() =>
                                  decreaseQuantity(
                                    cartItem.item.id,
                                    cartItem.quantity,
                                    cartItem.item.no_items_available
                                  )
                                }
                                className="btn btn-sm btn-warning mx-2 px-3"
                              >
                                -
                              </button>
                              {cartItem.quantity}
                              {error[cartItem.item.id.toString()] ? (
                                <>
                                  {error[cartItem.item.id.toString()]
                                    .maxQuantityReached ? (
                                    <p className="text-danger">Out of Stock</p>
                                  ) : (
                                    ""
                                  )}
                                </>
                              ) : (
                                ""
                              )}
                              {error[cartItem.item.id.toString()] ? (
                                <>
                                  {error[cartItem.item.id.toString()]
                                    .minQuantityReached ? (
                                    <p className="text-danger">
                                      Cannot decrease
                                    </p>
                                  ) : (
                                    ""
                                  )}
                                </>
                              ) : (
                                ""
                              )}
                              <button
                                onClick={() =>
                                  increaseQuantity(
                                    cartItem.item.id,
                                    cartItem.quantity,
                                    cartItem.item.no_items_available
                                  )
                                }
                                className="btn btn-sm btn-warning mx-2 px-3"
                              >
                                +
                              </button>
                              <button
                                onClick={() =>
                                  deleteItemFromCart(cartItem.item.id)
                                }
                                className="btn btn-danger btn-sm mx-3"
                              >
                                Remove
                              </button>
                            </div>
                          </td>
                          <td className="align-middle font-weight-bold">
                            ${cartItem.item.price * cartItem.quantity}
                          </td>
                        </tr>
                      </tbody>
                    ))}
                    <tfoot>
                      <tr>
                        <td colSpan={3} className="text-right">
                          <strong>Total:</strong>
                        </td>
                        <td className="font-weight-bold">
                          $
                          {cartItems.reduce((total, currentItem) => {
                            return (
                              total +
                              currentItem.item.price * currentItem.quantity
                            );
                          }, 0)}
                        </td>
                        <td></td>
                      </tr>
                    </tfoot>
                  </table>
                  <div className="d-flex justify-content-end">
                    <Link to="/buyer/checkout">
                      <button
                        style={{ width: "300px" }}
                        className="btn btn-dark"
                      >
                        Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              ) : (
                <p>Cart is Empty</p>
              )}
            </div>
          </div>
        </div>
      </BuyerLayout>
    </RootLayout>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch } from "react-redux";
import BuyerLayout from "../components/BuyerLayout";
import RootLayout from "../components/RootLayout";
import { placeOrder } from "../redux/features/orderSlice";
import { reset } from "../redux/features/cartSlice";
import { AppDispatch, useAppSelector } from "../redux/store";

export default function checkout() {
  const cartItems = useAppSelector((state) => state.cartReducer);
  const errorObject = useAppSelector(
    (state) => state.orderReducer.data.errorObj
  );

  const dispatch = useDispatch<AppDispatch>();

  function handleOrder() {
    // console.log({ user_id: 101, status: "pending", order_items: [] });
    const order_items = cartItems.map((cartItem) => {
      return { ...cartItem.item, quantity: cartItem.quantity };
    });
    dispatch(placeOrder({ user_id: 101, status: "pending", order_items }));
    dispatch(reset());
  }

  return (
    <RootLayout>
      <BuyerLayout>
        <div className="col-md-9 col-lg-10" style={{ backgroundColor: "#fff" }}>
          <div className="row d-flex px-3 ">
            <div className="col-6 mt-2 mx-3 border p-2">
              {errorObject.message ? (
                <div className="alert alert-danger" role="alert">
                  {errorObject.message}
                </div>
              ) : (
                ""
              )}
              <h2>Checkout</h2>
              <form className="">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Enter full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter address"
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder="Enter city"
                      required
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>State</label>
                    <input
                      type="text"
                      className="form-control"
                      id="state"
                      placeholder="Enter state"
                      required
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <label>Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder="Zip"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Credit Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    placeholder="Enter credit card number"
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Expiry Date</label>
                    <input
                      type="text"
                      className="form-control"
                      id="expiryDate"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cvv"
                      placeholder="CVV"
                      required
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button
                    onClick={() => handleOrder()}
                    type="submit"
                    className="btn btn-success mt-3"
                    style={{ width: "400px" }}
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
            <div className="col-4 mt-2 mx-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Cart Summary</h5>
                  <ul className="list-group">
                    {cartItems.length > 0 ? (
                      <div>
                        {cartItems.map((cartItem, index) => (
                          <div key={index}>
                            <li
                              className="list-group-item"
                              style={{
                                fontFamily: "Franklin Gothic Medium",
                              }}
                            >
                              <div className="d-flex justify-content-between">
                                <div>
                                  <p>
                                    {cartItem.quantity} x {cartItem.item.name}
                                  </p>
                                  <p
                                    className="text-muted"
                                    style={{ fontSize: "12px" }}
                                  >
                                    {cartItem.item.description}
                                  </p>
                                </div>
                                {"    "}
                                <p>
                                  ${cartItem.quantity * cartItem.item.price}
                                </p>
                              </div>
                            </li>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div>Empty</div>
                    )}
                  </ul>
                </div>
                <div className="card-footer d-flex justify-content-end">
                  <p className="h5 ">
                    Total: ${" "}
                    {cartItems.reduce((total, currentItem) => {
                      return (
                        total + currentItem.item.price * currentItem.quantity
                      );
                    }, 0)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BuyerLayout>
    </RootLayout>
  );
}

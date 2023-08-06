/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch } from "react-redux";
import BuyerLayout from "../components/BuyerLayout";
import RootLayout from "../components/RootLayout";
import { getUserOrders } from "../redux/features/orderSlice";
import { AppDispatch, useAppSelector } from "../redux/store";
import { useEffect } from "react";

export default function orders() {
  const dispatch = useDispatch<AppDispatch>();

  const { order, isError, isLoading, isSuccess, message } = useAppSelector(
    (state) => state.orderReducer.data
  );

  useEffect(() => {
    dispatch(getUserOrders(101));
  }, [dispatch]);

  return (
    <RootLayout>
      <BuyerLayout>
        <div className="col-md-9 col-lg-10" style={{ backgroundColor: "#fff" }}>
          <div className="row d-flex justify-content-center p-5 ">
            {isLoading ? (
              <p className="text-dark">Loading</p>
            ) : (
              <div>
                {order.length > 0 ? (
                  <div className="container mt-5">
                    <h2>Past Orders</h2>
                    {order.map((ord, ind) => (
                      <div key={ind} className="card mb-3">
                        <div className="card-header">Order ID: {ord.id}</div>
                        <div className="card-body">
                          <h5 className="card-title">
                            Order Date: {ord.date_and_time.substring(0, 10)}
                          </h5>
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              {ord.userOrderItems.map((ordItem, index) => (
                                <tr key={index}>
                                  <td>{ordItem.name}</td>
                                  <td>{ordItem.quantity}</td>
                                  <td>${ordItem.price}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="card-footer">
                          <p className="h5">Total: ${ord.total_amount}</p>
                        </div>
                      </div>
                    ))}
                    <div className="card mb-3"></div>
                  </div>
                ) : (
                  <p>Loading</p>
                )}
              </div>
            )}
          </div>
        </div>
      </BuyerLayout>
    </RootLayout>
  );
}

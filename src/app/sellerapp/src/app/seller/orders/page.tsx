/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import SellerLayout from "@/components/SellerLayout";
import { getUserOrders } from "@/redux/features/orderSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
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
    <SellerLayout>
      <div className="col-md-9 col-lg-10" style={{ backgroundColor: "#fff" }}>
        <div className="row d-flex justify-content-center p-5 ">
          {isLoading ? (
            <p className="text-dark">Loading</p>
          ) : (
            <div>
              {order.length > 0 ? (
                <div>
                  <h3>Orders</h3>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Data and Time</th>
                        <th scope="col">Status</th>
                        <th scope="col">Total Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.map((ord, index) => (
                        <tr key={ord.id}>
                          <td>{ord.id}</td>
                          <td>{ord.date_and_time}</td>
                          <td>{ord.status}</td>
                          <td>{ord.total_amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p>Loading</p>
              )}
            </div>
          )}
        </div>
      </div>
    </SellerLayout>
  );
}

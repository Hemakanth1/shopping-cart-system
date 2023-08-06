/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import SellerLayout from "@/components/SellerLayout";
import { getUser } from "@/redux/features/userSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function orders() {
  const dispatch = useDispatch<AppDispatch>();

  const { user, isError, isLoading, isSuccess, message } = useAppSelector(
    (state) => state.userReducer.data
  );

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <SellerLayout>
      <div className="col-md-9 col-lg-10" style={{ backgroundColor: "#fff" }}>
        <div className="row d-flex justify-content-start p-5 ">
          <div className="col-md-10">
            <form className="form-group text-dark">
              <h3>Profile</h3>
              <div>
                <label>Name</label>
                <input type="text" className="form-control" value={user.name} />
              </div>
              <div>
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={user.address}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  value={user.email}
                />
              </div>
              <div>
                <label>Phone</label>
                <input
                  type="number"
                  className="form-control"
                  value={user.phone}
                />
              </div>
              <div className="d-flex justify-content-end mt-2">
                <button className="btn btn-warning ">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SellerLayout>
  );
}

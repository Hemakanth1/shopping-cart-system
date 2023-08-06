/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
"use client";
import Image from "next/image";
import SellerLayout from "@/components/SellerLayout";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { getProducts } from "@/redux/features/productSlice";
import Link from "next/link";

export default function products() {
  const dispatch = useDispatch<AppDispatch>();

  const { products, isError, isLoading, isSuccess, message } = useAppSelector(
    (state) => state.productReducer.data
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <SellerLayout>
      <div className="col-md-9 col-lg-10" style={{ backgroundColor: "#fff" }}>
        <div className="row d-flex text-dark justify-content-center p-5">
          {isLoading ? (
            <h2>Loading....</h2>
          ) : (
            <div>
              {products.length > 0 ? (
                <div>
                  <div className="row mb-3">
                    <div className="col-10">
                      <h3>Products</h3>
                    </div>
                    <div className="col-2">
                      <Link className="text-success" href={`products/add`}>
                        <button
                          type="button"
                          className="btn btn-lg btn-outline-success"
                        >
                          Add Product
                        </button>
                      </Link>
                    </div>
                  </div>
                  <table className="table text-center table-hover">
                    <thead className="thead-dark">
                      <tr>
                        <th>Image</th>
                        <th scope="col ">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Model</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id}>
                          <td className="align-middle">
                            <Image
                              src={product.imgUrl}
                              width={80}
                              height={80}
                              alt="Img"
                            />
                          </td>
                          <td className="align-middle" scope="row">
                            {product.id}
                          </td>
                          <td className="align-middle">{product.name}</td>
                          <td className="align-middle">
                            {product.description}
                          </td>
                          <td className="align-middle">{product.price}</td>
                          <td className="align-middle">{product.model}</td>
                          <td className="align-middle">
                            <Link
                              href={`products/${product.id}`}
                              className="text-primary"
                            >
                              <button className="btn btn-outline-primary mx-2">
                                View
                              </button>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <h2>Loading....</h2>
              )}
            </div>
          )}
        </div>
      </div>
    </SellerLayout>
  );
}

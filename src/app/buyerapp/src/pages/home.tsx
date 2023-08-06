/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import BuyerLayout from "../components/BuyerLayout";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../redux/store";
import { getProducts } from "../redux/features/productSlice";
import item from "../assets/samsung.jpg";
import { Link } from "react-router-dom";
import RootLayout from "../components/RootLayout";

export default function home() {
  const dispatch = useDispatch<AppDispatch>();

  const { products } = useAppSelector((state) => state.productReducer.data);

  useEffect(() => {
    dispatch(getProducts());
    console.log(products);
  }, [dispatch]);

  return (
    <RootLayout>
      <div>
        <h3 className="text-center mt-2">All Products</h3>
        {products ? (
          <div className="text-dark">
            <div
              className="col-md-12 col-lg-12"
              style={{ backgroundColor: "#fff" }}
            >
              <div className="row d-flex justify-content-start p-5 ">
                <div className="container"></div>
                {products.map((product) => (
                  <div key={product.id} className="col-md-3 my-2 text-center">
                    <div className="card bg-light text-dark">
                      <div className="card-body">
                        <img
                          src={product.imgUrl}
                          alt="Logo"
                          width={125}
                          height={125}
                        />
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                      </div>
                      <div className="">
                        <p className="">Price: ${product.price}</p>
                        <p className="">Color: {product.color}</p>
                        <p className="">Make: {product.make}</p>
                        <p className="">
                          Available: {product.no_items_available}
                        </p>
                      </div>
                      <div className="card-body">
                        <Link to={`/item/${product.id}`}>
                          <button className="btn btn-primary">Buy Now</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </RootLayout>
  );
}

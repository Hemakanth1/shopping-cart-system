/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useParams, useNavigate } from "react-router-dom";
import BuyerLayout from "../components/BuyerLayout";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../redux/store";
import {
  Product,
  getProductById,
  product,
} from "../redux/features/productSlice";
import { addItem } from "../redux/features/cartSlice";
import item from "../assets/samsung.jpg";
import { Link } from "react-router-dom";
import RootLayout from "../components/RootLayout";

export default function items_details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [showLink, setShowLink] = useState(false);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const { fetchedProduct } = useAppSelector(
    (state) => state.productReducer.data
  );
  const cartItems = useAppSelector((state) => state.cartReducer);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch]);

  function addToCart(product: Product) {
    const isAdded = cartItems.filter(
      (cartItem) => cartItem.item.id == product.id
    );
    if (!isAdded.length) {
      dispatch(addItem({ item: product, quantity: 1 }));
      setShowLink(true);
    } else {
      setMessage("Item already added...");
    }
  }

  function buyNow(product: Product) {
    const isAdded = cartItems.filter(
      (cartItem) => cartItem.item.id == product.id
    );
    if (!isAdded.length) {
      dispatch(addItem({ item: product, quantity: 1 }));
      setShowLink(true);
    } else {
      setMessage("Item already added...");
    }
    navigate("/buyer/cart");
  }

  return (
    <RootLayout>
      <div className="mt-2">
        <div className="text-center">
          <h2>Product Details</h2>
        </div>
        {fetchedProduct ? (
          <div>
            <div className="container mt-5">
              <div className="row d-flex justify-content-center">
                <div className="col-md-8 py-2 border d-flex justify-content-center">
                  <div className="col-md-6 d-flex justify-content-end">
                    <img
                      src={fetchedProduct.imgUrl}
                      className=""
                      width={400}
                      height={500}
                      alt="Product Image 1"
                    />
                  </div>
                  <div className="col-md-4">
                    <div className="card-body d-flex justify-content-center">
                      <div>
                        <h5 className="card-title">{fetchedProduct.name}</h5>
                        <p className="card-text">
                          {fetchedProduct.description}
                        </p>
                        <ul className="list-unstyled">
                          <li>Color: {fetchedProduct.color}</li>
                          <li>Model: {fetchedProduct.model}</li>
                          <li>Make: {fetchedProduct.make}</li>
                        </ul>
                        <p className="h4 font-weight-bold">
                          Price: ${fetchedProduct.price}
                        </p>
                        <div className="text-center">
                          <button
                            onClick={() => addToCart(fetchedProduct)}
                            className="btn btn-warning mx-2"
                          >
                            Add to Cart
                          </button>
                          <button
                            onClick={() => buyNow(fetchedProduct)}
                            className="btn btn-outline-primary"
                          >
                            Buy Now
                          </button>
                        </div>
                        {showLink ? (
                          <div>
                            <Link to="/buyer/cart">Go to Cart</Link>{" "}
                          </div>
                        ) : (
                          ""
                        )}
                        {message ? <div>{message}</div> : ""}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </RootLayout>
  );
}

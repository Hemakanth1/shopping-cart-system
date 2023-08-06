/* eslint-disable @typescript-eslint/no-unused-vars */
import { Product } from "../redux/features/productSlice";
import axios from "axios";

// const API_URL = "http://localhost:7000/users/101/products";

const getProducts = async () => {
  const response = await axios.get("http://localhost:7001/products");
  const products = response.data.data.products;
  return products;
};

const getProductById = async (id: string) => {
  const response = await axios.get(`http://localhost:7001/products/${id}`);
  const product = response.data.data.product[0];
  return product;
};

const productService = {
  getProducts,
  getProductById,
};

export default productService;

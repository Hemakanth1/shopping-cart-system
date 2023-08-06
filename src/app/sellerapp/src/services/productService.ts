import { Product } from "@/redux/features/productSlice";
import axios from "axios";

const API_URL = "http://localhost:7000/users/101/products";

const getProducts = async () => {
  const response = await axios.get(API_URL);
  const products = response.data.data.products;
  return products;
};

const addProduct = async (product: any) => {
  const response = await axios.post(`http://localhost:7001/products`, product);
  const createdProduct = response.data.data;
  return createdProduct;
};

const deleteProduct = async (id: any) => {
  const response = await axios.delete(`http://localhost:7001/products/${id}`);
  const deletedProduct = response.data;
  return deletedProduct;
};

const getProductById = async (id: string) => {
  const response = await axios.get(`http://localhost:7001/products/${id}`);
  const product = response.data.data.product[0];
  return product;
};

const updateProduct = async (updatedProduct: Product) => {
  const response = await axios.patch(
    `http://localhost:7001/products/${updatedProduct.id}`,
    updatedProduct
  );
  const product = response.data.data.product;
  return product;
};

const productService = {
  getProducts,
  getProductById,
  updateProduct,
  addProduct,
  deleteProduct,
};

export default productService;

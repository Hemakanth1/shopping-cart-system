/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const getUserOrders = async (id: any) => {
  const API_URL = `http://localhost:7000/users/${id}/orders`;
  const response = await axios.get(API_URL);
  const orders = response.data.data.result;
  return orders;
};

const placeOrder = async (orderDetails: any) => {
  const response = await axios.post(
    `http://localhost:7002/orders/place_order`,
    orderDetails
  );
  const createdOrder = response.data;
  console.log(createdOrder);
  return createdOrder;
  // try {
  //   const response = await axios.post(
  //     `http://localhost:7002/orders/place_order`,
  //     orderDetails
  //   );
  //   const createdOrder = response.data.data;
  //   console.log(createdOrder);
  //   return createdOrder;
  // } catch (error: any) {
  //   console.log(error.response.data);
  //   return error.message;
  // }
};

const orderService = {
  getUserOrders,
  placeOrder,
};

export default orderService;

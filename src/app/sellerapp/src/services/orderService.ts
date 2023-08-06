import axios from "axios";

const getUserOrders = async (id: any) => {
  const API_URL = `http://localhost:7000/users/${id}/orders`;
  const response = await axios.get(API_URL);
  const orders = response.data.data.orders;
  return orders;
};

const orderService = {
  getUserOrders,
};

export default orderService;

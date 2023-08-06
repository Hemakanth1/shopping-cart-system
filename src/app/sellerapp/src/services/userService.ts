import axios from "axios";

const API_URL = "http://localhost:7000/users/101";

const getUser = async () => {
  const response = await axios.get(API_URL);
  const user = response.data.data.user;
  return user[0];
};

const userService = {
  getUser,
};

export default userService;

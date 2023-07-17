/* eslint-disable import/no-unresolved */
import { Op } from 'sequelize';
import axios from 'axios';
import User from '../models/user';
import utilities from 'hemakanth-package-utilities';
const { checkRecordExistByAttribute } = utilities;

const fetchAllUsers = async (attributes: any): Promise<any> => {
  const {
    page,
    limit,
    sortBy
  }: { page: number; limit: number; sortBy: string } = attributes;

  // prepare conditions
  const options: any = {};
  if (limit) {
    options.offset = page ? (page - 1) * limit : 0;
    options.limit = limit;
  }

  if (sortBy) {
    options.order = [[sortBy, 'ASC']];
  }

  // fetch list of users
  const users = await User.findAll(options);
  console.log(users);

  return {
    users
  };
};

const createUser = async (attributes: any): Promise<any> => {
  const { name, address, email, phone, password } = attributes;

  const newProduct = await User.create({
    name,
    address,
    email,
    phone,
    password
  });

  return {
    ...newProduct.toJSON()
  };
};

const fetchUser = async (attributes: any): Promise<any> => {
  const { id } = attributes;

  // fetch list of products
  const user = await User.findAll({
    where: {
      id: id
    }
  });

  return {
    user
  };
};

const fetchUserProducts = async (attributes: any): Promise<any> => {
  const { id } = attributes;

  const response = await axios.get(`http://localhost:7001/products/user/${id}`);
  const products = response.data.data;
  return products;
};

const fetchUserOrders = async (attributes: any): Promise<any> => {
  const { id } = attributes;

  const response = await axios.get(`http://localhost:7002/orders/user/${id}`);
  const orders = response.data.data;
  return {
    ...orders
  };
};

const updateUser = async (attributes: any): Promise<any> => {
  const { id } = attributes;

  // check whether product with it exist
  await checkRecordExistByAttribute(User, { id });

  // Omit the null fields from attribute
  const validUpdateAttributes = Object.keys(attributes)
    .filter(key => attributes[key] && key !== 'id')
    .reduce(
      (obj, validKey) => ({
        ...obj,
        [validKey]: attributes[validKey]
      }),
      {}
    );

  // Update User
  const updatedUser = await User.update(
    { ...validUpdateAttributes, updatedAt: Date.now() },
    {
      where: {
        id
      }
    }
  );

  return {
    id,
    ...validUpdateAttributes,
    updatedUser
  };
};

const deleteUser = async (attributes: any): Promise<any> => {
  const { id } = attributes;

  // check whether product with it exist
  await checkRecordExistByAttribute(User, { id });

  // Update Product
  await User.destroy({
    where: {
      id
    }
  });

  return {
    id
  };
};

function getUsers(): Promise<any> {
  return new Promise(resolve => {
    const result = [
      {
        firstName: 'john',
        lastName: 'doe',
        email: 'johndoe@gmail.com',
        age: 29
      },
      {
        firstName: 'alex',
        lastName: 'robert',
        email: 'alexrobert@gmail.com',
        age: 34
      }
    ];
    resolve(result);
  });
}

export default {
  fetchAllUsers,
  createUser,
  fetchUser,
  updateUser,
  deleteUser,
  fetchUserProducts,
  fetchUserOrders
};

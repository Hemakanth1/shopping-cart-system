/* eslint-disable import/no-unresolved */
import { Op } from 'sequelize';
import Order from '../models/Order';
import utilities from 'hemakanth-package-utilities';
const { checkRecordExistByAttribute } = utilities;

const fetchAllOrders = async (attributes: any): Promise<any> => {
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
  const orders = await Order.findAll(options);

  return {
    orders
  };
};

const createOrder = async (attributes: any): Promise<any> => {
  const { user_id, status, total_amount } = attributes;
  const date_and_time = new Date();
  const newOrder = await Order.create({
    user_id,
    date_and_time,
    status,
    total_amount
  });
  return {
    ...newOrder.toJSON()
  };
};

const fetchOrder = async (attributes: any): Promise<any> => {
  const { id } = attributes;

  // fetch list of products
  const order = await Order.findAll({
    where: {
      id: id
    }
  });

  return {
    order
  };
};

const fetchOrderByUserId = async (attributes: any): Promise<any> => {
  const { user_id } = attributes;

  // fetch list of products
  const orders = await Order.findAll({
    where: {
      user_id: user_id
    }
  });

  return {
    orders
  };
};

const updateOrder = async (attributes: any): Promise<any> => {
  const { id } = attributes;

  // check whether product with it exist
  await checkRecordExistByAttribute(Order, { id });

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
  const updatedOrder = await Order.update(
    { ...validUpdateAttributes, updatedAt: Date.now() },
    {
      where: {
        id
      }
    }
  );

  return {
    id,
    ...validUpdateAttributes
  };
};

const deleteOrder = async (attributes: any): Promise<any> => {
  const { id } = attributes;

  // check whether product with it exist
  await checkRecordExistByAttribute(Order, { id });

  // Update Product
  await Order.destroy({
    where: {
      id
    }
  });

  return {
    id
  };
};

export default {
  fetchAllOrders,
  createOrder,
  fetchOrder,
  updateOrder,
  deleteOrder,
  fetchOrderByUserId
};

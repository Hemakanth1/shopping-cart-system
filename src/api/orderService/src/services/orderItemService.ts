/* eslint-disable import/no-unresolved */
import { Op } from 'sequelize';
import Order_Item from '../models/Order_Items';
import utilities from 'hemakanth-package-utilities';
const { checkRecordExistByAttribute } = utilities;
import * as dotenv from 'dotenv-flow';

dotenv.config();

const fetchAllOrderItems = async (attributes: any): Promise<any> => {
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

  const order_items = await Order_Item.findAll(options);

  return {
    order_items
  };
};

const createOrderItem = async (attributes: any): Promise<any> => {
  console.log(attributes);
  const { order_id, product_id, quantity, total_price } = attributes;
  const newOrderItem = await Order_Item.create({
    order_id,
    product_id,
    quantity,
    total_price
  });
  return {
    ...newOrderItem.toJSON()
  };
};

const fetchOrderItem = async (attributes: any): Promise<any> => {
  const { order_item_id } = attributes;

  const order_item = await Order_Item.findAll({
    where: {
      order_item_id: order_item_id
    }
  });

  return {
    order_item
  };
};

const fetchOrderItemsByOrderId = async (attributes: any): Promise<any> => {
  const { order_id } = attributes;

  // fetch list of products
  const order_items = await Order_Item.findAll({
    where: {
      order_id: order_id
    }
  });

  return {
    order_items
  };
};

const updateOrderItem = async (attributes: any): Promise<any> => {
  const { order_item_id } = attributes;

  // check whether product with it exist
  await checkRecordExistByAttribute(Order_Item, { order_item_id });

  // Omit the null fields from attribute
  const validUpdateAttributes = Object.keys(attributes)
    .filter(key => attributes[key] && key !== 'order_item_id')
    .reduce(
      (obj, validKey) => ({
        ...obj,
        [validKey]: attributes[validKey]
      }),
      {}
    );

  // Update User
  const updatedOrderItem = await Order_Item.update(
    { ...validUpdateAttributes, updatedAt: Date.now() },
    {
      where: {
        order_item_id
      }
    }
  );

  return {
    order_item_id,
    ...validUpdateAttributes
  };
};

const deleteOrderItem = async (attributes: any): Promise<any> => {
  const { order_item_id } = attributes;

  // check whether product with it exist
  await checkRecordExistByAttribute(Order_Item, { order_item_id });

  // Update Product
  await Order_Item.destroy({
    where: {
      order_item_id
    }
  });

  return {
    order_item_id
  };
};

export default {
  fetchAllOrderItems,
  createOrderItem,
  fetchOrderItem,
  updateOrderItem,
  deleteOrderItem,
  fetchOrderItemsByOrderId
};

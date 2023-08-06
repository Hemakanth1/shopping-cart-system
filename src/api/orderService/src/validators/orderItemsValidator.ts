/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import { Request } from 'express';
import utilities from 'hemakanth-package-utilities';
const { validate } = utilities;
import {
  fetchAllOrderItemsSchema,
  fetchOrderItemSchema,
  addNewOrderItemSchema,
  updateOrderItemSchema,
  deleteOrderItemSchema,
  fetchOrderItemsByOrderIdSchema
} from '../schema/orderItemsSchema';

const fetchAllOrderItems = async (req: Request): Promise<any> => {
  const { page, limit, sortBy } = req.query;

  const attributes = {
    page: page ? parseInt(page.toString(), 10) : null,
    limit: limit ? parseInt(limit.toString(), 10) : null,
    sortBy: sortBy || null
  };

  return validate(fetchAllOrderItemsSchema(), attributes);
};

const fetchOrderItem = async (req: Request): Promise<any> => {
  const attributes = {
    order_item_id: Number.isNaN(req.params.order_item_id)
      ? req.params.order_item_id
      : parseInt(req.params.order_item_id, 10)
  };

  return validate(fetchOrderItemSchema(), attributes);
};
const fetchOrderItemsByOrderId = async (req: Request): Promise<any> => {
  const attributes = {
    order_id: req.params.order_id
  };

  return validate(fetchOrderItemsByOrderIdSchema(), attributes);
};

const createOrderItem = async (req: Request): Promise<any> => {
  const { order_id, product_id, quantity, total_price } = req.body;

  const attributes = {
    order_id,
    product_id,
    quantity,
    total_price
  };
  return validate(addNewOrderItemSchema(), attributes);
};

const updateOrderItem = async (req: Request): Promise<any> => {
  const { order_id, product_id, quantity, total_price } = req.body;

  const attributes = {
    order_item_id: parseInt(req.params.order_item_id, 10),
    order_id,
    product_id,
    quantity,
    total_price
  };

  return validate(updateOrderItemSchema(), attributes);
};

const deleteOrderItem = async (req: Request): Promise<any> => {
  const attributes = {
    order_item_id: parseInt(req.params.id, 10)
  };

  return validate(deleteOrderItemSchema(), attributes);
};

export default {
  fetchAllOrderItems,
  createOrderItem,
  fetchOrderItem,
  updateOrderItem,
  deleteOrderItem,
  fetchOrderItemsByOrderId
};

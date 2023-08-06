/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import { Request } from 'express';
import utilities from 'hemakanth-package-utilities';
const { validate } = utilities;
import {
  fetchAllOrdersSchema,
  fetchOrderSchema,
  addNewOrderSchema,
  updateOrderSchema,
  deleteOrderSchema,
  fetchOrderByUserIdSchema,
  placeNewOrderSchema
} from '../schema/orderSchema';

const fetchAllOrders = async (req: Request): Promise<any> => {
  const { page, limit, sortBy } = req.query;

  const attributes = {
    page: page ? parseInt(page.toString(), 10) : null,
    limit: limit ? parseInt(limit.toString(), 10) : null,
    sortBy: sortBy || null
  };

  return validate(fetchAllOrdersSchema(), attributes);
};

const fetchOrder = async (req: Request): Promise<any> => {
  const attributes = {
    id: Number.isNaN(req.params.id)
      ? req.params.id
      : parseInt(req.params.id, 10)
  };

  return validate(fetchOrderSchema(), attributes);
};
const fetchOrderByUserId = async (req: Request): Promise<any> => {
  const attributes = {
    user_id: req.params.user_id
  };

  return validate(fetchOrderByUserIdSchema(), attributes);
};

const createOrder = async (req: Request): Promise<any> => {
  const { user_id, status, total_amount } = req.body;

  const attributes = {
    user_id,
    status,
    total_amount
  };
  return validate(addNewOrderSchema(), attributes);
};

const placeNewOrder = async (req: Request): Promise<any> => {
  const { user_id, status, total_amount, order_items } = req.body;

  const attributes = {
    user_id,
    status,
    order_items
  };
  return validate(placeNewOrderSchema(), attributes);
};

const updateOrder = async (req: Request): Promise<any> => {
  const { user_id, status, total_amount } = req.body;

  const attributes = {
    id: parseInt(req.params.id, 10),
    user_id,
    status,
    total_amount
  };

  return validate(updateOrderSchema(), attributes);
};

const deleteOrder = async (req: Request): Promise<any> => {
  const attributes = {
    id: parseInt(req.params.id, 10)
  };

  return validate(deleteOrderSchema(), attributes);
};

export default {
  fetchAllOrders,
  createOrder,
  fetchOrder,
  updateOrder,
  deleteOrder,
  fetchOrderByUserId,
  placeNewOrder
};

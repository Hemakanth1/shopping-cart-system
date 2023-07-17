/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import controller from '../controller';
import orderValidator from '../validators/orderValidator';
import orderService from '../services/orderService';

const fetchAllOrders = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: orderValidator.fetchAllOrders,
    service: orderService.fetchAllOrders
  });
};

const fetchOrder = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: orderValidator.fetchOrder,
    service: orderService.fetchOrder
  });
};
const fetchOrderByUserId = async (
  req: Request,
  res: Response
): Promise<any> => {
  await controller(req, res, {
    validator: orderValidator.fetchOrderByUserId,
    service: orderService.fetchOrderByUserId
  });
};
const createOrder = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: orderValidator.createOrder,
    service: orderService.createOrder
  });
};

const updateOrder = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: orderValidator.updateOrder,
    service: orderService.updateOrder
  });
};

const deleteOrder = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: orderValidator.deleteOrder,
    service: orderService.deleteOrder
  });
};
export default {
  fetchAllOrders,
  createOrder,
  fetchOrder,
  updateOrder,
  deleteOrder,
  fetchOrderByUserId
};

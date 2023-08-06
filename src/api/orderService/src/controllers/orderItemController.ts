/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import controller from '../controller';
import orderItemValidator from '../validators/orderItemsValidator';
import orderItemService from '../services/orderItemService';

const fetchAllOrderItems = async (
  req: Request,
  res: Response
): Promise<any> => {
  await controller(req, res, {
    validator: orderItemValidator.fetchAllOrderItems,
    service: orderItemService.fetchAllOrderItems
  });
};

const fetchOrderItem = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: orderItemValidator.fetchOrderItem,
    service: orderItemService.fetchOrderItem
  });
};
const fetchOrderItemsByOrderId = async (
  req: Request,
  res: Response
): Promise<any> => {
  await controller(req, res, {
    validator: orderItemValidator.fetchOrderItemsByOrderId,
    service: orderItemService.fetchOrderItemsByOrderId
  });
};
const createOrderItem = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: orderItemValidator.createOrderItem,
    service: orderItemService.createOrderItem
  });
};

const updateOrderItem = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: orderItemValidator.updateOrderItem,
    service: orderItemService.updateOrderItem
  });
};

const deleteOrderItem = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: orderItemValidator.deleteOrderItem,
    service: orderItemService.deleteOrderItem
  });
};
export default {
  fetchAllOrderItems,
  createOrderItem,
  fetchOrderItem,
  updateOrderItem,
  deleteOrderItem,
  fetchOrderItemsByOrderId
};

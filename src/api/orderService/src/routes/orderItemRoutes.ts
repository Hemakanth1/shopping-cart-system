/* eslint-disable import/no-unresolved */
import express, { Router } from 'express';
import orderItemController from '../controllers/orderItemController';

const router: Router = express.Router();

router
  .get('/', orderItemController.fetchAllOrderItems)
  .post('/', orderItemController.createOrderItem)
  .get('/:order_item_id', orderItemController.fetchOrderItem)
  .get('/order/:order_id', orderItemController.fetchOrderItemsByOrderId)
  .patch('/:order_item_id', orderItemController.updateOrderItem)
  .delete('/:order_item_id', orderItemController.deleteOrderItem);

export default router;

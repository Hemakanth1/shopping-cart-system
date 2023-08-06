/* eslint-disable import/no-unresolved */
import express, { Router } from 'express';
import orderController from '../controllers/orderController';

const router: Router = express.Router();

router
  .get('/', orderController.fetchAllOrders)
  .post('/', orderController.createOrder)
  .post('/place_order', orderController.placeNewOrder)
  .get('/:id', orderController.fetchOrder)
  .get('/user/:user_id', orderController.fetchOrderByUserId)
  .patch('/:id', orderController.updateOrder)
  .delete('/:id', orderController.deleteOrder);

export default router;

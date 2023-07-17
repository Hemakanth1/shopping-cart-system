/* eslint-disable import/no-unresolved */
import express, { Router } from 'express';
import orderController from '../controllers/paymentController';

const router: Router = express.Router();

router
  .get('/', orderController.fetchAllPayments)
  .post('/', orderController.createPayment)
  .get('/:id', orderController.fetchPayment)
  .patch('/:id', orderController.updatePayment)
  .delete('/:id', orderController.deletePayment);

export default router;

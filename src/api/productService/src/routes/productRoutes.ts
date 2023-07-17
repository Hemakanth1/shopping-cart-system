/* eslint-disable import/no-unresolved */
import express, { Router } from 'express';
import productController from '../controllers/productController';

const router: Router = express.Router();

router
  .get('/', productController.fetchAllProducts)
  .post('/', productController.createProduct)
  .get('/:id', productController.fetchProduct)
  .get('/category/:category', productController.fetchProductByCategory)
  .get('/make/:make', productController.fetchProductByMake)
  .get('/user/:user_id', productController.fetchProductByUserId)
  .patch('/:id', productController.updateProduct)
  .delete('/:id', productController.deleteProduct);

export default router;

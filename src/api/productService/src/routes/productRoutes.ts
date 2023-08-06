/* eslint-disable import/no-unresolved */
import express, { Router } from 'express';
import productController from '../controllers/productController';
import multer from 'multer';

const router: Router = express.Router();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/products'); // Save product images to the 'uploads/products' directory
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

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

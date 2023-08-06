/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import controller from '../controller';
import productValidator from '../validators/productValidator';
import productService from '../services/productService';

const fetchAllProducts = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: productValidator.fetchAllProducts,
    service: productService.fetchAllProducts
  });
};

const fetchProduct = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: productValidator.fetchProduct,
    service: productService.fetchProduct
  });
};

const fetchProductByCategory = async (
  req: Request,
  res: Response
): Promise<any> => {
  await controller(req, res, {
    validator: productValidator.fetchProductByCategory,
    service: productService.fetchProductByCategory
  });
};

const fetchProductByMake = async (
  req: Request,
  res: Response
): Promise<any> => {
  await controller(req, res, {
    validator: productValidator.fetchProductByMake,
    service: productService.fetchProductByMake
  });
};

const fetchProductByUserId = async (
  req: Request,
  res: Response
): Promise<any> => {
  await controller(req, res, {
    validator: productValidator.fetchProductByUserId,
    service: productService.fetchProductByUserId
  });
};

const createProduct = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: productValidator.createProduct,
    service: productService.createProduct
  });
};

const updateProduct = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: productValidator.updateProduct,
    service: productService.updateProduct
  });
};

const deleteProduct = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: productValidator.deleteProduct,
    service: productService.deleteProduct
  });
};
export default {
  fetchAllProducts,
  createProduct,
  fetchProduct,
  updateProduct,
  deleteProduct,
  fetchProductByCategory,
  fetchProductByMake,
  fetchProductByUserId
};

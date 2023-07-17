/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import { Request } from 'express';
import utilities from 'hemakanth-package-utilities';
const { validate } = utilities;
import {
  fetchAllProductsSchema,
  fetchProductSchema,
  addNewProductSchema,
  updateProductSchema,
  deleteProductSchema,
  fetchProductByCategorySchema,
  fetchProductByMakeSchema,
  fetchProductByUserIdSchema
} from '../schema/productSchema';

const fetchAllProducts = async (req: Request): Promise<any> => {
  const { page, limit, sortBy } = req.query;

  const attributes = {
    page: page ? parseInt(page.toString(), 10) : null,
    limit: limit ? parseInt(limit.toString(), 10) : null,
    sortBy: sortBy || null
  };

  return validate(fetchAllProductsSchema(), attributes);
};

const fetchProduct = async (req: Request): Promise<any> => {
  const attributes = {
    id: Number.isNaN(req.params.id)
      ? req.params.id
      : parseInt(req.params.id, 10)
  };

  return validate(fetchProductSchema(), attributes);
};

const fetchProductByCategory = async (req: Request): Promise<any> => {
  const attributes = {
    category: req.params.category
  };

  return validate(fetchProductByCategorySchema(), attributes);
};

const fetchProductByMake = async (req: Request): Promise<any> => {
  const attributes = {
    make: req.params.make
  };

  return validate(fetchProductByMakeSchema(), attributes);
};

const fetchProductByUserId = async (req: Request): Promise<any> => {
  const attributes = {
    user_id: req.params.user_id
  };

  return validate(fetchProductByUserIdSchema(), attributes);
};

const createProduct = async (req: Request): Promise<any> => {
  const {
    name,
    category,
    description,
    color,
    price,
    make,
    model,
    imgUrl,
    no_items_available,
    user_id
  } = req.body;

  const attributes = {
    name,
    category,
    description,
    color,
    price,
    make,
    model,
    imgUrl,
    no_items_available,
    user_id
  };
  return validate(addNewProductSchema(), attributes);
};

const updateProduct = async (req: Request): Promise<any> => {
  const {
    name,
    category,
    description,
    color,
    price,
    make,
    model,
    imgUrl,
    no_items_available,
    user_id
  } = req.body;

  const attributes = {
    id: parseInt(req.params.id, 10),
    name,
    category,
    description,
    color,
    price,
    make,
    model,
    imgUrl,
    no_items_available,
    user_id
  };

  return validate(updateProductSchema(), attributes);
};

const deleteProduct = async (req: Request): Promise<any> => {
  const attributes = {
    id: parseInt(req.params.id, 10)
  };

  return validate(deleteProductSchema(), attributes);
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

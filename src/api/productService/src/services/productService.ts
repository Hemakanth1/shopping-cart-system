/* eslint-disable import/no-unresolved */
import { Op } from 'sequelize';
import Product from '../models/Product';
import utilities from 'hemakanth-package-utilities';
const { checkRecordExistByAttribute } = utilities;
import * as dotenv from 'dotenv-flow';

dotenv.config();

const fetchAllProducts = async (attributes: any): Promise<any> => {
  const {
    page,
    limit,
    sortBy
  }: { page: number; limit: number; sortBy: string } = attributes;

  // prepare conditions
  const options: any = {};
  if (limit) {
    options.offset = page ? (page - 1) * limit : 0;
    options.limit = limit;
  }

  if (sortBy) {
    options.order = [[sortBy, 'ASC']];
  }

  // fetch list of users
  const products = await Product.findAll(options);

  return { products };
};

const createProduct = async (attributes: any): Promise<any> => {
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
  } = attributes;

  const newProduct = await Product.create({
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
  });
  return {
    ...newProduct.toJSON()
  };
};

const fetchProduct = async (attributes: any): Promise<any> => {
  const { id } = attributes;

  // fetch list of products
  const product = await Product.findAll({
    where: {
      id: id
    }
  });

  return {
    product
  };
};

const fetchProductByCategory = async (attributes: any): Promise<any> => {
  const { category } = attributes;

  // fetch list of products
  const product = await Product.findAll({
    where: {
      category: category
    }
  });

  return {
    product
  };
};

const fetchProductByMake = async (attributes: any): Promise<any> => {
  const { make } = attributes;

  // fetch list of products
  const product = await Product.findAll({
    where: {
      make: make
    }
  });

  return {
    product
  };
};

const fetchProductByUserId = async (attributes: any): Promise<any> => {
  const { user_id } = attributes;

  // fetch list of products
  const products = await Product.findAll({
    where: {
      user_id: user_id
    }
  });

  return {
    products
  };
};

const updateProduct = async (attributes: any): Promise<any> => {
  const { id } = attributes;

  // check whether product with it exist
  await checkRecordExistByAttribute(Product, { id });

  // Omit the null fields from attribute
  const validUpdateAttributes = Object.keys(attributes)
    .filter(key => attributes[key] && key !== 'id')
    .reduce(
      (obj, validKey) => ({
        ...obj,
        [validKey]: attributes[validKey]
      }),
      {}
    );

  // Update User
  const updatedProduct = await Product.update(
    { ...validUpdateAttributes, updatedAt: Date.now() },
    {
      where: {
        id
      }
    }
  );

  return {
    id,
    ...validUpdateAttributes
  };
};

const deleteProduct = async (attributes: any): Promise<any> => {
  const { id } = attributes;

  // check whether product with it exist
  await checkRecordExistByAttribute(Product, { id });

  // Update Product
  await Product.destroy({
    where: {
      id
    }
  });

  return {
    id
  };
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

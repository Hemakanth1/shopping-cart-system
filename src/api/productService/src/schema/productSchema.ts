import Joi, { ObjectSchema } from 'joi';

const fetchAllProductsSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    page: Joi.number().allow(null),
    limit: Joi.number().allow(null),
    sortBy: Joi.string().allow(null)
  });

const fetchProductSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    //cacheKey: Joi.string(),
    id: Joi.alternatives(Joi.string(), Joi.number()).required()
  });

const fetchProductByCategorySchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    //cacheKey: Joi.string(),
    category: Joi.string().min(3).max(100).required()
  });

const fetchProductByMakeSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    //cacheKey: Joi.string(),
    make: Joi.string().min(1).max(100).required()
  });

const fetchProductByUserIdSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    //cacheKey: Joi.string(),
    user_id: Joi.alternatives(Joi.string(), Joi.number()).required()
  });

const addNewProductSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    name: Joi.string().min(3).max(100).required(),
    category: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(3).max(1000).required(),
    color: Joi.string().required(),
    make: Joi.string().min(1).max(100).required(),
    model: Joi.string().min(1).max(80).required(),
    imgUrl: Joi.string().min(1).max(80).required(),
    price: Joi.number().required(),
    no_items_available: Joi.number().required(),
    user_id: Joi.number().required()
  });

const updateProductSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    id: Joi.number(),
    name: Joi.string().min(3).max(100),
    category: Joi.string().min(3).max(100),
    description: Joi.string().min(3).max(1000),
    color: Joi.string(),
    make: Joi.string().min(1).max(100),
    model: Joi.string().min(1).max(80),
    imgUrl: Joi.string().min(1).max(80),
    price: Joi.number(),
    no_items_available: Joi.number(),
    user_id: Joi.number()
  });

const deleteProductSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    id: Joi.number().required()
  });

export {
  fetchAllProductsSchema,
  fetchProductSchema,
  addNewProductSchema,
  updateProductSchema,
  deleteProductSchema,
  fetchProductByCategorySchema,
  fetchProductByMakeSchema,
  fetchProductByUserIdSchema
};

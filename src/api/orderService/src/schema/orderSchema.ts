import Joi, { ObjectSchema } from 'joi';

const fetchAllOrdersSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    page: Joi.number().allow(null),
    limit: Joi.number().allow(null),
    sortBy: Joi.string().allow(null)
  });

const fetchOrderSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    //cacheKey: Joi.string(),
    id: Joi.alternatives(Joi.string(), Joi.number()).required()
  });
const fetchOrderByUserIdSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    //cacheKey: Joi.string(),
    user_id: Joi.alternatives(Joi.string(), Joi.number()).required()
  });
const addNewOrderSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    user_id: Joi.number().required(),
    status: Joi.string().required(),
    total_amount: Joi.number().required()
  });

const updateOrderSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    user_id: Joi.number().required(),
    status: Joi.string(),
    total_amount: Joi.number()
  });

const deleteOrderSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    id: Joi.number().required()
  });

export {
  fetchAllOrdersSchema,
  fetchOrderSchema,
  addNewOrderSchema,
  updateOrderSchema,
  deleteOrderSchema,
  fetchOrderByUserIdSchema
};

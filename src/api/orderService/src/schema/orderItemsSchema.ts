import Joi, { ObjectSchema } from 'joi';

const fetchAllOrderItemsSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    page: Joi.number().allow(null),
    limit: Joi.number().allow(null),
    sortBy: Joi.string().allow(null)
  });

const fetchOrderItemSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    order_item_id: Joi.alternatives(Joi.string(), Joi.number()).required()
  });

const fetchOrderItemsByOrderIdSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    order_id: Joi.alternatives(Joi.string(), Joi.number()).required()
  });

const addNewOrderItemSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    order_id: Joi.number().required(),
    product_id: Joi.number().required(),
    quantity: Joi.number().required(),
    total_price: Joi.number().required()
  });

const updateOrderItemSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    order_id: Joi.number(),
    product_id: Joi.number(),
    quantity: Joi.number(),
    total_price: Joi.number()
  });

const deleteOrderItemSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    order_item_id: Joi.number().required()
  });

export {
  fetchAllOrderItemsSchema,
  fetchOrderItemSchema,
  addNewOrderItemSchema,
  updateOrderItemSchema,
  deleteOrderItemSchema,
  fetchOrderItemsByOrderIdSchema
};

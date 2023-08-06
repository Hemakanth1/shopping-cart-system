import Joi, { ObjectSchema } from 'joi';

const fetchAllPaymentsSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    page: Joi.number().allow(null),
    limit: Joi.number().allow(null),
    sortBy: Joi.string().allow(null)
  });

const fetchPaymentSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    //cacheKey: Joi.string(),
    id: Joi.alternatives(Joi.string(), Joi.number()).required()
  });

const addNewPaymentSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    order_id: Joi.number().required(),
    amount: Joi.number().required(),
    provider: Joi.string().required(),
    status: Joi.string().required()
  });

const updatePaymentSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    order_id: Joi.number(),
    amount: Joi.number(),
    provider: Joi.string(),
    status: Joi.string()
  });

const deletePaymentSchema = (): ObjectSchema<any> =>
  Joi.object().keys({
    id: Joi.number().required()
  });

export {
  fetchAllPaymentsSchema,
  fetchPaymentSchema,
  addNewPaymentSchema,
  updatePaymentSchema,
  deletePaymentSchema
};

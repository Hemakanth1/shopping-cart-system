/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import { Request } from 'express';
import utilities from 'hemakanth-package-utilities';
const { validate } = utilities;
import {
  fetchAllPaymentsSchema,
  fetchPaymentSchema,
  addNewPaymentSchema,
  updatePaymentSchema,
  deletePaymentSchema
} from '../schema/paymentSchema';

const fetchAllPayments = async (req: Request): Promise<any> => {
  const { page, limit, sortBy } = req.query;

  const attributes = {
    page: page ? parseInt(page.toString(), 10) : null,
    limit: limit ? parseInt(limit.toString(), 10) : null,
    sortBy: sortBy || null
  };

  return validate(fetchAllPaymentsSchema(), attributes);
};

const fetchPayment = async (req: Request): Promise<any> => {
  const attributes = {
    id: Number.isNaN(req.params.id)
      ? req.params.id
      : parseInt(req.params.id, 10)
  };

  return validate(fetchPaymentSchema(), attributes);
};

const createPayment = async (req: Request): Promise<any> => {
  const { order_id, amount, provider, status } = req.body;

  const attributes = {
    order_id,
    amount,
    provider,
    status
  };
  return validate(addNewPaymentSchema(), attributes);
};

const updatePayment = async (req: Request): Promise<any> => {
  const { order_id, amount, provider, status } = req.body;

  const attributes = {
    id: parseInt(req.params.id, 10),
    order_id,
    amount,
    provider,
    status
  };

  return validate(updatePaymentSchema(), attributes);
};

const deletePayment = async (req: Request): Promise<any> => {
  const attributes = {
    id: parseInt(req.params.id, 10)
  };

  return validate(deletePaymentSchema(), attributes);
};

export default {
  fetchAllPayments,
  createPayment,
  fetchPayment,
  updatePayment,
  deletePayment
};

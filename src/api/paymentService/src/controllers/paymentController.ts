/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import controller from '../controller';
import paymentValidator from '../validators/paymentValidator';
import paymentService from '../services/paymentService';

const fetchAllPayments = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: paymentValidator.fetchAllPayments,
    service: paymentService.fetchAllPayments
  });
};

const fetchPayment = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: paymentValidator.fetchPayment,
    service: paymentService.fetchPayment
  });
};

const createPayment = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: paymentValidator.createPayment,
    service: paymentService.createPayment
  });
};

const updatePayment = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: paymentValidator.updatePayment,
    service: paymentService.updatePayment
  });
};

const deletePayment = async (req: Request, res: Response): Promise<any> => {
  await controller(req, res, {
    validator: paymentValidator.deletePayment,
    service: paymentService.deletePayment
  });
};
export default {
  fetchAllPayments,
  createPayment,
  fetchPayment,
  updatePayment,
  deletePayment
};

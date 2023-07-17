/* eslint-disable import/no-unresolved */
import { Op } from 'sequelize';
import Payment from '../models/Payment';
import utilities from 'hemakanth-package-utilities';
const { checkRecordExistByAttribute } = utilities;

const fetchAllPayments = async (attributes: any): Promise<any> => {
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
  const payments = await Payment.findAll(options);

  return {
    payments
  };
};

const createPayment = async (attributes: any): Promise<any> => {
  const { order_id, amount, provider, status } = attributes;
  const date_and_time = new Date();
  const newPayment = await Payment.create({
    order_id,
    amount,
    date_and_time,
    provider,
    status
  });
  return {
    ...newPayment.toJSON()
  };
};

const fetchPayment = async (attributes: any): Promise<any> => {
  const { id } = attributes;

  // fetch list of products
  const payment = await Payment.findAll({
    where: {
      id: id
    }
  });

  return {
    payment
  };
};

const updatePayment = async (attributes: any): Promise<any> => {
  const { id } = attributes;

  // check whether product with it exist
  await checkRecordExistByAttribute(Payment, { id });

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
  const updatedPayment = await Payment.update(
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

const deletePayment = async (attributes: any): Promise<any> => {
  const { id } = attributes;

  // check whether product with it exist
  await checkRecordExistByAttribute(Payment, { id });

  // Update Product
  await Payment.destroy({
    where: {
      id
    }
  });

  return {
    id
  };
};

export default {
  fetchAllPayments,
  createPayment,
  fetchPayment,
  updatePayment,
  deletePayment
};

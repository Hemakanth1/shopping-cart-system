/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable import/no-unresolved */
import axios from 'axios';
import { Sequelize, DataTypes } from 'sequelize';
import utilities from 'hemakanth-package-utilities';
import Order from '../models/Order';
import Order_Item from '../models/Order_Items';
import * as dotenv from 'dotenv-flow';

dotenv.config();

const { dbHelper } = utilities;
const configurations = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  DATABASE: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT,
  DIALECT: 'mysql'
};
const db = dbHelper(configurations);

export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  color: string;
  price: number;
  make: string;
  model: string;
  imgUrl: string;
  no_items_available: number;
  user_id: number;
};

export type OrderItems = {
  item: Product;
  quantity: number;
};

export const placeOrder = async (attributes: any): Promise<any> => {
  const { user_id, status, total_amount, order_items } = attributes;
  const date_and_time = new Date();

  let productIds: Array<Number> = [];
  let amount = 0;
  const paymentStatus = true;
  for (const order_item of order_items) {
    const productResponse = await axios.get(
      `${process.env.PRODUCT_API_ENDPOINT}/products/${order_item.id}`
    );

    const { no_items_available } = productResponse.data.data.product[0];
    if (no_items_available < order_item.quantity) {
      //   return {
      //     msg: `There are only ${no_items_available} ${order_item.name} available.`
      //   };
      throw {
        message: `There are only ${no_items_available} ${order_item.name} available.`,
        code: 400
      };
    }
    amount += order_item.price * order_item.quantity;
  }

  if (paymentStatus) {
    const transaction = await db.transaction();

    try {
      const newOrder = await Order.create(
        {
          user_id,
          date_and_time,
          status,
          total_amount: amount
        },
        { transaction }
      );
      const newOrderId = newOrder.toJSON().id;
      for (const order_item of order_items) {
        const productResponse = await axios.get(
          `${process.env.PRODUCT_API_ENDPOINT}/products/${order_item.id}`
        );

        const { no_items_available } = productResponse.data.data.product[0];
        const updatedProduct = await axios.patch(
          `${process.env.PRODUCT_API_ENDPOINT}/products/${order_item.id}`,
          { no_items_available: no_items_available - order_item.quantity }
        );

        const newOrderItem = await Order_Item.create({
          order_id: newOrderId,
          product_id: order_item.id,
          quantity: order_item.quantity,
          total_price: order_item.quantity * order_item.price
        });
      }

      await transaction.commit();

      console.log('Transaction committed successfully.');
    } catch (error) {
      await transaction.rollback();
      console.error('Error occurred. Transaction rolled back:', error);
      return { error };
    }

    return {
      result: 'SUCCESS'
    };
  } else {
    throw {
      message: 'Payment Error',
      code: 400
    };
  }
};

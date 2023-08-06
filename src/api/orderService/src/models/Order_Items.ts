/* eslint-disable import/no-unresolved */

import { DataTypes } from 'sequelize';

import utilities from 'hemakanth-package-utilities';
import * as dotenv from 'dotenv-flow';

dotenv.config();

const configurations = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  DATABASE: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT,
  DIALECT: 'mysql'
};

const { dbHelper } = utilities;
const db = dbHelper(configurations);

const Order_Item = db.define(
  'order_items',
  {
    order_item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    order_id: {
      type: DataTypes.INTEGER
    },
    product_id: {
      type: DataTypes.INTEGER
    },
    quantity: {
      type: DataTypes.INTEGER
    },
    total_price: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  },
  {}
);

Order_Item.sync();
export default Order_Item;

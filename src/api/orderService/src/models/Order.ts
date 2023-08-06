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

const Order = db.define(
  'order',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER
    },
    date_and_time: {
      type: DataTypes.TIME
    },
    status: {
      type: DataTypes.STRING(100)
    },
    total_amount: {
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

Order.sync();
export default Order;

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

const Payment = db.define(
  'payment',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    order_id: {
      type: DataTypes.INTEGER
    },
    amount: {
      type: DataTypes.INTEGER
    },
    date_and_time: {
      type: DataTypes.DATE
    },
    provider: {
      type: DataTypes.STRING(100)
    },
    status: {
      type: DataTypes.STRING(100)
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

Payment.sync();
export default Payment;

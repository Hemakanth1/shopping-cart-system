/* eslint-disable import/no-unresolved */

import { DataTypes } from 'sequelize';
import utilities from 'hemakanth-package-utilities';
import configs from '../config/db-config';
const { dbHelper } = utilities;
const db = dbHelper(configs);

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

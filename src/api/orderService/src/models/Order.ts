/* eslint-disable import/no-unresolved */

import { DataTypes } from 'sequelize';

import utilities from 'hemakanth-package-utilities';
import configs from '../config/db-config';

const { dbHelper } = utilities;
const db = dbHelper(configs);

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

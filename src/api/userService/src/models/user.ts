/* eslint-disable import/no-unresolved */

import { DataTypes } from 'sequelize';
import utilities from 'hemakanth-package-utilities';
import configs from '../config/db-config';
const { dbHelper } = utilities;
const db = dbHelper(configs);

const User = db.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(1000)
    },
    email: {
      type: DataTypes.STRING(1000)
    },
    phone: {
      type: DataTypes.STRING(1000)
    },
    password: {
      type: DataTypes.STRING(1000)
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

// User.sync()
export default User;

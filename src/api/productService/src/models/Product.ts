/* eslint-disable import/no-unresolved */

import { DataTypes } from 'sequelize';
import utilities from 'hemakanth-package-utilities';
import configs from '../config/db-config';

const { dbHelper } = utilities;
const db = dbHelper(configs);

const Product = db.define(
  'product',
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
    category: {
      type: DataTypes.STRING(100)
    },
    description: {
      type: DataTypes.STRING(1000)
    },
    color: {
      type: DataTypes.STRING(1000)
    },
    price: {
      type: DataTypes.INTEGER
    },
    make: {
      type: DataTypes.STRING(1000)
    },
    model: {
      type: DataTypes.STRING(1000)
    },
    imgUrl: {
      type: DataTypes.STRING(1000)
    },
    no_items_available: {
      type: DataTypes.INTEGER
    },
    user_id: {
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

Product.sync();
export default Product;

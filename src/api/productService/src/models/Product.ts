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
console.log('hello');
const db = dbHelper(configurations);

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

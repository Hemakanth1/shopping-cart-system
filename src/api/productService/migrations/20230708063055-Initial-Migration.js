/* eslint-disable no-undef */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     */
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      category: {
        type: Sequelize.STRING(100)
      },
      description: {
        type: Sequelize.STRING(1000)
      },
      color: {
        type: Sequelize.STRING(1000)
      },
      price: {
        type: Sequelize.INTEGER
      },
      make: {
        type: Sequelize.STRING(1000)
      },
      model: {
        type: Sequelize.STRING(1000)
      },
      imgUrl: {
        type: Sequelize.STRING(1000)
      },
      no_items_available: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

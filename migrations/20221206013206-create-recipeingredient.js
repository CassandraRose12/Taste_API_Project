'use strict'

const { DataTypes } = require("sequelize")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('recipe_ingredients', {
        recipe_ingredient_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      recipe_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ingredient_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    qty: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    unit: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('recipe_ingredients')
  }
}
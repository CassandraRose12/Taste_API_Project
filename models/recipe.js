'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipe.init({
    recipe_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cusine: {
        type: DataTypes.STRING,
        allowNull: false
    },
    difficulty: {
        type: DataTypes.SMALLINT,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Recipe',
    tableName: 'recipes',
    timestamps: false
  });
  return Recipe;
};
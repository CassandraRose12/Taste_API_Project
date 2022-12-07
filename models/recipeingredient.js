'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecipeIngredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Recipe, Ingredient, Measurement }) {
      // recipe, ingredient, measurement
    //   RecipeIngredient.belongsTo(Recipe, {
    //       foreignKey: "recipe_id",
    //       as: "recipe"
    //   })
    //   RecipeIngredient.belongsTo(Ingredient, {
    //       foreignKey: "ingredient_id",
    //       as: "ingredient"
    //   })
    //   RecipeIngredient.belongsTo(Measurement,{
    //       foreignKey: "measurement_id",
    //       as: "measurement"
    //   })
    }
  }
  RecipeIngredient.init({
    recipe_ingredient_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
    },
  }, {
    sequelize,
    modelName: 'RecipeIngredient',
    tableName: 'recipe_ingredients',
    timestamps: false
  });
  return RecipeIngredient;
};
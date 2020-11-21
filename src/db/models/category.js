'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
  };

  Category.associate = (models) => {
   
    Category.belongsToMany(models.Product, {
      through: models.CategoryProduct,
      as: "products",
      foreignKey: "categoryId",
    });
  }

  Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
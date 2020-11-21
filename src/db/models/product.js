'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
  };

  Product.associate = (models) => {
    Product.belongsToMany(models.Category, {
      through: models.CategoryProduct,
      as: "categories",
      foreignKey: "productId",
    });
  }

  Product.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
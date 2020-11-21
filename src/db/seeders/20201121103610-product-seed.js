const {Category} = require('../models')
const Sequelize = require('sequelize');
const op = Sequelize.Op;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = await Category.findAll({where: {name: {
      [op.or]: ["book", "food", "health"]
    }}});
    const categoryIds = {
      food: 0,
      book: 0,
      health: 0
    }
    categories.map(item => {
      if(item.name === "food")
        categoryIds.food = item.id
      else if(item.name === "book")
        categoryIds.book = item.id
      else if(item.name === "health")
        categoryIds.health = item.id
    })
    const foodItems = [{
      name: 'Food 1',
      price: 1,
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Food 2',
      price: 2,
      quantity: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Food 3',
      price: 3,
      quantity: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    await queryInterface.bulkInsert('Products', foodItems).then(async (firstInserted) => {
      const catProd = foodItems.map((item, index) => {
        return {
          productId: firstInserted+index,
          categoryId: categoryIds.food,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
      await queryInterface.bulkInsert('CategoryProducts', catProd)
    });
    
    const bookItems = [{
      name: 'Book 1',
      price: 1,
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Book 2',
      price: 2,
      quantity: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Book 3',
      price: 3,
      quantity: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    await queryInterface.bulkInsert('Products', bookItems).then(async (firstInserted) => {
      const catProd = bookItems.map((item, index) => {
        return {
          productId: firstInserted+index,
          categoryId: categoryIds.health,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
      await queryInterface.bulkInsert('CategoryProducts', catProd)
    });
   
    const healthItems = [{
      name: 'Health 1',
      price: 1,
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Health 2',
      price: 2,
      quantity: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Health 3',
      price: 3,
      quantity: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    await queryInterface.bulkInsert('Products', healthItems).then(async (firstInserted) => {
      const catProd = healthItems.map((item, index) => {
        return {
          productId: firstInserted+index,
          categoryId: categoryIds.food,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
      await queryInterface.bulkInsert('CategoryProducts', catProd)
    });
   
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

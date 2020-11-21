'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      name: 'food',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'book',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'health',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
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

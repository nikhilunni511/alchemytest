const bcrypt = require('bcrypt');
const {Role} = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    userRole = await Role.findOne({where: {name: "user"}});
    merchantRole = await Role.findOne({where: {name: "merchant"}});
    return queryInterface.bulkInsert('Users', [{
      name: 'User 1',
      email: 'user@gmail.com',
      phone: '9999999999',
      password: await bcrypt.hash('Test@123', 10),
      roleId: userRole.id,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Merchant 1',
      email: 'admin@gmail.com',
      phone: '1111111111',
      password: await bcrypt.hash('Admin@123', 10),
      roleId: merchantRole.id,
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

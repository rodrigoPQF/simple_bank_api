'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return  await queryInterface.createTable('bancos', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,

      },
      cnpj: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      rzsocial : {
        type: Sequelize.STRING,
        allowNull: false,

      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,

      },
      updated_at : {
        type: Sequelize.DATE,
        allowNull: false,

      }
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('bancos');
  }
};

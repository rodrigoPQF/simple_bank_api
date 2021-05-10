'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return  await queryInterface.createTable('clientes', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,

      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,

      },

      cpf : {
        type: Sequelize.INTEGER,
        allowNull: false,

      },

      sexo: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      salario: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      contato: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    return await queryInterface.dropTable('clientes');

  }
};

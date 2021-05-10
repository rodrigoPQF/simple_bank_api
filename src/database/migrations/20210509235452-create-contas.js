'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  return await queryInterface.createTable('contas', {
     agencia_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'agencia', key: 'id'},
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'

     },
     cliente_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'clientes', key: 'id'},
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'

     },
     dataopen: {
      type: Sequelize.DATE,
      allowNull: false

     },
     statusconta: {
       type: Sequelize.STRING,
       allowNull: false

     },
     updated_at: {
       type: Sequelize.DATE,
       allowNull: false

     },
     created_at: {
      type: Sequelize.DATE,
      allowNull: false
     }
    });

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('contas');

  }
};

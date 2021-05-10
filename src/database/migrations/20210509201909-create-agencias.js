'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('agencia', {
      id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      numagencia : {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      descagencia : {
        type: Sequelize.STRING,
        allowNull: false,
      },
      banco_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'bancos', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,

      },
      updated_at : {
        type: Sequelize.DATE,
        allowNull: false,

      }



    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('agencia');
  }
};

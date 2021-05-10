const Sequelize = require('sequelize');
const dbConfig = require('../config/database')

const Agencia = require('../models/Agencia')
const Banco = require('../models/Banco')
const Cliente = require('../models/Cliente')


const connection = new Sequelize(dbConfig)

Agencia.init(connection);
Banco.init(connection);
Cliente.init(connection);

Agencia.associate(connection.models);
Cliente.associate(connection.models);
Banco.associate(connection.models)



module.exports = connection;

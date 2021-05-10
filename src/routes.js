const express = require('express');

const AgenciaController = require('./controllers/AgenciaController');
const BancoController = require('./controllers/BancoController');
const ClienteController = require('./controllers/ClienteController');



const routes = express.Router();

routes.post('/bancos', BancoController.store)
routes.get('/bancos', BancoController.index)

routes.post('/bancos/:banco_id/agencias', AgenciaController.store)
routes.get('/bancos/:banco_id/agencias', AgenciaController.index)
routes.get('/bancos/:banco_id/agencias', AgenciaController.indexOne)
routes.delete('./bancos/:bancos_id/agencias', AgenciaController.deletar)


routes.get('/clientes', ClienteController.index)
routes.post('/clientes', ClienteController.store)


module.exports = routes
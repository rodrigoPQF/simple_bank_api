const Cliente = require('../models/Cliente')


module.exports = {
    async index(req, res) {
        const cliente = await Cliente.findAll();

        return res.json(cliente)

    },
    async store(req, res) {
        const { name, sexo, cpf, contato, salario } = req.body

        const cliente = await Cliente.create({name, sexo, cpf, contato, salario})

        return res.json(cliente)
    }
    
}
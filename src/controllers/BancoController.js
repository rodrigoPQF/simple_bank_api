const Banco = require ('../models/Banco')


module.exports = {
    async index(req, res) {
        const bancos = await Banco.findAll()

        return res.json(bancos)
    },

    async store(req, res) {
        const { cnpj, rzsocial } = req.body
        
        const banco = await Banco.create({cnpj, rzsocial})
        
        return res.json(banco)
    }
}
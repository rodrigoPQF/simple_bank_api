const Agencia = require ('../models/Agencia')
const Banco = require('../models/Banco');



module.exports = {
    async index(req, res) {
        const { banco_id } = req.params;

        const banco = await Banco.findByPk(banco_id, {
            include: { association: 'agencias'}
        })

        return res.json(banco.agencias)
    },
    async indexOne(req, res) {
        const { banco_id } = req.params;

        const { name } = req.body;

        const banco = await Banco.findByPk(banco_id, {
            include: { association: 'agencias'}
        })

        const agencia  = await Agencia.findOne({
            where: { name }
        })

        await banco.addAgencia(agencia)

        return res.json(agencia)


    },
    async store(req, res) {
        const { banco_id } = req.params;
        const { numagencia, descagencia } = req.body
        
        const banco = await Banco.findByPk(banco_id);

        if(!banco) {
            return res.status(400).json({error: 'Banco not found'})
        }

       const agencia = await Agencia.create({
           numagencia,
           descagencia,
           banco_id
       })

       return res.json(agencia)
    },

    async deletar(req, res) {
        const { banco_id } = req.params;

        const banco = await Banco.findByPk(banco_id);
        if (banco_id === banco ){
            const agencia = await Agencia.destroy({
                numagencia,
                descagencia,
                banco_id
            })
            return agencia;
        }
    }
}
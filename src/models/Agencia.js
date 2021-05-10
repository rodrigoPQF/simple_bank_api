const { Model, DataTypes } = require('sequelize')

class Agencia extends Model {
    static init(sequelize) {
        super.init ({
            numagencia : DataTypes.INTEGER,
            descagencia : DataTypes.STRING

        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Banco, { foreignKey: 'banco_id', as: 'banco' })

        this.belongsToMany(models.Cliente, {
            through: 'contas',
            as: 'agenciascontas',
            foreignKey: 'agencia_id'
        })
    }
}

module.exports = Agencia;
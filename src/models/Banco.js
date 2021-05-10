const { Model, DataTypes } = require('sequelize')

class Banco extends Model {
    static init(sequelize)  {
        super.init ({
            cnpj : DataTypes.INTEGER,
            rzsocial: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Agencia, { foreignKey: 'banco_id', as: 'agencias' })
    }


}

module.exports = Banco;
const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
    static init(sequelize) {
        super.init({
            name : DataTypes.STRING,
            cpf : DataTypes.INTEGER,
            sexo : DataTypes.STRING,
            contato: DataTypes.INTEGER,
            salario: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
    static associate(models) {

        this.belongsTo(models.Cliente, {
            through: 'contas',
            as: 'clientesagencia',
            foreignKey: 'cliente_id'
        })
    }


}

module.exports = Cliente;
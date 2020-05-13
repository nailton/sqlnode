const { Model, DataTypes } = require('sequelize');

class Address extends Model {
    static init(sequelize) {
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
        }, {
            sequelize,
            underscored: true,
            modelName: 'addresses',
        })
    }

    static associate(models){
      this.belongsTo(models.user, { foreignKey: 'user_id', as: 'user' });
    }
}

module.exports = Address;

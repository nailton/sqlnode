const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize,
            underscored: true,
            modelName: 'user'
        })
    }

      static associate(models){
      this.hasMany(models.addresses, { foreignKey: 'user_id', as: 'addresses' });
        this.belongsToMany(models.techs, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' });
    }
}

module.exports = User;

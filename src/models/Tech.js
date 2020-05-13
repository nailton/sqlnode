const { Model, DataTypes } = require('sequelize');

class Tech extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize,
            underscored: true,
            modelName: 'techs',
        })
    }

    static associate(models){
        this.belongsToMany(models.user, { foreignKey: 'tech_id', through: 'user_techs', as: 'users' });
    }
}

module.exports = Tech;

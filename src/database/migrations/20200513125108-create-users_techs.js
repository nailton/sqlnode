'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('user_techs', { id: Sequelize.INTEGER });
        */
        return queryInterface.createTable('user_techs', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            user_id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: { model: 'users', key: 'id'},
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE',
            },
            tech_id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: { model: 'techs', key: 'id'},
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE',
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('user_techs');
        */
        return queryInterface.dropTable('user_techs');
    }
};

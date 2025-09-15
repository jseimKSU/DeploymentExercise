const { Sequelize } = require('sequelize');

async function up({context: queryInterface}) {
    await queryInterface.createTable('users', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    })
}

async function down({context: queryInterface}) {
    await queryInterface.dropTable('users');
} 

module.exports = {up, down}
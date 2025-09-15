const { Sequelize } = require('sequelize');
const database = require('../config/database')

const UserSchema = {
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
}

const User = database.define(
    // Model Name
    'User',
    // Schema
    UserSchema,
    // Other options
    {
        tableName: 'users'
    }
)

module.exports = { User }
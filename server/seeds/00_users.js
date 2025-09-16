const { Sequelize } = require('sequelize');

// Timestamp in the appropriate format for the database
const now = new Date().toISOString().slice(0, 23).replace("T", " ") + " +00:00";

// Array of objects to add to the database
const users = [
    {
        id: 1,
        username: 'admin',
        createdAt: now,
        updatedAt: now
    },
    {
        id: 2,
        username: 'contributor',
        createdAt: now,
        updatedAt: now
    },
    {
        id: 3,
        username: 'manager',
        createdAt: now,
        updatedAt: now
    },
    {
        id: 4,
        username: 'user',
        createdAt: now,
        updatedAt: now
    },
];

async function up({context: queryInterface}) {
    await queryInterface.bulkInsert('users', users);
    await queryInterface.sequelize.query("SELECT setval('users_id_seq', max(id)) FROM users;");
}

async function down({context: queryInterface}) {
    await queryInterface.bulkDelete("users", {}, { truncate: true });
} 

module.exports = {up, down}
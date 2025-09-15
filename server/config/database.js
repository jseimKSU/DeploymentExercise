const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
// Supports "sqlite" or "postgres"
  dialect: "postgres",
  host: process.env.DATABASE_HOST || "db",
  port: process.env.DATABASE_PORT || 5432,
  username: process.env.DATABASE_USERNAME || "postgres",
  password: process.env.DATABASE_PASSWORD || "postgres",
  database: process.env.DATABASE_NAME || "postgres",
})

module.exports = sequelize;
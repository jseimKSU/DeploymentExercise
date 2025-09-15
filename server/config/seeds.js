const { Umzug, SequelizeStorage } = require('umzug');

const database = require('./database')

const umzug = new Umzug({
    migrations: {glob: 'seeds/*.js'},
    context: database.getQueryInterface(),
    storage: new SequelizeStorage({
        sequelize: database,
        modelName: 'seeds'
    }),
})

module.exports = umzug;
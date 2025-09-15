const { Umzug, SequelizeStorage } = require('umzug');

const database = require('./database')

const umzug = new Umzug({
    migrations: {glob: 'migrations/*.js'},
    context: database.getQueryInterface(),
    storage: new SequelizeStorage({
        sequelize: database,
        modelName: 'migrations'
    }),
})

module.exports = umzug;
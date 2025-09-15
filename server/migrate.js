require('@dotenvx/dotenvx').config()
const migrations = require('./config/migrations')
migrations.runAsCLI()
require('@dotenvx/dotenvx').config()
const seeds = require('./config/seeds')
seeds.runAsCLI()
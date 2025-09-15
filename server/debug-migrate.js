require('@dotenvx/dotenvx').config();
const migrations = require('./config/migrations');

async function go(){
  try{
    console.log('Running migrations.up()...');
    await migrations.up();
    console.log('migrations.up() complete');
    process.exit(0);
  }catch(e){
    console.error('migrations.up() FAILED:');
    console.error(e);
    process.exit(1);
  }
}
go();
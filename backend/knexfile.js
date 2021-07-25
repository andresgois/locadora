// Update with your config settings.
require('dotenv').config();

const {HOST, BD_PORT, DATABASE, USER, PASSWORD} = process.env;

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: HOST,
      user: USER,
      password: PASSWORD,
      database: DATABASE,
      port: BD_PORT,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    }
  }

};
// socket: '/var/run/mysqld/mysqld.sock'

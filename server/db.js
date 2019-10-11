
const pg = require('pg');

const dotenv = require('dotenv');
dotenv.config();

const config = {
  connectionString: process.env.DATABASE_URL
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('connected to the Database');
});

const createTables = () => {
  const userTable = `CREATE TABLE IF NOT EXISTS
     entry(
        id SERIAL PRIMARY KEY,
        entry_title VARCHAR(128) NOT NULL,
        entry_detail VARCHAR(128) NOT NULL,
        created_on VARCHAR(128) NOT NULL
      )`;
  pool.query(userTable)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

pool.on('remove', () => {
  console.log('client removed');
  // process.exit(0);
});


module.exports = {
  createTables,
  pool,
};

require('make-runnable');
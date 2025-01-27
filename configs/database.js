require('dotenv').config()

const pg = require("pg");

// coneccion a la base de datos

module.exports = new pg.Pool({
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  ssl: process.env.PG_SSL === "true"
});

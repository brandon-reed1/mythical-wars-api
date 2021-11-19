require('dotenv').config();
const Pool = require('pg-pool');
const { Client } = require('pg');

let client

if (process.env.NODE_ENV === "production") {
  client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
  client.connect();
} else {
  client = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT,
  });
}

module.exports = client;
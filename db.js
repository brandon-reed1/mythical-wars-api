const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Y0dabe@r",
  host: "localhost",
  port: 5432,
  database: "mythicals"
});

module.exports = pool;
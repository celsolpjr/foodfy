const { Pool } = require("pg");

module.exports = new Pool({

    user: "postgres",
    password: "gamerock8",
    port: 5432,
    host: "localhost",
    database: "foodfy"

})
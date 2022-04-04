const Pool = require('pg').Pool; //la conexion a Pool es conectarse a las bdd que postgres posee.

//definicion de que bdd nos queremos conectar en postgres
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "perntodo",
    password: "hola1234",
    port:5432,

});

module.exports = pool;
const mysql = require('mysql');
const config = require('../config/config')['db']

let connection = mysql.createConnection({
    host: config['host'],
    port: config['port'],
    user: config['user'],
    password: config['pass'],
    database: config['db_name']
});

let queryResult = [];

module.exports = {
    dbQuery(array = []) {

        connection.connect( (error) => {
            if(error) throw "data base connec exception: " + error;

            for(let i = 0; i < array.length; i++) {
                connection.query(array[i], (error, result, fields) => {
                    if(error) throw 'data base query exception: ' + error;
                });
            }
            connection.end();
        })
    }
}
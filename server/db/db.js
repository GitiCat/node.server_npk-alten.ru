const mysql = require('mysql');
const config = require('../config/config')['db'];

let db_connection = mysql.createPool({
    host: config['host'],
    port: config['port'],
    user: config['user'],
    password: config['pass'],
    database: config['db_name'],
    connectTimeout: config['connectTimeout'],
    connectionLimit: config['connectionLimit']
});

module.exports = {
    fetchData(query_str, callback) {
        db_connection.getConnection( (error, connection) => {
            if(error) {
                console.log(error);
            }
            else {
                connection.query(query_str, (error, result) => {
                    if(error) {
                        callback(error, null);
                        connection.release();
                    }
                    else {
                        callback(null, result);
                        connection.release();
                    }
                });
            }
        });
    }
}
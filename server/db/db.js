const mysql = require('mysql');
const config = require('../config/config')['db'];

let db_connection = mysql.createConnection({
    host        : config['host'],
    port        : config['port'],
    user        : config['user'],
    password    : config['pass'],
    database    : config['db_name']
});

module.exports = {
    fetchData(query_str, callback) {
        db_connection.query(query_str, (error, result) => {
            if(error) {
                callback(error, null);
            }
            else {
                callback(null, result);
            }
        });
    }
}
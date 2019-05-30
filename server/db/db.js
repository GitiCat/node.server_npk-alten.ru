const mariadb = require('mariadb');
const config = require('../config/config')["db"];

let connectionPool = mariadb.createPool({
    host: config["host"],
    port: config["port"],
    database: config["db_name"],
    user: config["user"],
    password: config["pass"],
    connectionLimit: config["connectionLimit"]
});

module.exports = {
    async dbQuery(queries = []) {
        let connection;
        let result = [];

        try {
            connection = await connectionPool.getConnection();

            for(let index = 0; index < queries.length; index++) {
                await connection.query(queries[index]).then(responc => {
                    console.log(responc);
                    
                });
            }
        } 
        catch(error) {
            console.log(error);
            return '';
        } 
        finally {
            if(connection) 
                connection.end();
            return result;
        }
    }
}
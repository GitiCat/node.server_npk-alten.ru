const bodyParser = require('body-parser');
const helmet = require('helmet');
const normalizePort = require('normalize-port');
const express = require('express');
const path = require('path');
const JsonRoutes = require('./routers');
const fs = require('fs');

const models = require('./models/models');
const mysql = require('mysql');
const config = require('./config/config')['db']

const server = express()
const port = normalizePort(process.env.PORT || '8080');

const LoggerMiddleware = (req,res,next) =>{
    console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
    next();
}

//server.use(LoggerMiddleware);
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use(helmet());
server.use(express.static("dist"));
server.use(express.static("js"));

let db_connection = mysql.createConnection({
    host: config['host'],
    port: config['port'],
    user: config['user'],
    password: config['pass'],
    database: config['db_name']
});

function fetchUrl(callback) {
    db_connection.query(models.SERVER_SELECT_LINKS, (error, result) => {
        if(error) 
            callback(error, null);
        else
            callback(null, result);
    });
};

fetchUrl((error, result) => {
    if(error)
        console.log(error);
    else {
        result.map(props => {
            server.get(props.link_url, (req, res) => {
                server.get('/api/getHome', (req, res) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(props);
                });
            });
        });
    }
});

// set default template to app
server.use('/*', (req, res, next) => {
    console.log(req.headers.referer);
    res.sendFile(path.join(__dirname + '/../dist', "index.html"));
});
server.listen(port, () => console.log(`Listening on port ${port}!`));
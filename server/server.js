const bodyParser = require('body-parser');
const helmet = require('helmet');
const normalizePort = require('normalize-port');
const express = require('express');
const path = require('path');
const JsonRoutes = require('./routers');

const server = express()
const port = normalizePort(process.env.PORT || '8080');

const LoggerMiddleware = (req,res,next) =>{
    console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
    next();
}

server.use(LoggerMiddleware);
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use(helmet());
server.use(express.static("dist"));
server.use(express.static("js"));

const db_conn = require("./db/db");
const model = "SELECT link_url, link_name, link_title FROM links";
db_conn.dbQuery([model]).then(res => res.map(res => console.log(res)));

// set default template to app
server.use('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/../dist', "index.html"));
});


// set list routes in of the server
JsonRoutes.map(props => {
    server.get(props.path, (req, res) => {
        res.send(props.componentName);
    });
});

server.listen(port, () => console.log(`Listening on port ${port}!`));
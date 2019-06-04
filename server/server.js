const bodyParser = require('body-parser');
const helmet = require('helmet');
const normalizePort = require('normalize-port');
const express = require('express');
const path = require('path');
const fs = require('fs');

const db = require('./db/db.js');
const models = require('./models/models.js');
const api = require('./api.js');

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

api.initApi(server);

db.fetchData(models.urlQuery(), (error, result) => {
    if(error)
        console.log(error);
    else {
        result.map(props => {
            server.get(props.link_url, (req, res) => {
                res.sendFile(path.join(__dirname + '/../dist', 'index.html'));
            })
        })
    }
})

server.listen(port, () => console.log(`Listening on port ${port}!`));
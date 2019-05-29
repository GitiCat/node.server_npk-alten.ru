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
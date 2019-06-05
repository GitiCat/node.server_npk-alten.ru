const bodyParser    = require('body-parser'),
      helmet        = require('helmet'),
      normalizePort = require('normalize-port'),
      express       = require('express'),
      path          = require('path'),
      fs            = require('fs');

const db            = require('./db/db.js'),
      models        = require('./models/models.js'),
      api           = require('./api.js');

const server = express();
const port = normalizePort(process.env.PORT || '8080');
const productionRouter = express.Router();

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

server.use(function(req, res, next) {
  return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
});

server.use(function(err, req, res, next) {
  return res.status(500).send({ error: err });
});

/* Initialization api functions */
api.initApi(server);

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist', 'index.html'));
});

server.get('/history', (req, res) => {
  res.sendFile(path.join(__dirname + '/../dist', 'index.html'));
});

server.get('/activity', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist', 'index.html'));
});

server.use('/productions', productionRouter);

server.get('/documents', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist', 'index.html'));
});

/* Productions Router: main page */
productionRouter.get('/', (req, res) => {
   res.sendFile(path.join(__dirname + '/../dist', 'index.html')); 
});

/* Productions Router: rechargeable batteries page */
productionRouter.get('/rechargeable-batteries', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist', 'index.html'));
});

/* Productions Router: primary sources page */
productionRouter.get('/primary-sources', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist', 'index.html'));
});

/* Productions Router: charge / discharge devices page */
productionRouter.get('/charge-discharge-devices', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist', 'index.html'));
});

server.listen(port, () => console.log(`Listening on port ${port}!`));
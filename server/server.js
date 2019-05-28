const bodyParser = require('body-parser');
const express = require('express')


const app = express()
const port = 8080

const LoggerMiddleware = (req,res,next) =>{
    console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
    next();
}

app.use(LoggerMiddleware);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static("dist"));

app.get('/', function(req, res){
    res.send("Home Route");
});

app.get('/activity', function(req, res) {
    res.send("Activity Route");
});

app.get('/history', function(req, res) {
    res.send("History Route");
});

app.get('/productions', function(req, res) {
    res.send("Production Route");
});

app.get('/documents', function(req, res) {
    res.send("Documents Route");
});

app.listen(port)
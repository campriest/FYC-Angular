var express = require('express');
var app = express();

var router = express.Router();
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var pg = require('pg');

var connectString= "postgres://fyc_master:fycmaster@localhost/fycdata";
var pgClient = new pg.Client(connectString);

pgClient.connect();
// var query = pgClient.query();

app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) =>{

    pg.connect(connect, (err, client, done) =>{
        if(err){

            return console.error("error fetching", err);
        }



    })

    res.sendFile(__dirname + '/index.html');

});

var signUp = express.Router();

    signUp.get('', (req, res) =>{


    });


    signUp.post('', (req, res) =>{

    });

var albumLoad = express.Router();

    albumLoad.get('', (req, res) =>{


    });

    albumLoad.post('', (req, res) =>{

    });

    albumLoad.patch('', (req, res) =>{


    });


var server = app.listen(3000, function () {

var host = server.address().address;
var port = server.address().port;

});



console.log("App is working");

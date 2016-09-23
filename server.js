var express = require('express');
var app = express();

var router = express.Router();
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var pg = require('pg');

var connectString= "postgres://fyc_master:fycmaster@localhost/fycdata";
var pgClient = new pg.Client(connectstring);
pgClient.connect();
var query = pgCient.query();

app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){

    pg.connect(connect, function(err, client, done){
        if(err){

            return console.error("error fetching", err);
        }



    })

    res.sendFile('/index.html');

});

var signUp = express.Router();

    signUp.get('', function(req, res){


    });


    signUp.post('', function(req, res){

    });

var albumLoad = express.Routher();

    albumLoad.get('', function(req, res){


    });

    albumLoad.post('', function(req, res){

    });

    albumLoad.patch('', function(req, res){


    });


var server = app.listen(3000, function () {

var host = server.address().address;
var port = server.address().port;

});



console.log("App is working");

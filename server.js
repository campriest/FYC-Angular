var express = require('express');
var app = express();

var router = express.Router();
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var hbs = require('hbs');

app.set('view engine', 'html');
app.engine('html', hbs.__express);




// app.use('/', express.static(__dirname + '/views'));
// app.use('/news', express.static(__dirname + '/views'));
// app.set('views', path.join(__dirname, 'views'));
app.use('/css', express.static(__dirname + "/css"));
app.use('/js', express.static(__dirname + "/js"));
app.use( express.static('views'));

app.get('/', (req, res) =>{
    res.render('index');
});





//
// app.get('/news', (req, res) =>{
//     res.render('news');
// });
//
// app.get('/yours', (req, res) =>{
//     res.render('yours');
// });
//
// app.get('/select', (req, res) =>{
//     res.render('select');
// });


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

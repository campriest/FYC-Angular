var express = require('express');
var app = express();

var router = express.Router();
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');



app.get('/', function(req, res){

    res.sendFile(path.join(__dirname + '/index.html'));

});
// router.get('/', function(req, res, next){
//
//
//     // res.sendFile(path.join(__dirname, '../', 'views','index.html'));
//     res.sendFile('index.html');
//
//
//
// });
//
// module.exports = router;



// app.listen(3000);
var server = app.listen(3000, function () {

var host = server.address().address;
var port = server.address().port;

});



console.log("App is working");

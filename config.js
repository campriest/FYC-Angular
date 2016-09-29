var pg = require('pg');

var connectString= "postgres://fyc_master:fycmaster@localhost/fycdata";
var pgClient = new pg.Client(connectString);

pgClient.connect();
// var query = pgClient.query();


pg.connect(connect, (err, client, done) =>{
    if(err){

        return console.error("error fetching", err);
    }



})

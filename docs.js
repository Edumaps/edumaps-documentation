var express = require("express");

var app = express();

app.use("/", express.static("docs/api/"));

app.get('/', function(req, res){
        res.sendFile(__dirname + '/docs/api/index.html');
});


var port = 8080;

var server = app.listen(port, function(){
        console.log("Developer Docs are listening. Port: " + port);
});
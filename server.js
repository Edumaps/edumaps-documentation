var express = require("express");

var app = express();

app.use("/", express.static("docs/portal/"));
app.use("/api", express.static("docs/api/"));
app.use("/manual", express.static("docs/manual/"));


// app.get('/', function(req, res){
//         res.sendFile(__dirname + '/public/index.html');
// });




var port = process.env.EDU_DOCS_PORT || 8080;

var server = app.listen(port, function(){
        console.log("Docs are listening. Port: " + port);
});
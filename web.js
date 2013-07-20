var express = require('express');

var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    //var b = fs.readFileSync('index.html');
    
    //response.send(b.toString());
    response.sendfile('index.html', {root: __dirname});
});

app.get('/css/style.css', function(request, response) {
    var b = fs.readFileSync('css/style.css');
    //response.setHeader('Content-Type', 'stylesheet');
    console.log(__dirname + request.params[0]);
    response.sendfile('css/style.css', {root: __dirname});
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

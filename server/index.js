var http = require('http');
var path = require('path');

var express = require('express');
var compression = require('compression');

var app = express();
var server = http.Server(app);

app.use(compression());
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.static(path.join(__dirname, '..', 'public')));

server.listen(process.env.PORT || 3000, _ => {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`Example app listening at http://${host}:${port}`);
});
